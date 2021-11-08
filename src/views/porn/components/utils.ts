import { count } from "console";
import { AvDesc, DirtyAvDesc } from "./../../../types/AV";

const videoNameReg = /\.\w+$/;

const tagNameReg = /\-\w+$/;

export const getVideoName = (video: string) => {
  return video.replace(videoNameReg, "");
};

export const getTagName = (id: string) => {
  return id.replace(tagNameReg, "");
};

interface AvFilterAgruments {
  tags?: Record<string, boolean>;
  performers?: Record<string, boolean>;
  sizeRange?: [number, number];
  createTimeRange?: [number, number];
  dirtyFilter?: boolean;
}

export class AvFilter {
  public tags: Record<string, boolean>;

  public performers: Record<string, boolean>;

  public sizeRange: [number, number];

  public createTimeRange: [number, number];

  private dirtyFilter: boolean;

  public static fromAvs(
    avs: (DirtyAvDesc | AvDesc)[],
    dirtyFilter: boolean = false
  ) {
    const tags: Record<string, boolean> = {};
    const performersChecked: Record<string, boolean> = {};
    const isDirty = avs[0]?.isDirty;
    const sizeRange: [number, number] = [0, 0];
    const createTimeRange: [number, number] = [0, 0];
    for (let i = 0; i < avs.length; i++) {
      const av = avs[i];
      if (!isDirty) {
        const { performers, id } = av as AvDesc;
        performers.split(",").forEach((performer) => {
          if (performer.length < 12) {
            performersChecked[performer] = false;
          }
        });
        tags[getTagName(id)] = false;
      }
      sizeRange[0] = Math.min(sizeRange[0] || Infinity, av.size);
      sizeRange[1] = Math.max(sizeRange[1], av.size);
      createTimeRange[0] = Math.min(
        createTimeRange[0] || Infinity,
        av.createTime
      );
      createTimeRange[1] = Math.max(createTimeRange[1], av.createTime);
    }
    return new AvFilter({
      tags,
      performers: performersChecked,
      sizeRange,
      createTimeRange,
      dirtyFilter,
    });
  }

  constructor({
    tags,
    performers,
    sizeRange = [0, 0],
    createTimeRange = [0, 0],
    dirtyFilter = false,
  }: AvFilterAgruments) {
    this.tags = tags ?? {};
    this.performers = performers ?? {};
    this.sizeRange = sizeRange;
    this.createTimeRange = createTimeRange;
    this.dirtyFilter = dirtyFilter;
  }

  public filterAvs(avs: (DirtyAvDesc | AvDesc)[]) {
    const tagsKeys = Object.keys(this.tags).filter((key) => this.tags[key]);
    const performerKeys = Object.keys(this.performers).filter(
      (key) => this.performers[key]
    );

    return avs.filter(
      (av: any) =>
        (!tagsKeys.length || tagsKeys.some((key) => av.id?.includes(key))) &&
        (!performerKeys.length ||
          performerKeys.some((key) => av.performers?.includes(key))) &&
        av.size >= this.sizeRange[0] &&
        av.size <= this.sizeRange[1] &&
        av.createTime >= this.createTimeRange[0] &&
        av.createTime <= this.createTimeRange[1]
    );
  }
}
