import { Form, Formik } from "formik";
import React, { memo, useState } from "react";
import { Handle, Position } from "reactflow";
import { withLayout } from "../../../base/node/layout";
import { ArgNodeProps } from "../../../types";
import { NodeShowLayout } from "../layout/NodeTrack";

export const ArgTrackNodeWidget: React.FC<ArgNodeProps> = withLayout(
  ({ data: { outstream, instream }, id }) => {
    const [show, setShow] = useState(false);
    const [isSmall, setIsSmall] = useState(true);

    return (
      <>
        <NodeShowLayout color="blue" id={id}>
          <div className="px-2 py-2">
            <div
              className="font-light text-xl custom-drag-handle cursor-pointer"
              onDoubleClick={() => setIsSmall(!isSmall)}
            >
              Inputs{" "}
            </div>
          </div>
        </NodeShowLayout>
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
