import { createContext } from "react";
import { ArkitektContextType, EnhancedManifest } from "./types";

export const ArkitektContext = createContext<ArkitektContextType<any, any>>({
  manifest: undefined as unknown as EnhancedManifest,
  connect: async () => {
    throw new Error("No provider");
  },
  disconnect: async () => {
    throw new Error("No provider");
  },
  reconnect: async () => {
    throw new Error("No provider");
  },
  // Default values
  connection: undefined,
  connecting: false,
});
