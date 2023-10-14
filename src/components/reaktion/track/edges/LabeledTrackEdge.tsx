import React, { useEffect } from "react";
import { EdgeLabelRenderer, getSmoothStepPath } from "reactflow";
import { useTrackRiver } from "../context";
import { RunEventType } from "../../api";
import { LabeledEdgeProps } from "../../types";

export const colorForStyle: { [key in RunEventType]: string } = {
  COMPLETE: "rgb(187, 247, 208)",
  NEXT: "rgb(30 58 138)",
  ERROR: "#F00",
  UNKNOWN: "#FFF",
};

export const colorForLatestStyle: { [key in RunEventType]: string } = {
  COMPLETE: "rgb(187, 247, 208)",
  NEXT: "rgb(100 100 228)",
  ERROR: "#F00",
  UNKNOWN: "#FFF",
};

export const LabeledTrackEdge: React.FC<LabeledEdgeProps> = (props) => {
  const { runState, run } = useTrackRiver();

  const latestEvent = runState?.events?.find((e) => e?.source === props.source);

  const target = props.target;

  const latestGlobalEvent = runState?.events
    ?.sort((a, b) => (b?.t || 0) - (a?.t || 0))
    .at(0);

  let color = latestEvent ? colorForStyle[latestEvent.type] : "white";
  color =
    latestEvent && latestEvent?.id == latestGlobalEvent?.id
      ? colorForLatestStyle[latestEvent.type]
      : color;

  const {
    id,
    sourcePosition,
    targetPosition,
    sourceX,
    sourceY,
    targetX,
    targetY,
    style,
    markerStart,
    markerEnd,
    data,
  } = props;

  const [edgePath, labelX, labelY] = getSmoothStepPath({
    sourcePosition,
    targetPosition,
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  return (
    <>
      <path
        id={id}
        style={{
          ...style,
          stroke: color,
          strokeWidth: latestEvent?.id == latestGlobalEvent?.id ? 5 : 1,
        }}
        className={`react-flow__edge-path transition-colors duration-300 ${
          latestEvent?.id == latestGlobalEvent?.id ? "animate-pulse  " : ""
        }`}
        d={edgePath}
      />
      <text>
        <textPath
          href={`#${id}`}
          style={{ fontSize: "13px", fill: "white" }}
          startOffset="50%"
          textAnchor="middle"
          className="group"
        ></textPath>
      </text>
      <EdgeLabelRenderer>
        <div
          style={{
            position: "absolute",
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            pointerEvents: "all",
          }}
          className={`${
            latestEvent?.id == latestGlobalEvent?.id
              ? "opacity-100"
              : "opacity-0"
          } transition-all duration-500 flex flex-row group m-auto hover:bg-gray-500 bg-gray-800 border-[#555] border rounded-lg shadow-lg p-1 cursor-pointer select-none text-gray-400 left[-75px] hover:text-gray-200 `}
        ></div>
      </EdgeLabelRenderer>
    </>
  );
};
