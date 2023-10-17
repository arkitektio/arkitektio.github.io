import React from "react";
import { Handle, Position } from "reactflow";
import { useNodeLayout, withLayout } from "../../base/node/layout";
import { ArkitektNodeData, ArkitektNodeProps } from "../../types";
import { NodeShowLayout } from "./layout/NodeTrack";
import { RekuestGuard, useRekuestQuery} from "@jhnnsrs/rekuest"
import gql from "graphql-tag";


const UninstalledNode = () => {
  return <div className="h-2 w-2 rounded rounded-full bg-yellow-200 my-auto"/>
}

const InstalledNode = () => {
  return <div className="h-2 w-2 rounded rounded-full bg-green-200 my-auto"/>
}

const ShowNodeDetails = (props: { data: ArkitektNodeData }) => {

  const { data, error, loading } = useRekuestQuery(gql`
    { node(hash: "${props.data.hash}") {
      name
    }
    }
    `
  );


  return error ? <div className="flex flex-row gap-2">
  <UninstalledNode/>
  <div className="text-yellow-500 my-auto"> {props.data?.name} </div>
  
  
  
  </div> : <div className="flex flex-row gap-2">
  <InstalledNode/>
  <div className="text-green-500 my-auto"> {data?.node?.name} </div>
  
  
  
  </div>








}












export const ArkitektShowNodewidget: React.FC<ArkitektNodeProps> = withLayout(
  ({ data, id }) => {
    const { isExpanded, toggleExpanded } = useNodeLayout();

    const border =
      data.kind === "GENERATOR"
        ? "1px solid #ff0033"
        : "1px solid #ff00ff";


    return (
      <NodeShowLayout
        id={id}
      >
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
          />
        ))}
        <div className="flex flex-row justify-between custom-drag-handle w-full">
        <RekuestGuard fallback={<> {data?.name}</>}>
            <ShowNodeDetails data={data} />
        </RekuestGuard>
        {isExpanded && (
          <>
            <div
              className={"px-2 py-2 flex-grow flex flex-col overflow-hidden"}
            ></div>
          </>
        )}
        </div>
      </NodeShowLayout>
    );
  }
);
