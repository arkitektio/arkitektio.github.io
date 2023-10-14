import BrowserOnly from "@docusaurus/BrowserOnly";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import CancelablePromise from "cancelable-promise";
import { Fakts, useFakts } from "@jhnnsrs/fakts";
import { Field, Form, Formik } from "formik";
import { useHerre } from "@jhnnsrs/herre";
import React, { useState } from "react";

export interface PublicHomeProps {}

export interface ConfigValues {
  host: string;
}

export const NoMikro: React.FC<PublicHomeProps> = (props) => {
  const { login, logout } = useHerre();
  const { fakts, setFakts } = useFakts();

  return (
    <div className="flex flex-col">
      <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
        <BrowserOnly>
          {() => (
            <>
              Could not connect to mikro on this instance
              <button onClick={() => setFakts(null)}>Disconnect</button>
            </>
          )}
        </BrowserOnly>
      </div>
    </div>
  );
};
