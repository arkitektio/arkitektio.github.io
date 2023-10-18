import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import X from "@site/static/img/favicon.svg";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="bg-slate-900">
      <div className="container mx-auto text-center py-24">
        <X className="w-64" />
        <h1 className="text-4xl font-bold text-white">{siteConfig.title}</h1>
        <p className="text-xl py-6 text-white">{siteConfig.tagline}</p>

        <div className="py-3">
          <Link
            className="bg-white rounded-md text-slate-600 px-4 py-2"
            to="/docs/intro"
          >
            Arkitekt Tutorial
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
