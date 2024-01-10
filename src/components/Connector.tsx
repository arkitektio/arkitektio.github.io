import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { HerreGuard, useHerre } from "@jhnnsrs/herre";
import React, { Fragment, useRef, useState } from "react";
import { VscClose, VscDebugDisconnect } from "react-icons/vsc";
import { useArkitektConnect, useArkitektLogin, EasyGuard } from "@jhnnsrs/arkitekt";
import { Popover, Transition } from "@headlessui/react";

export const NoHerre = () => {
  const { fakts, setFakts } = useArkitektConnect();

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
  const { fakts, remove } = useArkitektConnect();
  const { user, logout } = useArkitektLogin();

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
          className="absolute right-0 mt-2 mr-2 w-56 origin-top-right divide-y divide-gray-100 border border-1 border-gray-400 rounded-md bg-back-800  shadow-lg shadow ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div className="">
            {user && (
              <div className="px-2 py-2">
                <div className="text-slate-200 ">
                  Hi {user.preferred_username}!
                </div>
                <div className="text-slate-600 text-xs">
                  You are logged in with this demo website and you can use it to
                  interact with your locally connected arkitekt instance
                </div>
              </div>
            )}
            <div className="flex flex-row w-full gap-2 justify-end p-3">
              {user && (
                <>
                  <button className="px-2  py-2 cursor-pointer bg-primary-300 hover:bg-primary-400 rounded rounded-md" onClick={() => logout()}>
                    {" "}
                    Logout{" "}
                  </button>
                  <button className="px-2 py-2 cursor-pointer bg-primary-300 hover:bg-primary-400  rounded rounded-md" onClick={() => remove()}> Unconnect </button>
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
  const { login, loading } = useArkitektLogin();
  const { fakts, remove } = useArkitektConnect();

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
          className="absolute right-0 mt-2 mr-2 w-56 origin-top-right divide-y divide-gray-100 border border-1 border-gray-400 rounded-md bg-back-800  shadow-lg shadow ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div className="">
            <div className="">
              <div className="px-2 py-2">
                <div className="text-slate-200 ">You are connected!</div>
                <div className="text-slate-600 text-xs">
                  You are logged in with this demo website with arkitekt. Just
                  authenticate yourself and you are ready to go
                </div>
              </div>
              <div className="flex flex-row w-full gap-2 justify-end p-3">
                <>
                  <button
                    className={
                      "px-2  py-2 cursor-pointer bg-primary-300 hover:bg-primary-400 rounded rounded-md " +
                      (loading ? "animate-pulse" : "")
                    }
                    onClick={() => login()}
                  >
                   {loading && <div className="animate-spin">🔄</div>} Login
                  </button>
                  <div className="px-2 py-2 cursor-pointer bg-primary-300 hover:bg-primary-400  rounded rounded-md" onClick={() => remove()}> Unconnect</div>
                </>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export const Connect = () => {
  const { registeredEndpoints, load, fakts } = useArkitektConnect();

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
          className="z-10 absolute right-0 mt-2 mr-2 w-56 origin-top-right divide-y divide-gray-100 border border-1 border-gray-400 rounded-md bg-back-800 shadow-lg shadow ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div className="px-2 py-2">
            <div className="text-slate-200 ">Lets get you connected!</div>
            <div className="text-slate-600 text-xs">
              You are not currently connected. Here connectable instances will
              appear (currently restricted to local arkitekt instance)
            </div>

            {registeredEndpoints.map((e) => (
              <div className="flex flex-row gap-2 justify-start p-3">
                <button
                  className="px-2 py-2 cursor-pointer bg-primary-300 hover:bg-primary-400 rounded rounded-md"
                  onClick={() => load({endpoint: e, requestPublic: true})}
                >
                  {" "}
                  {e.name}{" "}
                </button>
              </div>
            ))}

            {JSON.stringify(fakts)}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export const Connector = (props) => {
  return (
    <EasyGuard notConnectedFallback={<Connect />} notLoggedInFallback={<Login />}>
        <ShowMe />
    </EasyGuard>
  );
};
