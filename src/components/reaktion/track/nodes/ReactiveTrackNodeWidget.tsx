import React, { useEffect } from "react";
import { Handle, Position, useUpdateNodeInternals } from "reactflow";
import { useTrackRiver } from "../context";
import { ReactiveNodeProps } from "../../types";
import { ReactiveImplementationModelInput } from "../../api";

const bigWidth = 300;

export const additionalForState: { [x: string]: string } = {
  ERROR: "rgb(255,0,0)",
  NEXT: "rgb(0,0,255)",
  COMPLETE: "rgb(0,255,0)",
};

export const ReactiveTrackNodeWidget: React.FC<ReactiveNodeProps> = ({
  data: { outstream, instream, constream, implementation },
  id,
}) => {
  const updateNodeInternals = useUpdateNodeInternals();

  const { runState } = useTrackRiver();

  const latestEvent = runState?.events?.find((e) => e?.source === id);
  const color = latestEvent
    ? additionalForState[latestEvent.type]
    : "var(--color-primary-300)";

  useEffect(() => {
    console.log("Update node internals", id, implementation);
    updateNodeInternals(id);
  }, [outstream, instream, constream]);

  return (
    <>
      {/* <AssignEventOverlay event={data.latestAssignEvent} />
				<ProvideEventOverlay event={data.latestProvideEvent} /> */}
      <div className="custom-drag-handle">
        {implementation &&
          [
            ReactiveImplementationModelInput.Combinelatest,
            ReactiveImplementationModelInput.Withlatest,
            ReactiveImplementationModelInput.Zip,
          ].includes(implementation) && (
            <svg height="40" width="40">
              <polygon
                points="0,40 40,20 0,0"
                style={{
                  strokeWidth: 1,
                  stroke: "white",
                  fill: color,
                }}
              />
            </svg>
          )}
        {implementation &&
          [ReactiveImplementationModelInput.Split].includes(implementation) && (
            <svg height="40" width="40">
              <polygon
                points="0,20 40,40 40,0"
                style={{
                  strokeWidth: 1,
                  stroke: "white",
                  fill: color,
                }}
              />
            </svg>
          )}
        {implementation &&
          [
            ReactiveImplementationModelInput.Chunk,
            ReactiveImplementationModelInput.BufferComplete,
          ].includes(implementation) && (
            <div className="px-2 py-2  rounded-md bg-gray-800 text-green-200  border-green-500 shadow-green-500/50 border-green-200 shadow-green-200/10">
              <h1>{implementation}</h1>
            </div>
          )}
        {implementation &&
          [ReactiveImplementationModelInput.Ensure].includes(
            implementation,
          ) && (
            <div className="px-2 py-2 z-50 shadow-xl bg-white rounded-md dark:bg-gray-800 text-green-500 dark:text-green-200 text-black border w-full h-full border-green-500 shadow-green-500/50 dark:border-green-200 dark:shadow-green-200/10">
              <h1>!</h1>
            </div>
          )}
        {implementation &&
          [
            ReactiveImplementationModelInput.Divide,
            ReactiveImplementationModelInput.Multiply,
            ReactiveImplementationModelInput.Modulo,
            ReactiveImplementationModelInput.Power,
            ReactiveImplementationModelInput.Subtract,
            ReactiveImplementationModelInput.Add,
            ReactiveImplementationModelInput.Prefix,
            ReactiveImplementationModelInput.Suffix,
          ].includes(implementation) && (
            <div className="px-2 py-2 z-50 shadow-xl bg-white rounded-md dark:bg-gray-800 text-green-500 dark:text-green-200 text-black border w-full h-full border-green-500 shadow-green-500/50 dark:border-green-200 dark:shadow-green-200/10">
              <h1>{implementation}</h1>
            </div>
          )}
        {implementation &&
          [ReactiveImplementationModelInput.ToList].includes(
            implementation,
          ) && (
            <svg height="40" width="40">
              <polygon
                points="0,0 40,0 40,40 0,40"
                style={{
                  strokeWidth: 1,
                  stroke: "white",
                  fill: color,
                }}
              />
              <text>{implementation}</text>
            </svg>
          )}
        {implementation &&
          [ReactiveImplementationModelInput.Gate].includes(implementation) && (
            <svg height="40" width="40">
              <polygon
                points="0,40 40,20 0,0"
                style={{
                  strokeWidth: 1,
                  stroke: "white",
                  fill: color,
                }}
              />
            </svg>
          )}
        {implementation &&
          [ReactiveImplementationModelInput.Omit].includes(implementation) && (
            <svg height="40" width="40">
              <text>
                <textPath
                  style={{
                    fill: "var(--color-primary-50)",
                    fontSize: "13px",
                  }}
                >
                  {implementation}
                </textPath>
              </text>
              <polygon
                points="0,0 40,0 40,40 0,40"
                style={{
                  strokeWidth: 1,
                  stroke: "white",
                  fill: color,
                }}
              />
            </svg>
          )}
        {implementation &&
          [ReactiveImplementationModelInput.If].includes(implementation) && (
            <svg height="40" width="40">
              <text>
                <textPath
                  style={{
                    fill: color,
                    fontSize: "13px",
                  }}
                >
                  If
                </textPath>
              </text>
              <polygon
                points="0,0 40,0 40,40 0,40"
                style={{
                  strokeWidth: 1,
                  stroke: "white",
                  fill: color,
                }}
              />
            </svg>
          )}
        {implementation &&
          [ReactiveImplementationModelInput.And].includes(implementation) && (
            <svg height="40" width="40">
              <text>
                <textPath
                  style={{
                    fill: color,
                    fontSize: "13px",
                  }}
                >
                  And
                </textPath>
              </text>
              <polygon
                points="0,0 40,0 40,40 0,40"
                style={{
                  strokeWidth: 1,
                  stroke: color,
                  fill: color,
                }}
              />
            </svg>
          )}
        {constream?.map((s, index, array) => (
          <Handle
            type="target"
            position={Position.Bottom}
            id={`kwarg_${index}`}
            key={index}
            style={{
              background: "#555",
              marginTop: 10,
              height: "1em",
            }}
          ></Handle>
        ))}
        {instream?.map((s, index, array) => (
          <Handle
            key={index}
            type="target"
            position={Position.Left}
            id={`arg_${index}`}
            style={{
              top: `${(100 / array.length) * index + 45 / array.length}%`,
              background: "#555",
              height: "1em",
            }}
          />
        ))}
        {outstream?.map((s, index, array) => (
          <Handle
            key={index}
            type="source"
            position={Position.Right}
            id={`return_${index}`}
            style={{
              top: `${(100 / array.length) * index + 46 / array.length}%`,
              background: "#555",
            }}
          />
        ))}
      </div>
    </>
  );
};
