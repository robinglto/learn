import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  banner: {
    key: "wip",
    dismissible: false,
    text: <p>🚧 Work in progress / Obra en construcción 🚧</p>,
  },
  sidebar: {
    defaultMenuCollapseLevel: 0,
  },
  useNextSeoProps: () => {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – robin.do",
      };
    }
    return {
      titleTemplate: "robin.do",
    };
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Learn robin.do" />
      <meta property="og:description" content="Learn front-end development." />
    </>
  ),
  logo: <span>Learn</span>,
  footer: {
    text: "robin.do",
  },
  i18n: [
    { locale: "en", text: "English" },
    { locale: "es", text: "Español" },
  ],
  project: {
    link: "https://github.com/robinglto/learn",
  },
  docsRepositoryBase: "https://github.com/robinglto/learn",
};

export default config;
