import { defineConfig } from 'astro/config';
import remarkShikiTwoslash from 'remark-shiki-twoslash';

// https://astro.build/config
export default defineConfig({
	renderers: ['@astrojs/renderer-preact'],
	buildOptions: {
		site: 'https://example.com/',
	},
  markdownOptions: {
    render: [
      '@astrojs/markdown-remark',
      {
        syntaxHighlight: false,
        remarkPlugins: [
          [remarkShikiTwoslash.default, { theme: "dark-plus" }]
        ]
      },
    ],
  }
});
