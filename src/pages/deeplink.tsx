import React, { useEffect } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import X from "@site/static/img/favicon.svg";

import styles from "./index.module.css";



export const deeplinkTargets = [{
  url: "docs/services/rekuest",
  predicate: (link) => link.includes("rekuest"),
}, {
  url: "docs/services/mikro",
  predicate: (link) => link.includes("mikro"),
}, {
  url: "docs/services/fluss",
  predicate: (link) => link.includes("fluss"),
}, {
  url: "docs/services/lok",
  predicate: (link) => link.includes("lok"),
}
];


const matchDeepLink = (target: string | null) => {
  if (!target) return null;

  const match = deeplinkTargets.find(({ predicate }) => predicate(target));
  return match ? match.url : null;
}

const matchOrkestratorDeepLink = (target: string | null) => {
  return target;
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const [redirected, setRedirected] = React.useState(null);

  useEffect(() => {
    const { search } = window.location;
    const params = new URLSearchParams(search);
    const target = params.get("live");
    const orkestrator = params.get("orkestrator");

    // decode URI components
    if (target) {
      try {
        const decoded = decodeURIComponent(target);

        const matched = matchDeepLink(decoded);


        if (matched) {
          window.location.href = `/${matched}`;
        }
        else {
          setRedirected("No match found");
        }
      } catch (error) {
        console.error("Error decoding URI component:", error);
        setRedirected(error);
      }
    }

    // decode URI components
    if (orkestrator) {
      try {
        const decoded = decodeURIComponent(orkestrator);

        const matched = matchOrkestratorDeepLink(decoded);


        if (matched) {
          window.location.href = `orkestrator://${matched}`;
        }
        else {
          setRedirected("No match found");
        }
      } catch (error) {
        console.error("Error decoding URI component:", error);
        setRedirected(error);
      }
    }


  }, []);


  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      {redirected === null ? (
        <div className="container mx-auto text-center py-24">
          <X className="w-64 mx-auto" />
          <h1 className="text-4xl font-bold text-slate-200">Redirecting...</h1>
          <p className="text-xl py-6 text-slate-400">Please wait while we redirect you to the appropriate page.</p>
        </div>
      ) : (
        <div className="container mx-auto text-center py-24">
          <X className="w-64 mx-auto" />
          <h1 className="text-4xl font-bold text-slate-200">Redirection Failed</h1>
          <p className="text-xl py-6 text-slate-400">We couldn't redirect you automatically. {redirected}</p>
          <a href="/docs/intro">Go to documentation</a>.
        </div>
      )}
    </Layout>
  );
}
