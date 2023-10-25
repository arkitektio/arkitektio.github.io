import React, { useEffect, useState } from "react";
import { ExportRunFragment, FlowFragment } from "./api";
import { ShowRiver } from "./show/ShowRiver";
import { ShowGuard } from "../ShowGuard";


const ImportButton = (props: { flow: FlowFragment }) => {

  return <></>

}





export const DisplayWorkflow = (props: { flow: FlowFragment, blockImport?: boolean }) => {

  return (
    <div className="border border-1 rounded border-gray-800">
        <div className="flex w-full h-[400px] flex-col  overflow-hidden relative">
          <ShowRiver flow={props.flow} />
        </div>
        <ShowGuard className="flex w-full p-3 border-t-2 border-gray-800" hideLabel="Connect to use this workflow">
        <button onClick={() => alert("implement")} disabled={props.blockImport} className="bg-primary-300 hover:bg-primary-400 py-2 px-3 rounded rounded-md disabled:bg-back-800">Import into Arkitekt</button>
        </ShowGuard>
    </div>
  );
};
