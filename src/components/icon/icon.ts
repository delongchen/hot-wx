import { createVNode } from "vue";
import  * as $Icon from '@ant-design/icons-vue'

export const CreateIcon = (props: { icon: string }) => {
  const { icon, ...rest } = props;
  return createVNode(($Icon as any)[icon], {...rest});
};
