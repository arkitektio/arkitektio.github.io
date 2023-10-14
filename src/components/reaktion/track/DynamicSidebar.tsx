import { useTrackRiver } from "./context";
import React from "react";
import { ArkitektTrackNodeSidebar } from "./sidebars/ArkitektTrackNodeSidebar";
import { CanvasSidebar } from "./sidebars/CanvasSidebar";

export const DynamicSidebar = () => {
  const { selectedNode, flow } = useTrackRiver();

  if (!selectedNode) return <CanvasSidebar />;

  return (
    <>
      {selectedNode?.type == "ArkitektNode" && (
        <ArkitektTrackNodeSidebar node={selectedNode} />
      )}
    </>
  );
};
