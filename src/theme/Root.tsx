import React from "react";
import { App } from "../lib/app/App";
import { Toaster } from "@site/src/components/ui/sonner";
// Default implementation, that you can customize
export default function Root({ children }) {
  return (
    <App.Provider>
      {children}
      <Toaster />
    </App.Provider>
  );
}
