import { XataClient } from './xata';
import { BaseClient } from '@xata.io/client';
import { XATA_API_KEY, XATA_BRANCH, XATA_URL } from '$env/static/private';

export const defaultOptions = {
	databaseUrl: XATA_URL,
	apiKey: XATA_API_KEY,
	branch: XATA_BRANCH
};

export const client = new XataClient({
	apiKey: XATA_API_KEY,
	branch: XATA_BRANCH
});

export const baseClient = new BaseClient({
	...defaultOptions
});
