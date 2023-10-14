import React from "react";
import ReactFlow, {
  EdgeTypes,
  ReactFlowProps,
  ReactFlowProvider,
} from "reactflow";
import "reactflow/dist/style.css";
import { FlowEdge, FlowNode, NodeTypes } from "../types";
import "./styles.css";

type Props = {
  edgeTypes: EdgeTypes;
  nodeTypes: NodeTypes;
  nodes: FlowNode[];
  edges: FlowEdge[];
  children?: React.ReactNode;
} & ReactFlowProps;

const onInit = (reactFlowInstance: any) =>
  console.log("flow loaded:", reactFlowInstance);

export const Graph: React.FC<Props> = ({
  edgeTypes,
  nodeTypes,
  nodes,
  edges,
  children,
  ...props
}) => {
  return (
    <ReactFlowProvider>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onInit={onInit}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
        attributionPosition="top-right"
        {...props}
      >
        {children}
      </ReactFlow>
    </ReactFlowProvider>
  );
};
