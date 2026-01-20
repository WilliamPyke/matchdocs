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
			title: 'Matchbox Docs',
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
