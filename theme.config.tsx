import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: '%s - Informatics Resources',
    };
  },
  logo: <span>Informatics Resources</span>,
  project: {
    link: 'https://github.com/akademikinformatikaitera22/Informatics22-Academic-Repository',
  },
  chat: {
    link: 'https://discord.gg/enCvCKDv',
  },
  sidebar: {
    toggleButton: true,
  },
  footer: {
    text: (
      <span>
        Copyright © {new Date().getFullYear()}{' '}
        <a href="https://www.wupxy.tech" target="_blank">
          Wupxy.
        </a>
      </span>
    ),
  },
  feedback: {
    useLink: () =>
      'https://github.com/akademikinformatikaitera22/Informatics22-Academic-Repository/issues/new',
    content: 'Report issues',
  },
  editLink: { text: null },
};

export default config;
