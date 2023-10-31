import React, { useEffect } from "react";
import { useTrackRiver } from "../context";
import { SidebarProps } from "./types";
import { ArkitektNodeData, FlowNode } from "../../types";

export const ArkitektTrackNodeSidebar = (
  props: SidebarProps<FlowNode<ArkitektNodeData>>,
) => {
  const { runState, run } = useTrackRiver();

  const latestEvent = runState?.events?.find(
    (e) => e?.source === props.node.id,
  );

  return (
    <>
      {" "}
      <div className="px-5 py-5 flex flex-col">
        <div className="text-white text-xl"> {props.node.data.name}</div>
        <div className="text-white text-cl mt-4">{props.node.data.hash}</div>

        {latestEvent?.type == "NEXT" && <>{JSON.stringify(latestEvent.t)}</>}
        {latestEvent?.type == "ERROR" && (
          <div className="text-red-200">{latestEvent.value}</div>
        )}
        <div className="text-white text-cl mt-4"></div>
      </div>
    </>
  );
};
