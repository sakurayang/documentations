// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const buildPosition = process.env.buildPosition ?? process.env.NODE_ENV;
const port = process.env.port ?? 3000;

/** @type {import("@docusaurus/types").Config} */
const config = {
  title: "MC 生电设备使用指南",
  tagline: "woooooo~~",
  url: "https://docs.lapsap.moe/",
  baseUrl: buildPosition === "code-server" ? `/proxy/${port}/` : "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren"t using GitHub pages, you don"t need these.
  organizationName: "sakurayang", // Usually your GitHub org/user name.
  projectName: "doucumentations", // Usually your repo name.

  // Even if you don"t use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },
  presets: [
    [
      "classic",
      /** @type {import("@docusaurus/preset-classic").Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/sakurayang/doucumentations/",
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  // themeConfig:
  //   /** @type {import("@docusaurus/preset-classic").ThemeConfig} */
  //   ({
  //     navbar: {
  //       title: "MC 生电设备使用指南",
  //       logo: {
  //         alt: "logo~",
  //         src: "img/logo.svg",
  //       },
  //       items: [
  //         {
  //           type: "doc",
  //           docId: "mc",
  //           position: "left",
  //           label: "mc",
  //         },
  //       ],
  //     },
  //     footer: {
  //       style: "dark",
  //       links: [
  //         {
  //           title: "Docs",
  //           items: [
  //             {
  //               label: "mc",
  //               to: "/docs/mc",
  //             },
  //           ],
  //         },
  //         {
  //           title: "More",
  //           items: [
  //             {
  //               label: "GitHub",
  //               href: "https://github.com/sakurayang",
  //             },
  //           ],
  //         },
  //       ],
  //       copyright: `Copyright © ${new Date().getFullYear()} Gerard, Built with Docusaurus.`,
  //     },
  //     prism: {
  //       theme: lightCodeTheme,
  //       darkTheme: darkCodeTheme,
  //     },
  //   }),
};

module.exports = config;
