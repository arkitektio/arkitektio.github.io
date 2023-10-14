import { Link } from "react-router-dom";
import { useTrackRiver } from "../context";
import React from "react";

export const CanvasSidebar = (props: {}) => {
  const { run } = useTrackRiver();

  return (
    <div className="h-full flex flex-col text-white p-3">
      <div className="text-white flex-initial text-xl">Flow</div>
      <div className="text-white flex-initial mt-2">{run?.id}</div>
    </div>
  );
};
