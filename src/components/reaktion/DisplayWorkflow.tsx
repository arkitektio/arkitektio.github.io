import React, { useEffect, useState } from "react";
import { ExportRunFragment, FlowFragment } from "./api";
import { ShowRiver } from "./show/ShowRiver";
import { ShowGuard } from "../ShowGuard";


const ImportButton = (props: { flow: FlowFragment }) => {

  





export const DisplayWorkflow = (props: { flow: FlowFragment }) => {

  return (
    <>
        <div className="flex w-full h-[400px] flex-col border border-1 rounded border-gray-300 overflow-hidden relative">
          <ShowRiver flow={props.flow} />
        </div>
        <ShowGuard className="flex w-full p-3 border-1 border border-gray-300" hideLabel="Connect to use this workflow">
        <button onClick={() => alert("implement")} className="bg-primary-300 hover:bg-primary-400 rounded rounded-md ">Import into Arkitekt</button>
        </ShowGuard>
    </>
  );
};
