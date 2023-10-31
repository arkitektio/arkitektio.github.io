import React, { useEffect } from "react";
import { Handle, Position, useUpdateNodeInternals } from "reactflow";
import { ReactiveNodeProps } from "../../types";
import { ReactiveImplementationModelInput } from "../../api";

const bigWidth = 300;

const squareClassName =
  "px-2 py-2 z-50 font-light rounded-md  text-green-500 border  border-green-500 shadow-green-500/50 border-green-200 shadow-green-200/10 text-xs ";

export const ReactiveShowNodeWidget: React.FC<ReactiveNodeProps> = ({
  data: { outstream, instream, constream, implementation, defaults },
  id,
}) => {
  const updateNodeInternals = useUpdateNodeInternals();

  useEffect(() => {
    console.log("Update node internals", id, implementation);
    updateNodeInternals(id);
  }, [outstream, instream, constream]);

  return (
    <>
      {/* <AssignEventOverlay event={data.latestAssignEvent} />
				<ProvideEventOverlay event={data.latestProvideEvent} /> */}
      <div className="custom-drag-handle text-xs ">
        {implementation &&
          [
            ReactiveImplementationModelInput.Combinelatest,
            ReactiveImplementationModelInput.Withlatest,
            ReactiveImplementationModelInput.Zip,
            ReactiveImplementationModelInput.BufferUntil,
          ].includes(implementation) && (
            <svg height="40" width="40">
              <polygon
                points="0,40 40,20 0,0"
                style={{
                  strokeWidth: 1,
                  stroke: "white",
                  fill: "var(--color-primary-300)",
                }}
              />
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
                  fill: "green",
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
                  fill: "var(--color-primary-300)",
                }}
              />
            </svg>
          )}

        {implementation &&
          [
            ReactiveImplementationModelInput.Chunk,
            ReactiveImplementationModelInput.All,
            ReactiveImplementationModelInput.BufferComplete,
            ReactiveImplementationModelInput.Divide,
            ReactiveImplementationModelInput.Filter,
            ReactiveImplementationModelInput.Multiply,
            ReactiveImplementationModelInput.Modulo,
            ReactiveImplementationModelInput.Power,
            ReactiveImplementationModelInput.Subtract,
            ReactiveImplementationModelInput.Add,
            ReactiveImplementationModelInput.Prefix,
            ReactiveImplementationModelInput.Suffix,
          ].includes(implementation) && (
            <div className={squareClassName}>
              {implementation}{" "}
              {defaults?.number && (
                <b className="font-bold">{defaults.number}</b>
              )}
            </div>
          )}

        {implementation &&
          [ReactiveImplementationModelInput.Ensure].includes(
            implementation,
          ) && (
            <div className={squareClassName}>
              <h1>!</h1>
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
                  fill: "var(--color-primary-300)",
                }}
              />
              <text>{implementation}</text>
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
                  fill: "var(--color-primary-300)",
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
                    fill: "rgb(var(--color-primary-100))",
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
                  fill: "rgb(var(--color-primary-300))",
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
                    fill: "rgb(var(--color-primary-100))",
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
                  stroke: "white",
                  fill: "rgb(var(--color-primary-300))",
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
