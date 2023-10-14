import { FlowNode } from "../../types";

export type SidebarProps<T extends FlowNode> = {
  node: T;
};
