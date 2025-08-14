import { VscDebugDisconnect } from "react-icons/vsc";

import { Popover, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { Form, useForm } from "react-hook-form";
import { App, Guard } from "../lib/app/App";
import { discover } from "../lib/arkitekt/fakts/discover";
import { useMeQuery } from "../lib/lok/api/graphql";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

export const NoHerre = () => {
  const fakts = App.useFakts();

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
              <div className="text-gray-900">
                Hello at {fakts?.self?.deployment_name}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export const ShowMe = () => {
  const { data } = useMeQuery();
  const logout = App.useDisconnect();
  return (
    <Popover as="div" className="my-auto ">
      <div>
        <Popover.Button className="inline-flex border-0 cursor-pointer  w-full justify-center rounded-md text-white px-4 py-2 my-auto shadow-primary-300/20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          {data?.me?.username || "User"}
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
            {data && (
              <div className="px-2 py-2">
                <div className="text-slate-200 ">Hi {data?.me.username}!</div>
                <div className="text-slate-600 text-xs">
                  {data.me.firstName} {data.me.lastName}{" "}
                </div>
              </div>
            )}
            <div className="flex flex-row w-full gap-2 justify-end p-3">
              {data?.me && (
                <>
                  <button
                    className="px-2  py-1 cursor-pointer bg-primary-300 hover:bg-primary-400 rounded rounded-md"
                    onClick={() => logout()}
                  >
                    {" "}
                    Logout{" "}
                  </button>
                </>
              )}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export const NotConnected = () => {
  const connect = App.useConnect();

  const [introspectError, setIntrospectError] = React.useState<string | null>(
    null
  );

  const form = useForm({
    defaultValues: {
      url: "https://go.arkitekt.live",
    },
  });

  const handleConnect = (e: React.MouseEvent) => {
    e.preventDefault();
    setIntrospectError(null);
    const formData = form.getValues();
    const controller = new AbortController();

    discover({ url: formData.url, timeout: 2000, controller })
      .then((endpoint) => {
        connect({
          endpoint,
          controller,
        }).catch((e) => {
          setIntrospectError(e.message);
        });
      })
      .catch((e) => {
        setIntrospectError(e.message);
      });
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"ghost"} className="cursor-pointer">
          {" "}
          Login
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle> Log in to your local server?</SheetTitle>
          <SheetDescription>
            <div className="space-y-4">
              <p className=" dark:text-gray-400">
                Enter your username and password to access your local server.
              </p>

              {introspectError && (
                <div className="bg-red-100 text-red-900 p-2 rounded-md">
                  Could not connect to the server
                  <p className="text-xs">{introspectError}</p>
                </div>
              )}
              <Form {...form}>
                <div className="grid w-full max-w-sm gap-2">
                  <input
                    {...form.register("url")}
                    type="text"
                    placeholder="https://go.arkitekt.live"
                  />
                  <Button
                    className="w-full cursor-pointer"
                    type="button"
                    variant={"ghost"}
                    onClick={handleConnect}
                  >
                    Connect
                  </Button>
                </div>
              </Form>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export const Connector = (props) => {
  return (
    <App.Guard notConnectedFallback={<NotConnected />}>
      <Guard.Lok>
        <ShowMe />
      </Guard.Lok>
    </App.Guard>
  );
};
