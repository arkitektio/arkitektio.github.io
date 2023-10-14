import React, { useEffect, useState } from "react";
import { EdgeTypes, useEdgesState, useNodesState } from "reactflow";
import { ExportRunFragment } from "../api";
import { RiverTrackContext } from "./context";
import { LabeledTrackEdge } from "./edges/LabeledTrackEdge";
import { ArkitektTrackNodeWidget } from "./nodes/ArkitektTrackNodeWidget";
import { LocalTrackNodeWidget } from "./nodes/LocalTrackNodeWidget";
import { ReactiveTrackNodeWidget } from "./nodes/ReactiveTrackNodeWidget";
import { ArgTrackNodeWidget } from "./nodes/generic/ArgTrackNodeWidget";
import { KwargTrackNodeWidget } from "./nodes/generic/KwargTrackNodeWidget";
import { ReturnTrackNodeWidget } from "./nodes/generic/ReturnTrackNodeWidget";
import { FlowNode, NodeTypes, RunState } from "../types";
import { GraphTrackNodeWidget } from "./nodes/GraphTrackNodeWidget";
import { edges_to_flowedges, nodes_to_flownodes } from "../utils";
import { Graph } from "../base/Graph";
import { ExportTracker } from "./ExportTracker";
import "./styles.css";

const nodeTypes: NodeTypes = {
  ArkitektNode: ArkitektTrackNodeWidget,
  ReactiveNode: ReactiveTrackNodeWidget,
  ArgNode: ArgTrackNodeWidget,
  ReturnNode: ReturnTrackNodeWidget,
  KwargNode: KwargTrackNodeWidget,
  LocalNode: LocalTrackNodeWidget,
  GraphNode: GraphTrackNodeWidget,
};

const edgeTypes: EdgeTypes = {
  LabeledEdge: LabeledTrackEdge,
  FancyEdge: LabeledTrackEdge,
};

export type Props = {
  run: ExportRunFragment;
};

export const TrackRiver: React.FC<Props> = ({ run }) => {
  const [state, setState] = useState<RunState>({ t: 0 });
  const [live, setLive] = useState<boolean>(false);
  console.log(run);

  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    setNodes(nodes_to_flownodes(run?.flow?.graph?.nodes || []));
    setEdges(edges_to_flowedges(run?.flow?.graph?.edges || []));
  }, [run?.flow?.graph]);

  const [selectedNode, setSelectedNode] = useState<FlowNode | null>(null);

  return (
    <RiverTrackContext.Provider
      value={{
        flow: run?.flow,
        runState: state,
        selectedNode,
        setRunState: setState,
        run: run,
      }}
    >
      <div className="relative flex flex-grow flex-col">
        <div className="absolute p-2 top-0 left-0">{run.flow.name}</div>
        <div className="flex-grow p-2">
          <Graph
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            elementsSelectable={true}
            nodeTypes={nodeTypes}
            edgeTypes={edgeTypes}
            onNodeClick={(e, n) => setSelectedNode(n)}
            onPaneClick={(e) => setSelectedNode(null)}
            fitView
            attributionPosition="top-right"
          />
        </div>
        <div className="flex-initial py-1 px-3 bg-slate-800">
          <ExportTracker run={run} />
        </div>
      </div>
    </RiverTrackContext.Provider>
  );
};
