import React from "react";

export type BioImage = {
  name?: string;
  store?: string;
  shape?: [number, number, number, number, number];
  src?: string;
  className?: string;
};

export const BioImage = ({ image }: { image: BioImage }) => {
  return <>Not implemented currently</>;
};
