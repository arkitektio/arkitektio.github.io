import React, { useState } from "react";
import { Handle, Position } from "reactflow";
import { withLayout } from "../../../base/node/layout";
import { ReturnNodeProps } from "../../../types";
import { NodeShowLayout } from "../layout/NodeTrack";

export const ReturnTrackNodeWidget: React.FC<ReturnNodeProps> = withLayout(
  ({ data: { outstream, instream }, id }) => {
    const [show, setShow] = useState(false);
    const [isSmall, setIsSmall] = useState(true);

    return (
      <>
        <NodeShowLayout color="red" id={id}>
          <div className="px-2 py-2">
            <div
              className="font-light text-xl custom-drag-handle cursor-pointer"
              onDoubleClick={() => setIsSmall(!isSmall)}
            >
              Outputs
            </div>
            <p className="text-gray-700 text-base">
              <>
                {instream[0]?.map((o) => o?.kind).join(" | ")}
                <br />
              </>
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
        </NodeShowLayout>
        {instream.map((s, index) => (
          <Handle
            type="target"
            position={Position.Left}
            id={"arg_" + index}
            style={{ background: "#555" }}
          />
        ))}
      </>
    );
  },
);
