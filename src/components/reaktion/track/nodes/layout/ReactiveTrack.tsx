import React from "react";
import { useNodeLayout } from "../../../base/node/layout";
import { useTrackRiver } from "../../context";
const additional = {
  pink: "border-pink-500 shadow-pink-500/5 dark:border-pink-200 dark:shadow-pink-200/10",
  blue: "border-blue-500 shadow-blue-500/50 dark:border-blue-200 dark:shadow-blue-200/10",
  green:
    "border-green-500 shadow-green-500/50 dark:border-green-200 dark:shadow-green-200/10",
  red: "border-red-500 shadow-red-500/50 dark:border-red-200 dark:shadow-red-200/10",
};

type NodeProps = {
  children: React.ReactNode;
  color?: keyof typeof additional;
  id: string;
};

export const additionalForState: { [x: string]: string } = {
  ERROR:
    "text-red-800 border-red-900 dark:border-red-900 dark:shadow--200/10 animate-pulse dark:bg-red-800",
  NEXT: "text-blue-800 border-blue-900 dark:border-blue-900 dark:shadow-blue-200/10",
  COMPLETE:
    "text-green-800 border-green-900 dark:border-green-900 dark:shadow-green-200/10 dark:bg-slate-800 opacity-0.8",
};

export const ReactiveTrackLayout: React.FC<NodeProps> = ({
  children,
  id,
  color = "pink",
}) => {
  const { runState } = useTrackRiver();
  const { isExpanded } = useNodeLayout();

  let latestEvent = runState?.events?.find((i) => i?.source === id);

  let classNames = latestEvent ? additionalForState[latestEvent.type] : "";

  return (
    <>
      <div
        className={
          `px-2 py-2 z-50 shadow-xl bg-white rounded-md dark:bg-gray-800  text-black border ` +
          classNames
        }
      >
        {children}
      </div>
    </>
  );
};
