import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import X from "@site/static/img/favicon.svg";
import Layout from "@theme/Layout";


function OutdatedDisclaimer() {
  return (
    <div className="bg-yellow-200 text-black border-b-4 border-yellow-600 mx-12 rounded-lg ">
      <div className="mx-auto max-w-5xl px-6 py-8 text-center">
        <p className="text-2xl md:text-3xl font-extrabold  tracking-tight">
          ⚠️ Heads up — this site is (painfully) outdated ⚠️
        </p>
        <p className="text-lg md:text-xl font-semibold mt-4">
          As of <span className="underline">June 2026</span> we are in the midst
          of preparing the release of the next <strong>Arkitekt</strong>.
        </p>
        <p className="text-base md:text-lg mt-3">
          Everything you see here reflects an older version and is no longer accurate.
          We strongly discourage using this version for any new projects, and we are working hard to get the new version ready for release.
          
          Just a little more wait — please check back soon (probably in July)!
        </p>
      </div>
    </div>
  );
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="bg-background-primary py-20 mb-12">
      <div className="mx-auto text-center py-24 w-3/4">
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
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>

      <OutdatedDisclaimer />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
