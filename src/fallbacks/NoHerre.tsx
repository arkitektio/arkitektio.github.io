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

export const NoHerre: React.FC<PublicHomeProps> = (props) => {
  const { login } = useHerre();
  const d = useDocusaurusContext();
  const { fakts, setFakts } = useFakts();
  const [future, setFuture] = useState<CancelablePromise<Fakts> | null>(null);

  return (
    <div className="flex flex-col">
      <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
        <BrowserOnly>
          {() => (
            <>
              {fakts && fakts.lok ? (
                <>
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
                          userInfoEndpoint: fakts.lok.base_url + "/userinfo/",
                          authUrl: fakts.lok.base_url + "/authorize/",
                        }
                      );
                    }}
                    className="w-full shadow-lg shadow-primary-300/60 flex items-center justify-center px-8 py-3 border text-base font-medium rounded-md dark:text-white text-back-700 border-primary-400 bg-primary-300 hover:bg-primary-400 md:py-4 md:text-lg md:px-10"
                  >
                    Login with {fakts?.lok?.base_url}
                  </button>
                  <button onClick={() => setFakts(null)}>Disconnect</button>
                </>
              ) : (
                <>
                  {" "}
                  Looks like your faktds are not configured properly for this
                  service. Choose a different server{" "}
                  <button onClick={() => setFakts(null)}>Logout</button>
                </>
              )}
            </>
          )}
        </BrowserOnly>
      </div>
    </div>
  );
};
