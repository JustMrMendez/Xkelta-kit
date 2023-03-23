import { SvelteKitAuth } from '@auth/sveltekit';
import GitHub from '@auth/core/providers/github';
import Google from '@auth/core/providers/google';
import { GITHUB_ID, GITHUB_SECRET, GOOGLE_ID, GOOGLE_SECRET } from '$env/static/private';
import { XataAdapter } from '@next-auth/xata-adapter';
import { client } from '$lib/db';

export const handle = SvelteKitAuth({
	adapter: XataAdapter(client),
	providers: [
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore - SvelteKitAuth is not a function
		GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET }),
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore - SvelteKitAuth is not a function
		Google({
			clientId: GOOGLE_ID,
			clientSecret: GOOGLE_SECRET,
			async profile(profile) {
				return {
					id: profile.aud,
					name: profile.name,
					email: profile.email,
					image: profile.picture,
					emailVerified: profile.email_verified
				};
			}
		})
	]
});
