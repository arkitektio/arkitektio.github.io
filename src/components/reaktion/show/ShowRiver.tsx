import React from "react";
import { EdgeTypes, useEdgesState, useNodesState } from "reactflow";
import { Graph } from "../base/Graph";
import { edges_to_flowedges, nodes_to_flownodes } from "../utils";
import { ShowRiverContext } from "./context";
import { LabeledShowEdge } from "./edges/LabeledShowEdge";
import { ArkitektShowNodewidget } from "./nodes/ArkitektShowNodeWidget";
import { ArgTrackNodeWidget } from "./nodes/generic/ArgTrackNodeWidget";
import { KwargTrackNodeWidget } from "./nodes/generic/KwargTrackNodeWidget";
import { ReturnTrackNodeWidget } from "./nodes/generic/ReturnTrackNodeWidget";
import { ReactiveShowNodeWidget } from "./nodes/ReactiveShowNodeWidget";
import { GraphNodeWidget } from "./nodes/GraphNodeWidget";
import { FlowFragment } from "../api";
import { NodeTypes } from "../types";

const nodeTypes: NodeTypes = {
  ArkitektNode: ArkitektShowNodewidget,
  ArkitektFilterNode: ArkitektShowNodewidget,
  LocalNode: ArkitektShowNodewidget,
  ReactiveNode: ReactiveShowNodeWidget,
  ArgNode: ArgTrackNodeWidget,
  ReturnNode: ReturnTrackNodeWidget,
  KwargNode: KwargTrackNodeWidget,
  GraphNode: GraphNodeWidget,
};

const edgeTypes: EdgeTypes = {
  LabeledEdge: LabeledShowEdge,
  FancyEdge: LabeledShowEdge,
};

export type Props = {
  flow: FlowFragment;
};

export const ShowRiver: React.FC<Props> = ({ flow }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(
    nodes_to_flownodes(flow.graph?.nodes)
  );
  const [edges, setEdges, onEdgesChange] = useEdgesState(
    edges_to_flowedges(flow.graph?.edges)
  );

  return (
    <ShowRiverContext.Provider
      value={{
        flow,
      }}
    >
      <Graph
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        elementsSelectable={true}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
        attributionPosition="bottom-right"
      />
    </ShowRiverContext.Provider>
  );
};
