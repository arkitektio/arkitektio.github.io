// @ts-nocheck
import React from "react";
import { FaFileArchive, FaJava } from "react-icons/fa";

const RELEASES =
  "https://github.com/arkitektio/imagej-arkitekt-plugin/releases/latest";

export const FijiGrid = ({ children }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mb-3 ">
      <a
        href={RELEASES}
        target="_blank"
        className="bg-primary-300 rounded-sm px-3 py-2 rounded-lg text-white cursor-pointer hover:bg-primary-500 hover:text-white flex flex-col items-center my-auto"
      >
        <div className="my-auto mr-2">
          <FaJava size={"3em"} />
        </div>{" "}
        <div className="my-auto">Jar (all platforms)</div>
      </a>
      <a
        href={RELEASES}
        target="_blank"
        className="bg-primary-300 rounded-sm px-3 py-2 rounded-lg text-white cursor-pointer hover:bg-primary-500 hover:text-white flex flex-col items-center my-auto"
      >
        <div className="my-auto mr-2">
          <FaFileArchive size={"3em"} />
        </div>{" "}
        <div className="my-auto">Zip (all platforms)</div>
      </a>
    </div>
  );
};
