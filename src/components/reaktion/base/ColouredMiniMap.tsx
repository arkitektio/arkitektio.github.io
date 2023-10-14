import React from "react";
import { MiniMap } from "reactflow";

export const ColouredMiniMap = (props: any) => (
  <div className="bg-gray-200 lg:block hidden">
    <MiniMap
      style={{
        backgroundColor: "transparent",
        border: "2px solid #ffffff",
        top: "0",
        height: "20%",
      }}
      nodeStrokeColor={(n) => {
        if (n.type === "ArgNode") return "#FF0095";
        if (n.type === "ReturnNode") return "#0095FF";
        if (n.type === "KwargNode") return "#95FF00";
        if (n.type === "ArkitektNode") return "#0041d0";
        if (n.type === "ReactiveNode") return "#ff41d0";
        return "";
      }}
      nodeBorderRadius={0}
      nodeStrokeWidth={5}
      nodeColor={(n) => {
        if (n.type === "ArgNode") return "#FF0095";
        if (n.type === "ReturnNode") return "#0095FF";
        if (n.type === "KwargNode") return "#95FF00";
        if (n.type === "ReactiveNode") return "#ffFF00";
        return "#fff";
      }}
      maskColor="transparent"
    />
  </div>
);
