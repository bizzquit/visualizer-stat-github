import {
  ADD_TO_REPOS_LIST,
  ADD_TO_REPOS_LIST_REQUEST,
  MODIFY_REPOS_LIST,
  SET_USER_INFO_REQUEST,
  SET_USER_INFO_RESULT,
} from '../actionTypes';
import { Repository, User } from '../interfaces/api-types';

export const setUserInfo = (user: User | null) => ({
  type: SET_USER_INFO_RESULT,
  user,
});

export const setUserInfoLoading = () => ({
  type: SET_USER_INFO_REQUEST
});

export const addToReposList = (data: Repository[] | null, reposStat?: { [key: string]: number }) => ({
  type: ADD_TO_REPOS_LIST,
  data,
  reposStat
});

export const setReposListLoading = () => ({
  type: ADD_TO_REPOS_LIST_REQUEST
});

export const setContributorsChunk = (from: number, chunk: Repository[]) => ({
  type: MODIFY_REPOS_LIST,
  from,
  chunk
});
