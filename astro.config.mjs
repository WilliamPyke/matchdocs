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
	site: 'https://matchbox.mallard.sh',
	integrations: [
		starlight({
			title: 'Matchbox',
			description: 'The powerful veBTC + veMEZO matching platform for Mezo',
			head: [
				{
					tag: 'meta',
					attrs: { property: 'og:site_name', content: 'Mallard Labs' },
				},
				{
					tag: 'meta',
					attrs: { property: 'og:title', content: 'Matchbox' },
				},
				{
					tag: 'meta',
					attrs: { property: 'og:description', content: 'The powerful veBTC + veMEZO matching platform for Mezo' },
				},
				{
					tag: 'meta',
					attrs: { property: 'og:image', content: 'https://matchbox.mallard.sh/og-image.png' },
				},
				{
					tag: 'meta',
					attrs: { property: 'og:url', content: 'https://matchbox.mallard.sh/docs' },
				},
				{
					tag: 'meta',
					attrs: { property: 'og:type', content: 'website' },
				},
				{
					tag: 'meta',
					attrs: { name: 'twitter:card', content: 'summary_large_image' },
				},
				{
					tag: 'meta',
					attrs: { name: 'twitter:title', content: 'Matchbox' },
				},
				{
					tag: 'meta',
					attrs: { name: 'twitter:description', content: 'The powerful veBTC + veMEZO matching platform for Mezo' },
				},
				{
					tag: 'meta',
					attrs: { name: 'twitter:image', content: 'https://matchbox.mallard.sh/og-image.png' },
				},
			],
			components: {
				Header: './src/overrides/Header.astro',
				SocialIcons: './src/overrides/SocialIcons.astro',
			},
			favicon: '/favicon.svg',
			logo: {
				src: './src/assets/matchbox-logo.png',
				replacesTitle: true,
			},
			customCss: [
				'./src/styles/custom.css',
			],
			social: [
				// Hidden for now - uncomment when needed:
				// { icon: 'github', label: 'GitHub', href: 'https://github.com/mezo-org' },
				// { icon: 'discord', label: 'Discord', href: 'https://discord.mezo.org' },
				// { icon: 'x.com', label: 'X', href: 'https://x.com/MezoNetwork' },
			],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Introduction', slug: 'docs' },
						{ label: 'Getting Started', slug: 'docs/getting-started' },
					],
				},
				{
					label: 'Core Concepts',
					items: [
						{ label: 'Overview', slug: 'docs/concepts' },
						{ label: 'veBTC', slug: 'docs/concepts/vebtc' },
						{ label: 'veMEZO', slug: 'docs/concepts/vemezo' },
						{ label: 'Gauges', slug: 'docs/concepts/gauges' },
						{ label: 'Epochs', slug: 'docs/concepts/epochs' },
					],
				},
				{
					label: 'Guides',
					items: [
						{ label: 'Voting', slug: 'docs/guides/voting' },
						{ label: 'Managing Gauges', slug: 'docs/guides/managing-gauges' },
						{ label: 'Dashboard', slug: 'docs/guides/dashboard' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'FAQ', slug: 'docs/reference/faq' },
						{ label: 'Glossary', slug: 'docs/reference/glossary' },
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
