import React from "react";
import { BsWindows } from "react-icons/bs";
import { FaApple, FaLinux } from "react-icons/fa";

export const FijiGrid = ({ children }) => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-3 gap-4 mb-3 ">
      <a
        target="_blank"
        className="p-2 bg-gray-500 rounded px-3 py-2 rounded-lg text-white cursor-not-allowed hover:bg-gray-500 hover:text-white my-auto flex flex-col items-center my-auto "
      >
        <div className="my-auto mr-2">
          <FaLinux size={"3em"} />
        </div>{" "}
        <div className="my-auto">Linux</div>
      </a>
      <a
        href={
          "https://github.com/arkitektio-apps/mikroj/releases/latest/download/MikroJApp.zip"
        }
        target="_blank"
        className="bg-primary-300 rounded px-3 py-2 rounded-lg text-white cursor-pointer hover:bg-primary-500 hover:text-white flex flex-col items-center my-auto"
      >
        <div className="my-auto mr-2">
          <BsWindows size={"3em"} />
        </div>{" "}
        <div className="my-auto">Windows</div>
      </a>
      <a
        target="_blank"
        className="bg-gray-500 rounded px-3 py-2 rounded-lg text-white cursor-not-allowed hover:bg-gray-500 hover:text-white my-auto flex flex-col items-center my-auto"
      >
        <div className="my-auto mr-2">
          <FaApple size={"3em"} />
        </div>{" "}
        <div className="my-auto">Mac</div>
      </a>
    </div>
  );
};
