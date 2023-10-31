import React from "react";
import { Handle, Position } from "reactflow";
import { useNodeLayout, withLayout } from "../../base/node/layout";
import { ArkitektNodeData, ArkitektNodeProps } from "../../types";
import { NodeShowLayout } from "./layout/NodeTrack";
import { RekuestGuard, useRekuestQuery } from "@jhnnsrs/rekuest";
import gql from "graphql-tag";
import { Popover, PopoverContent, PopoverTrigger } from "../../../ui/popover";
import { useShowRiver } from "../context";
import { globalArgKey } from "../../utils";
import { FlowFragment, GlobalFragment } from "../../api";

const UninstalledNode = () => {
  return <div className="h-2 w-2 rounded rounded-full bg-yellow-200 my-auto" />;
};

const InstalledNode = () => {
  return <div className="h-2 w-2 rounded rounded-full bg-green-200 my-auto" />;
};

const getGlobalArg = (flow: FlowFragment, id: string, key: string) => {
  return flow.graph.globals.find((g) =>
    g.toKeys.includes(globalArgKey(id, key)),
  );
};



const InstalledInfo = (props: {hash: string, name: string}) => {


  const { data, error, loading } = useRekuestQuery(gql`
    { node(hash: "${props.hash}") {
      name
    }
    }
    `);

  return <>{error ? (
    <div className="flex flex-row gap-2">
      <UninstalledNode />
      <div className="text-yellow-500 my-auto"> {props.name} </div>
    </div>
  ) : (
    <div className="flex flex-row gap-2">
      <InstalledNode />
      <div className="text-green-500 my-auto"> {data?.node?.name} </div>
    </div>
  )}

    </>


}

const ShowNodeDetails = (props: ArkitektNodeProps) => {
  const { flow } = useShowRiver();

  

  const overwrittenDefaults =
    (props.data.defaults &&
      Object.keys(props.data.defaults).filter(
        (key) => (props.data.defaults[key] && props.data.defaults[key] != null && props.data.defaults[key] != false) || getGlobalArg(flow, props.id, key),
      )) ||
    [];

  return (
    <Popover>
      <PopoverTrigger className="appearance-none rounded  bg-gray-800 rounded-md cursor-pointer w-full ">
        <RekuestGuard fallback={<> {props.data?.name}</>}>
          <InstalledInfo hash={props.data.hash} name={props.data.name} />
          </RekuestGuard>
      </PopoverTrigger>
      <PopoverContent className="text-xs bg-back-800 my-auto  ">
        {" "}
        {props.data?.description}
        {overwrittenDefaults && overwrittenDefaults.length > 0 && (
          <div className="flex flex-col mt-2 text-white px-3 border border-1 rounded rounded-md py-3">
            <div className="font-semibold text-md mb-2">Constants </div>
            <div className="flex flex-row gap-2 text-white">
              <div className="flex grid grid-cols-2 gap-2">
                {overwrittenDefaults.map((key) => {
                  const global = getGlobalArg(flow, props.id, key);

                  return (
                    <>
                      <div className=" my-auto"> {key} </div>
                      {global ? (
                        <div className="text-primary-300"> <div className="font-bold inline">Global </div>{global.port.key} </div>
                      ) : (
                        <div className="my-auto">
                          {" "}
                          {props.data.defaults[key]}{" "}
                        </div>
                      )}
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
};

export const ArkitektShowNodewidget: React.FC<ArkitektNodeProps> = withLayout(
  (props) => {
    const { isExpanded, toggleExpanded } = useNodeLayout();

    return (
      <NodeShowLayout id={props.id}>
        {props.data.instream.map((s, index) => (
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
          ></Handle>
        ))}
        {props.data.outstream.map((s, index) => (
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
          />
        ))}
        <div className="flex flex-row justify-between custom-drag-handle w-full h-full overflow-hidden ">
            <ShowNodeDetails {...props} />
        </div>
      </NodeShowLayout>
    );
  },
);
