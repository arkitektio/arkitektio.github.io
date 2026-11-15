// @ts-nocheck
import React from "react";
import { FaFileArchive, FaJava } from "react-icons/fa";

const RELEASES =
  "https://github.com/arkitektio/imagej-arkitekt-plugin/releases/latest";

// The jar is released without its version in the name, so this one link always
// downloads the latest release.
const JAR = `${RELEASES}/download/arkitekt-plugin.jar`;

export const FijiGrid = ({ children }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mb-3 ">
      <a
        href={JAR}
        className="bg-primary-300 rounded-sm px-3 py-2 rounded-lg text-white cursor-pointer hover:bg-primary-500 hover:text-white flex flex-col items-center my-auto"
      >
        <div className="my-auto mr-2">
          <FaJava size={"3em"} />
        </div>{" "}
        <div className="my-auto">Download the jar (all platforms)</div>
      </a>
      <a
        href={RELEASES}
        target="_blank"
        className="bg-primary-300 rounded-sm px-3 py-2 rounded-lg text-white cursor-pointer hover:bg-primary-500 hover:text-white flex flex-col items-center my-auto"
      >
        <div className="my-auto mr-2">
          <FaFileArchive size={"3em"} />
        </div>{" "}
        <div className="my-auto">All releases (zip, checksums)</div>
      </a>
    </div>
  );
};
