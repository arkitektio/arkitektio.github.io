import React, { useContext } from "react";
import { FlowFragment } from "../api";

export type ShowRiverContextType = {
  flow?: FlowFragment | null;
};

export const ShowRiverContext = React.createContext<ShowRiverContextType>({});

export const useShowRiver = () => useContext(ShowRiverContext);
