import React, { useContext } from "react";
import { FlowFragment, RunFragment } from "../api";
import { FlowNode, RunState } from "../types";
import { ExportRunFragment } from "../api";

export type RiverTrackContextType = {
  flow?: FlowFragment | null;
  run?: ExportRunFragment | null;
  runState?: RunState | null;
  selectedNode?: FlowNode | null;
  setRunState: React.Dispatch<React.SetStateAction<RunState>>;
};

export const RiverTrackContext = React.createContext<RiverTrackContextType>({
  setRunState: () => {
    console.error("WE ARE LACKING AN ENGINE");
  },
});

export const useTrackRiver = () => useContext(RiverTrackContext);
