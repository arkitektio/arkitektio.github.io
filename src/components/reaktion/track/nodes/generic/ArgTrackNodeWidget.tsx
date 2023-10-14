import React, { useState } from "react";
import { BsPlay, BsStop } from "react-icons/bs";
import { useTrackRiver } from "../../context";
import { NodeTrackLayout } from "../layout/NodeTrack";
import { Handle, Position } from "reactflow";
import { RunEventFragment } from "../../../api";
import { ArgNodeProps } from "../../../types";
import { withLayout } from "../../../base/node/layout";

export const ArgTrackNodeWidget: React.FC<ArgNodeProps> = withLayout(
  ({ data: { outstream, instream }, id }) => {
    const { runState } = useTrackRiver();
    const [show, setShow] = useState(false);
    const [isSmall, setIsSmall] = useState(true);

    const [frozenevent, setFrozenEvent] = useState<
      RunEventFragment | null | undefined
    >();

    const latestEvent =
      frozenevent || runState?.events?.find((e) => e?.source === id);

    return (
      <>
        <NodeTrackLayout color="blue" id={id}>
          <div className="px-2 py-2">
            <div
              className="font-light text-xl custom-drag-handle cursor-pointer"
              onDoubleClick={() => setIsSmall(!isSmall)}
            >
              Inputs
            </div>
            <p className="text-base"></p>
          </div>
        </NodeTrackLayout>
        {outstream.map((s, index) => (
          <Handle
            type="source"
            position={Position.Right}
            id={"return_" + index}
            style={{ background: "#555" }}
            data-tip={s && s.map((s) => s?.key).join(" | ")}
            data-for={"tooltip" + id}
          />
        ))}
      </>
    );
  }
);
