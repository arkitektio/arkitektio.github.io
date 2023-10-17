import React, { useContext } from "react";
import { FlowFragment, GlobalFragment } from "../../fluss/api/graphql";
import { ReserveState } from "../types";

export type ShowRiverContextType = {
  flow?: FlowFragment | null;
};

export const ShowRiverContext = React.createContext<ShowRiverContextType>({});

export const useShowRiver = () => useContext(ShowRiverContext);
