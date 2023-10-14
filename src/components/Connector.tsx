import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Popover, Transition } from "@headlessui/react";
import {
  ConnectButtons,
  LoginButton,
  LogoutButton,
  UnconnectButton,
} from "@jhnnsrs/arkitekt";
import { Fakts, FaktsGuard, useFakts } from "@jhnnsrs/fakts";
import { HerreGuard, useHerre } from "@jhnnsrs/herre";
import { CancelablePromise } from "cancelable-promise";
import React, { Fragment, useRef, useState } from "react";
import { VscClose, VscDebugDisconnect } from "react-icons/vsc";

export const NoFaktsFallback = () => {
  const { fakts, load, setFakts } = useFakts();
  const { login } = useHerre();

  const d = useDocusaurusContext();
  const ref = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<Error | null>(null);

  console.log(fakts);

  return (
    <Popover as="div" className="my-auto ">
      <div>
        <Popover.Button className="inline-flex border-0 cursor-pointer bg-transparent w-full justify-center rounded-md text-white px-4 py-1 my-auto shadow-primary-300/20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <VscDebugDisconnect color="#ffffff" size={"2em"} />
        </Popover.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Popover.Panel
          static
          className="absolute right-0 mt-2 mr-2 w-56 origin-top-right divide-y divide-gray-100 border border-1 border-gray-400 rounded-md bg-white shadow-lg shadow ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div className="">
            <div className="flex flex-col w-full ">
              <div>
                {fakts && fakts.lok ? (
                  <>
                    <div className="px-2 py-2 flex flex-row gap-2 ">
                      <button
                        className={`"flex-grow text-center cursor-pointer shadow-primary-300/40 border-primary-600 shadow-md text-white bg-primary-500 group border-1 border-primary-300 border border-shadow-primary-300 flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        Connected to {fakts.self.name}
                      </button>
                      <button
                        onClick={() => setFakts(null)}
                        className={`"flex-initial text-center cursor-pointer shadow-primary-300/40 border-primary-600 shadow-md text-white bg-primary-500 group border-1 border-primary-300 border border-shadow-primary-300 flex items-center rounded-md  text-sm`}
                      >
                        <VscClose />
                      </button>
                    </div>
                    <div className="mt-2 font-light text-gray-900 text-center text-sm my-auto border-t-1 border-t border-gray-800 px-2 py-2 ">
                      <button
                        onClick={() => {
                          let redirectUri =
                            window.location.origin +
                            d.siteConfig.baseUrl +
                            "callback";
                          console.log(redirectUri);

                          login(
                            {
                              clientId: fakts.lok.client_id,
                              clientSecret: fakts.lok.client_secret,
                              scopes: fakts.lok.scopes,
                              redirectUri,
                            },
                            {
                              base_url: fakts.lok.base_url,
                              tokenUrl: fakts.lok.base_url + "/token/",
                              userInfoEndpoint:
                                fakts.lok.base_url + "/userinfo/",
                              authUrl: fakts.lok.base_url + "/authorize/",
                            }
                          );
                        }}
                        className="flex-grow text-center cursor-pointer shadow-primary-300/40 border-primary-600 shadow-md text-white bg-primary-500 group border-1 border-primary-300 border border-shadow-primary-300 flex w-full items-center rounded-md px-2 py-2 text-sm "
                      >
                        Login
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="px-2 py-2">
                      <button
                        className={`"cursor-pointer shadow-primary-300/40 border-primary-600 shadow-md text-white bg-primary-500 group border-1 border-primary-300 border border-shadow-primary-300 flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        onClick={() => {
                          load({
                            endpoint: "https://lok-sibarita.iins.u-bordeaux.fr",
                            manifest: {
                              version: "laest",
                              identifier: "github.io.jhnnsrs.doks",
                            },
                          })
                            .then((f) => {
                              setError(undefined);
                            })
                            .catch((e) => {
                              setError(e);
                            });
                        }}
                      >
                        {error ? error.message : "Connectto our Demo Server"}
                      </button>
                    </div>
                    <div className="mt-2 font-light text-gray-900 text-center text-sm my-auto border-t-1 border-t border-gray-800 cursor-pointer">
                      {" "}
                      {error ? error.message : "Connectto our Demo Server"}
                    </div>
                    <div className="flex flex-row gap-1 m-2">
                      <input
                        type="input"
                        name="host"
                        placeholder="Server URL"
                        ref={ref}
                        className={`group border-1 border-primary-300 border border-shadow-primary-300 flex w-full items-center rounded-md px-2 py-2 text-sm ring-0`}
                      />
                      <div className="ml-2">
                        {future ? (
                          <button className="w-full shadow-lg shadow-red-700/90 flex items-center justify-center px-2 py-1 border border-transparent text-base font-medium rounded-md text-white bg-red-300 hover:bg-red-400 md:py-1 md:text-lg md:px-10">
                            {" "}
                            Cancel{" "}
                          </button>
                        ) : (
                          <button
                            onClick={() => {
                              load({
                                endpoint: ref.current.value,
                                manifest: {
                                  version: "latest",
                                  identifier: "github.io.jhnnsrs.doks",
                                },
                              })
                                .then((f) => {
                                  setError(undefined);
                                })
                                .catch((e) => {
                                  setError(e);
                                });
                            }}
                            type="submit"
                            className="h-full flex items-center  border border-transparent text-base font-medium rounded-md text-white bg-primary-300 hover:bg-primary-500"
                          >
                            {" "}
                            Use
                          </button>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export const NoHerre = () => {
  const { fakts, setFakts } = useFakts();
  const [future, setFuture] = useState<CancelablePromise<Fakts> | null>(null);

  return (
    <Popover as="div" className="my-auto ">
      <div>
        <Popover.Button className="inline-flex border-0 cursor-pointer bg-transparent w-full justify-center rounded-md text-white px-4 py-1 my-auto shadow-primary-300/20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <VscDebugDisconnect color="#ffffff" size={"2em"} />
        </Popover.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Popover.Panel
          static
          className="absolute right-0 mt-2 mr-2 w-56 origin-top-right divide-y divide-gray-100 border border-1 border-gray-400 rounded-md bg-white shadow-lg shadow ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div className="">
            <div className="px-2 py-2">
              <div className="text-gray-900">Hello at {fakts?.self?.name}</div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export const ShowMe = () => {
  const { fakts, load, setFakts } = useFakts();
  const { user, logout } = useHerre();

  return (
    <Popover as="div" className="my-auto ">
      <div>
        <Popover.Button className="inline-flex border-0 cursor-pointer bg-primary-300  w-full justify-center rounded-md text-white px-4 py-2 my-auto shadow-primary-300/20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          {user.preferred_username}@{fakts.self.name}
        </Popover.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Popover.Panel
          static
          className="absolute right-0 mt-2 mr-2 w-56 origin-top-right divide-y divide-gray-100 border border-1 border-gray-400 rounded-md bg-white shadow-lg shadow ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div className="">
            <div className="flex flex-col w-full ">
              {user && (
                <>
                  <LogoutButton className="p-3 font-light" />
                  <UnconnectButton />
                </>
              )}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export const Login = () => {
  const { fakts, load, setFakts } = useFakts();
  const { user, logout } = useHerre();

  return (
    <Popover as="div" className="my-auto ">
      <div>
        <Popover.Button className="inline-flex border-0 cursor-pointer bg-primary-300  w-full justify-center rounded-md text-white px-4 py-2 my-auto shadow-primary-300/20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          {fakts.self.name}
        </Popover.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Popover.Panel
          static
          className="absolute right-0 mt-2 mr-2 w-56 origin-top-right divide-y divide-gray-100 border border-1 border-gray-400 rounded-md bg-white shadow-lg shadow ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div className="">
            <div className="flex flex-col w-full ">
              {user && (
                <>
                  <LoginButton
                    className={() => "p-3 font-light"}
                    buildGrant={async (fakts) => {
                      return {
                        clientId: fakts.lok.client_id,
                        clientSecret: fakts.lok.client_secret,
                        scopes: fakts.lok.scopes,
                        redirectUri: window.location.origin + "/doks/callback",
                      };
                    }}
                  />
                  <UnconnectButton />
                </>
              )}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export const Connect = () => {
  const { fakts, load, setFakts } = useFakts();

  return (
    <Popover as="div" className="my-auto ">
      <div>
        <Popover.Button className="inline-flex border-0 cursor-pointer bg-primary-300  w-full justify-center rounded-md text-white px-4 py-2 my-auto shadow-primary-300/20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          Connect
        </Popover.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Popover.Panel
          static
          className="absolute right-0 mt-2 mr-2 w-56 origin-top-right divide-y divide-gray-100 border border-1 border-gray-400 rounded-md bg-white shadow-lg shadow ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div className="">
            <div className="flex flex-col w-full ">
              <ConnectButtons
                containerClassName="flex flex-col w-full p-1"
                buttonClassName={() => "p-3 cursor-pointer font-light"}
              />
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export const Connector = (props) => {
  return (
    <FaktsGuard fallback={<Connect />}>
      <HerreGuard fallback={<Login />}>
        <ShowMe />
      </HerreGuard>
    </FaktsGuard>
  );
};
