import React, { useEffect } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { useLocation, useHistory } from "@docusaurus/router";
import BrowserOnly from "@docusaurus/BrowserOnly";

export const CallbackInner: React.FC<{}> = (props) => {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    let code = new URLSearchParams(location.search).get("code");
    console.log(code);
    if (code) {
      localStorage.setItem("herre-code", code);
      window.close();
    }
  }, []);

  return <>Signing in</>;
};

export default function Callback(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="This is just a callback"
    >
      <BrowserOnly>{() => <CallbackInner />}</BrowserOnly>
    </Layout>
  );
}
