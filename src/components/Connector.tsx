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
          className="absolute right-0 mt-2 mr-2 w-56 origin-top-right divide-y divide-gray-100 border border-1 border-gray-400 rounded-md bg-back-800  shadow-lg shadow ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div className="">
            {user && (
              <div className="px-2 py-2">
                <div className="text-slate-200 ">Hi {user.preferred_username}!</div>
                <div className="text-slate-600 text-xs">You are logged in with this demo website and you can use it to interact with your locally connected arkitekt instance</div>
              </div>
            )}
            <div className="flex flex-row w-full gap-2 justify-end p-3">
              {user && (
                <>
                  <LogoutButton className="px-2  py-2 cursor-pointer bg-primary-300 hover:bg-primary-400 rounded rounded-md"> Logout </LogoutButton>
                  <UnconnectButton className="px-2 py-2 cursor-pointer bg-primary-300 hover:bg-primary-400  rounded rounded-md"/>
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
              <div className="text-slate-600 text-xs">You are logged in with this demo website with arkitekt. Just authenticate yourself and you are ready to go</div>
            </div>
            <div className="flex flex-row w-full gap-2 justify-end p-3">
              
                <>
                  <LoginButton className={(e) => "px-2  py-2 cursor-pointer bg-primary-300 hover:bg-primary-400 rounded rounded-md " + (e.authenticating ? "animate-pulse" : "")} buildGrant={async (fakts) => {
                      return {
                        clientId: fakts.lok.client_id,
                        clientSecret: fakts.lok.client_secret,
                        scopes: fakts.lok.scopes,
                        redirectUri: window.location.origin + "/callback",
                      };
                    }}>{(e) => e.authenticating ? "Cancel Login" : "Login" }</LoginButton>
                  <UnconnectButton className="px-2 py-2 cursor-pointer bg-primary-300 hover:bg-primary-400  rounded rounded-md"/>
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
          className="absolute right-0 mt-2 mr-2 w-56 origin-top-right divide-y divide-gray-100 border border-1 border-gray-400 rounded-md bg-back-800 shadow-lg shadow ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
         <div className="px-2 py-2">
              <div className="text-slate-200 ">Lets get you connected!</div>
              <div className="text-slate-600 text-xs">You are not currently connected. Here connectable instances will appear (currently restricted to local arkitekt instance)</div>
            
          
              <ConnectButtons
                containerClassName="flex flex-row w-full gap-2 justify-end p-3"
                buttonClassName={() => "p-3 cursor-pointer font-light"}
              />
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
