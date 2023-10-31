import React, { useState } from "react";
import { Handle, Position } from "reactflow";
import { NodeTrackLayout } from "../layout/NodeTrack";
import { withLayout } from "../../../base/node/layout";
import { ReturnNodeProps } from "../../../types";

export const ReturnTrackNodeWidget: React.FC<ReturnNodeProps> = withLayout(
  ({ data: { outstream, instream }, id }) => {
    const [show, setShow] = useState(false);
    const [isSmall, setIsSmall] = useState(true);

    return (
      <>
        <NodeTrackLayout color="red" id={id}>
          <div className="px-2 py-2">
            <div
              className="font-light text-xl custom-drag-handle cursor-pointer"
              onDoubleClick={() => setIsSmall(!isSmall)}
            >
              Outputs
            </div>
            <p className="text-gray-700 text-base">
              {!isSmall && (
                <button
                  type="button"
                  className="rounded px-2 py-1 text-xs font-semibold border-gray-300"
                  onClick={() => setShow(true)}
                >
                  Add Documentation
                </button>
              )}
            </p>
          </div>
        </NodeTrackLayout>
        {instream.map((s, index) => (
          <Handle
            type="target"
            position={Position.Left}
            id={"arg_" + index}
            style={{ background: "#555" }}
            data-tip={s && s.map((s) => s?.kind).join(" | ")}
            data-for={"tooltip" + id}
          />
        ))}
      </>
    );
  },
);
