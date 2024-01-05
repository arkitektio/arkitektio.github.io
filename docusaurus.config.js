// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const graphqlMarkdownConfig = require("./graphql-markdown.config");
const lightCodeTheme = require("prism-react-renderer").themes.github;
const darkCodeTheme = require("prism-react-renderer").themes.dracula;

const mikroConf = {
  schema: "http://localhost:8080/graphql",
  rootPath: "./docs/schemas",
  baseURL: "mikro",
  homepage: "./static/mikro.md",
  linkRoot: "/docs/schemas",
};

const arkitektConf = {
  schema: "http://localhost:8090/graphql",
  rootPath: "./docs/schemas",
  baseURL: "arkitekt",
  homepage: "./static/arkitekt.md",
  linkRoot: "/docs/schemas",
};

const flussConf = {
  schema: "http://localhost:8070/graphql",
  rootPath: "./docs/schemas",
  baseURL: "fluss",
  homepage: "./static/fluss.md",
  linkRoot: "/docs/schemas",
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Arkitekt",
  tagline: "streaming analysis for microscopy",
  url: "https://arkitekt.live/",
  baseUrl: "/",
  
  trailingSlash: false,
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.svg",
  markdown: {
    mermaid: true,
  },

  themes: ["@docusaurus/theme-live-codeblock", "@docusaurus/theme-mermaid"],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "arkitektio", // Usually your GitHub org/user name.
  projectName: "arkitektio.github.io", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
    [
      "@edno/docusaurus2-graphql-doc-generator",
      { ...graphqlMarkdownConfig, ...arkitektConf, id: "arkitekt" },
    ],
    [
      "@edno/docusaurus2-graphql-doc-generator",
      { ...graphqlMarkdownConfig, ...mikroConf, id: "mikro" },
    ],
    [
      "@edno/docusaurus2-graphql-doc-generator",
      { ...graphqlMarkdownConfig, ...flussConf, id: "fluss" },
    ],
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 90,
        max: 2000, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 3, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/jhnnsrs/doks/edit/master/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/jhnnsrs/doks/edit/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        disableSwitch: true,
        defaultMode: "dark",
        // respectPrefersColorScheme: true,
      },
      navbar: {
        title: "arkitekt",
        logo: {
          alt: "Doks Logo",
          src: "img/favicon.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Documentation",
          },
          { to: "/blog", label: "Blog", position: "left" },
          { to: "/explorer", label: "Explorer", position: "left" },
          {
            href: "https://github.com/arkitektio",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      image: "img/favicon.svg",
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Image.sc",
                href: "https://forum.image.sc/tag/arkitekt",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/arkitektio/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Arkitekt, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
