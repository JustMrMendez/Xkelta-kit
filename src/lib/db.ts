import { defaultOptions, XataClient } from './xata';
import { BaseClient } from '@xata.io/client';

export const client = new XataClient({
	branch: defaultOptions.branch,
	apiKey: defaultOptions.apiKey
});

export const baseClient = new BaseClient({
	...defaultOptions
});
