import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<"svg">>;
  Png?: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Your tools, your way",
    Png: "/img/apps.png",
    description: (
      <>
        Arkitekt is a open source middleman that interactvs with your favorite
        bioimage tools, like Napari and Fiji, but also with your scripts and
        robotic devices.
      </>
    ),
  },
  {
    title: "Your worfklows, but easy",
    Png: "/img/workflows.png",
    description: (
      <>
        Arkitekt allows you to orchestrate your bioimage workflows in graphical
        workflows, with a focus on reproducibility and real-time data.
      </>
    ),
  },
  {
    title: "Your data, your rules",
    Png: "/img/data.png",
    description: (
      <>
        Arkitekt organizes your data in a fully searchable database. No more
        folder chaos. Also it's safe!
      </>
    ),
  },
];

function Feature({ title, Svg, Png, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        {Svg && <Svg className={styles.featureSvg} role="img" />}
        {Png && <img src={Png} className="w-60" role="img" />}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
