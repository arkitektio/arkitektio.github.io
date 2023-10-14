import React from "react";
import { useDatalayer } from "@jhnnsrs/datalayer";
import { TwoDKanvas } from "@jhnnsrs/unkover";

export type BioImage = {
  name?: string;
  store?: string;
  shape?: [number, number, number, number, number];
  src?: string;
  className?: string;
};

export const BioImage = ({ image }: { image: BioImage }) => {
  const { s3resolve } = useDatalayer();

  return (
    <div className="h-20 flex flex-row bg-black text-white border-gray-200 border border-1 rounded relative overflow-hidden shadow-lg shadow ">
      {image.store && image.shape && (
        <TwoDKanvas path={s3resolve(image.store)} shape={image.shape} />
      )}
      <div className="absolute w-full top-0 left-0 p-2 bg-gradient-to-b from-black to-transparent">
        {image.name}{" "}
      </div>
    </div>
  );
};
