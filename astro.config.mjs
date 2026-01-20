// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	markdown: {
		shikiConfig: {
			themes: { light: "github-light", dark: "github-dark" },
			wrap: true,
		},
	},
	site: 'https://matchbox.mezo.org',
	integrations: [
		starlight({
			title: 'Matchbox Docs',
			favicon: '/favicon.svg',
			logo: {
				light: './src/assets/matchbox-logo-light.svg',
				dark: './src/assets/matchbox-logo-dark.svg',
				replacesTitle: true,
			},
			customCss: [
				'./src/styles/custom.css',
			],
			social: {
				github: 'https://github.com/mezo-org',
			},
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Welcome', slug: 'docs' },
					],
				},
			],
		}),
		sitemap(),
	],
	redirects: {
		'/': {
			status: 302,
			destination: '/docs/'
		},
	}
});
