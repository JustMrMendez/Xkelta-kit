import { XATA_API_KEY } from '$env/static/private';
import { XataClient } from '$lib/xata';
import type { LayoutServerLoad } from './$types';

const xata = new XataClient({
	apiKey: XATA_API_KEY
});

export const load = (async (event) => {
	const session = await event.locals.getSession();
	console.log('session', session);

	return { session };
}) satisfies LayoutServerLoad;
