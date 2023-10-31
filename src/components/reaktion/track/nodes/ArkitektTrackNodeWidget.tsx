import React, { useState } from "react";
import { BsPlay, BsStop } from "react-icons/bs";
import { Handle, Position } from "reactflow";
import { useTrackRiver } from "../context";
import { NodeTrackLayout } from "./layout/NodeTrack";
import { ArkitektNodeProps } from "../../types";
import { useNodeLayout, withLayout } from "../../base/node/layout";
import { RunEventFragment } from "../../api";

export const ArkitektTrackNodeWidget: React.FC<ArkitektNodeProps> = withLayout(
  ({ data, id }) => {
    const { runState } = useTrackRiver();
    const { isExpanded, toggleExpanded } = useNodeLayout();

    const [frozenevent, setFrozenEvent] = useState<
      RunEventFragment | null | undefined
    >();

    const latestEvent =
      frozenevent || runState?.events?.find((e) => e?.source === id);

    const border =
      data.kind === "Generator" ? "1px solid #ff0033" : "1px solid #ff00ff";

    return (
      <NodeTrackLayout id={id}>
        {data.instream.map((s, index) => (
          <Handle
            type="target"
            position={Position.Left}
            id={"arg_" + index}
            style={{
              top: "50%",
              zIndex: "-1",
              cursor: "pointer",
              //boxShadow: "0px 0px 10px #ff1493",
            }}
            data-tip={
              s && s.length > 0
                ? s.map((s) => `${s?.kind} ${s?.key}`).join("|")
                : "Event"
            }
            data-for={"tooltip" + id}
          ></Handle>
        ))}
        {data.outstream.map((s, index) => (
          <Handle
            type="source"
            position={Position.Right}
            id={"return_" + index}
            style={{
              top: "50%",
              zIndex: "-1",
              cursor: "pointer",
              //boxShadow: "0px 0px 10px #ff1493",
            }}
            data-tip={
              s && s.length > 0
                ? s.map((s) => `${s?.kind} ${s?.key}`).join("|")
                : "Event"
            }
            data-for={"tooltip" + id}
          />
        ))}
        <div
          className="flex-initial font-light text-xl mb-1 custom-drag-handle cursor-pointer truncate"
          onDoubleClick={() => toggleExpanded()}
        >
          <div className="w-full flex flex-row justify-between">
            {data?.name}
          </div>
        </div>
        <p className="flex-initial text-xs font-extralight truncate">
          {data?.name}
        </p>
        {isExpanded && (
          <>
            <div
              className={"px-2 py-2 flex-grow flex flex-col overflow-hidden"}
            >
              {JSON.stringify(latestEvent?.value)}
            </div>
          </>
        )}
      </NodeTrackLayout>
    );
  },
);
