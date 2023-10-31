import React from "react";
import { useHerre } from "@jhnnsrs/herre";
import { useFakts } from "@jhnnsrs/fakts";

export const ShowGuard = (props: {
  children: React.ReactNode;
  className: string;
  hideLabel: string;
}) => {
  const { user } = useHerre();
  const { fakts } = useFakts();

  return (
    <div className={"relative " + props.className}>
      {props.children}
      {!user ||
        (!fakts && (
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80 overflow-hidden text-center align-center">
            {props.hideLabel}
          </div>
        ))}{" "}
    </div>
  );
};
