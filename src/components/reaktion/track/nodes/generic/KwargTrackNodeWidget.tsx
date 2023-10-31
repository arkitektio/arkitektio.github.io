import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";
import { NodeTrackLayout } from "../layout/NodeTrack";
import { withLayout } from "../../../base/node/layout";
import { KwargNodeProps } from "../../../types";

export const KwargTrackNodeWidget: React.FC<KwargNodeProps> = withLayout(
  ({ data: { constream }, id }) => {
    const [show, setShow] = useState(false);

    const [isSmall, setIsSmall] = useState(true);

    return (
      <>
        <NodeTrackLayout color="green" id={id}>
          {!isSmall && (
            <>
              <div className="flex">
                {constream?.map((s, index) => (
                  <>
                    <div
                      key={index}
                      className="flex-1 border m-1 py-0 px-1 rounded border-gray-200"
                      data-tip={s && s.map((v) => v?.kind).join("|")}
                      data-for={"tooltip_special" + id}
                    >
                      <div className="flex justify-between">
                        <button
                          type="button"
                          onClick={() => alert("implement")}
                        >
                          <BsTrash />
                        </button>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </>
          )}

          <div className="px-2 py-2">
            <div
              className="font-light text-xl w-full text-center custom-drag-handle cursor-pointer"
              onDoubleClick={() => setIsSmall(!isSmall)}
            >
              Constants{" "}
            </div>
            <p className="text-gray-700 text-base"></p>
          </div>
        </NodeTrackLayout>
      </>
    );
  },
);
