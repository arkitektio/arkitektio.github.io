import React from "react";
import { BsWindows } from "react-icons/bs";
import { FaApple, FaLinux } from "react-icons/fa";
export const DownloadButton = ({ children }) => {
  return (
    <a
      href={"https://github.com/jhnnsrs/konstruktor/releases"}
      target="_blank"
      className="bg-primary-300 rounded px-3 py-1 rounded-lg text-white cursor-pointer hover:bg-primary-500 hover:text-white "
    >
      {children}
    </a>
  );
};

export const DownloadGrid = ({ children }) => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-3 gap-4 mb-3 ">
      <a
        href={
          "https://github.com/jhnnsrs/konstruktor/releases/latest/download/konstruktor_0.0.1_amd64.deb"
        }
        target="_blank"
        className="p-2 bg-primary-300 rounded px-3 py-2 rounded-lg text-white cursor-pointer hover:bg-primary-500 hover:text-white my-auto flex flex-col items-center my-auto "
      >
        <div className="my-auto mr-2">
          <FaLinux size={"3em"} />
        </div>{" "}
        <div className="my-auto">Linux</div>
      </a>
      <a
        href={
          "https://github.com/jhnnsrs/konstruktor/releases/latest/download/konstruktor_0.0.1_x64_en-US.msi"
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
        href={
          "https://github.com/jhnnsrs/konstruktor/releases/latest/download/konstruktor_0.0.1_x64.dmg"
        }
        target="_blank"
        className="bg-primary-300 rounded px-3 py-2 rounded-lg text-white cursor-pointer hover:bg-primary-500 hover:text-white my-auto flex flex-col items-center my-auto"
      >
        <div className="my-auto mr-2">
          <FaApple size={"3em"} />
        </div>{" "}
        <div className="my-auto">Mac</div>
      </a>
    </div>
  );
};


export const OrkestratorGrid = ({ children }) => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-3 gap-4 mb-3 ">
      <a
        href={
          "https://github.com/jhnnsrs/orkestrator/releases/download/orkestrator-v0.0.6/orkestrator_0.0.6_amd64.deb"
        }
        target="_blank"
        className="p-2 bg-primary-300 rounded px-3 py-2 rounded-lg text-white cursor-pointer hover:bg-primary-500 hover:text-white my-auto flex flex-col items-center my-auto "
      >
        <div className="my-auto mr-2">
          <FaLinux size={"3em"} />
        </div>{" "}
        <div className="my-auto">Linux</div>
      </a>
      <a
        href={
          "https://github.com/jhnnsrs/orkestrator/releases/download/orkestrator-v0.0.6/orkestrator_0.0.6_x64_en-US.msi"
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
        href={
          "https://github.com/jhnnsrs/orkestrator/releases/download/orkestrator-v0.0.6/orkestrator_0.0.6_x64.dmg"
        }
        target="_blank"
        className="bg-primary-300 rounded px-3 py-2 rounded-lg text-white cursor-pointer hover:bg-primary-500 hover:text-white my-auto flex flex-col items-center my-auto"
      >
        <div className="my-auto mr-2">
          <FaApple size={"3em"} />
        </div>{" "}
        <div className="my-auto">Mac</div>
      </a>
    </div>
  );
};
