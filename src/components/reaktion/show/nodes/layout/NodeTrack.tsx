import React from "react";
import { FaAccessibleIcon } from "react-icons/fa";
import { NodeResizer, NodeResizeControl } from "reactflow";

const additional = {
  pink: "border-pink-300 shadow-pink-500/20 ",
  blue: "border-blue-500 shadow-blue-500/20 ",
  green: "border-green-500 shadow-green-500/20 ",
  red: "border-red-500 shadow-red-500/20 ",
  white: "border-slate-200 shadow-slate-200/20",
};

const controlStyle = {
  background: "transparent",
  border: "none",
};
type NodeProps = {
  children: React.ReactNode;
  color?: keyof typeof additional;
  id: string;
};

export const NodeShowLayout: React.FC<NodeProps> = ({
  children,
  id,
  color = "white",
}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <>
      <div
        className={`px-2 py-2 z-50 shadow-xl  rounded-md bg-gray-800 text-white text-black border flex-grow flex flex-col h-full w-full transition-colors ease-in-out delay-150 ${additional[color]}`}
      >
        {children}
      </div>
    </>
  );
};
