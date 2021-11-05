export interface DirtyAvDesc {
    video: string,
    hash: string,
    createTime: number,
    isDirty: boolean,
    size: number
}

export interface AvDesc extends DirtyAvDesc {
    id: string,
    performers: string[] | string,
    cover: string,
}