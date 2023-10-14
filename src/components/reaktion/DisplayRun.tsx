import React, { useEffect, useState } from "react";
import { ExportRunFragment } from "./api";
import { TrackRiver } from "./track/TrackRiver";

export const DisplayRun = (props: { url: string }) => {
  const [loadedRun, setLoadedRun] = useState<ExportRunFragment | null>(null);

  useEffect(() => {
    fetch(props.url)
      .then((response) => response.json())
      .then((data) => {
        setLoadedRun(data.run);
      });
  }, [props.url]);

  return (
    <>
      {loadedRun && (
        <div className="flex w-full h-[400px] flex-col border border-1 rounded border-gray-300 opverflow-hidden">
          <TrackRiver run={loadedRun} />
        </div>
      )}
    </>
  );
};
