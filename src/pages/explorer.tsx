import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import X from "@site/static/img/favicon.svg";

import styles from "./index.module.css";
import { Graph } from "../components/Graph";

export default function Api(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} Explorer`}
      description="This is the graphql explorer for the api."
    >
      <main className="h-screen">
        <Graph />
      </main>
    </Layout>
  );
}
