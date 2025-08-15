import React from "react";
import { App } from "../lib/app/App";

export const Guard = (props: { children: React.ReactNode }) => {
  return (
    <>
      <App.Guard>{props.children}</App.Guard>
    </>
  );
};
