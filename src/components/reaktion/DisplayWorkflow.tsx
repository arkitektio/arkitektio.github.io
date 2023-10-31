import React, { useEffect, useState } from "react";
import { ExportRunFragment, FlowFragment } from "./api";
import { ShowRiver } from "./show/ShowRiver";
import { ShowGuard } from "../ShowGuard";
import { FlussGuard, useFluss } from "@jhnnsrs/fluss";
import { gql, useMutation } from "@apollo/client";
import {
  edges_to_flowedges,
  flowedges_to_edges,
  flownodes_to_nodes,
  noTypename,
  nodes_to_flownodes,
  notEmpty,
} from "./utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

const ImportFlowMutation = gql`
  mutation ImportFlow($name: String, $graph: GraphInput!) {
    importflow(name: $name, graph: $graph) {
      id
      name
    }
  }
`;

const ImportButton = ({
  flow,
  blockImport,
}: {
  flow: FlowFragment;
  blockImport?: boolean;
}) => {
  const { client } = useFluss();
  const [mutate, data] = useMutation(ImportFlowMutation, { client: client });

  const [showDialog, setShowDialog] = useState(false);

  const importFlow = async () => {
    try {
      const flownodes = flownodes_to_nodes(
        nodes_to_flownodes(flow.graph.nodes),
      );
      const flowedges = flowedges_to_edges(
        edges_to_flowedges(flow.graph.edges),
      );
      let graphInput = {
        nodes: flownodes.filter(notEmpty).map(noTypename),
        edges: flowedges.filter(notEmpty).map(noTypename),
        globals: flow.graph.globals.filter(notEmpty).map(noTypename),
        args: flow.graph.args.filter(notEmpty).map(noTypename),
        returns: flow.graph.returns.filter(notEmpty).map(noTypename),
      };

      let x = await mutate({
        variables: { name: flow.name, graph: graphInput },
      });
      setShowDialog(true);
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <>
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Succesfully imported workflow</DialogTitle>
            <DialogDescription>
              We have imported the workflow into Arkitekt. You can now use it in
              your flows.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <button
        onClick={() => importFlow()}
        disabled={blockImport}
        className="bg-primary-300 hover:bg-primary-400 py-2 px-3 rounded rounded-md disabled:bg-back-800 cursor-pointer"
      >
        Re-Import into Arkitekt
      </button>
    </>
  );
};

export const DisplayWorkflow = (props: {
  flow: FlowFragment;
  blockImport?: boolean;
}) => {
  return (
    <div className="border border-1 rounded border-gray-800">
      <div className="flex w-full h-[400px] flex-col  overflow-hidden relative">
        <ShowRiver flow={props.flow} />
      </div>
      <ShowGuard
        className="flex w-full p-3 border-t-2 border-gray-800"
        hideLabel="Connect to use this workflow"
      >
        <FlussGuard>
          <ImportButton flow={props.flow} blockImport={props.blockImport} />
        </FlussGuard>
      </ShowGuard>
    </div>
  );
};
