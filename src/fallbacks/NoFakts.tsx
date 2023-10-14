import BrowserOnly from "@docusaurus/BrowserOnly";
import { Fakts, useFakts } from "@jhnnsrs/fakts";
import React, { useState } from "react";

export interface PublicHomeProps {}

export interface ConfigValues {
  host: string;
}

export const NoFakts: React.FC<PublicHomeProps> = (props) => {
  const { fakts, load } = useFakts();
  const [future, setFuture] = useState<Promise<Fakts> | null>(null);
  const [edit, setEdit] = useState<boolean>(false);
  const ref = React.useRef<HTMLInputElement>(null);

  console.log(fakts);

  return (
    <div className="flex flex-col">
      <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
        {edit ? (
          <BrowserOnly>
            {() => (
              <div className="flex flex-row">
                <div className="text-left overflow-hidden ">
                  <input
                    type="input"
                    name="host"
                    placeholder="your host"
                    ref={ref}
                  />
                </div>
                <div className="ml-2">
                  {future ? (
                    <button className="w-full shadow-lg shadow-red-700/90 flex items-center justify-center px-2 py-1 border border-transparent text-base font-medium rounded-md text-white bg-red-300 hover:bg-red-400 md:py-1 md:text-lg md:px-10">
                      {" "}
                      Cancel{" "}
                    </button>
                  ) : (
                    <button
                      onClick={() =>
                        load({
                          endpoint: ref.current.value,
                          manifest: {
                            version: "latest",
                            identifier: "github.io.jhnnsrs.doks",
                          },
                        })
                      }
                      type="submit"
                      className=" shadow-lg shadow-primary-700/90 flex items-center  border border-transparent text-base font-medium rounded-md text-white bg-primary-300 hover:bg-primary-500"
                    >
                      {" "}
                      Use
                    </button>
                  )}
                </div>
              </div>
            )}
          </BrowserOnly>
        ) : (
          <button
            onClick={() => setEdit(true)}
            className="shadow-lg shadow-primary-700/90 flex items-center  border border-transparent text-base font-medium rounded-md text-white bg-primary-300 hover:bg-primary-500"
          >
            c
          </button>
        )}
      </div>
    </div>
  );
};
