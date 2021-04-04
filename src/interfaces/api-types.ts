import { components } from '@octokit/openapi-types';
import { LoadStatus } from '../constants/Status';

export type User = components['schemas']['public-user'] & { loadStatus: LoadStatus };
export type Repository = components['schemas']['repository'] & { contributors: number };
export type Contributor = components['schemas']['contributor'];
