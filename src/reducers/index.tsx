import { AnyAction, combineReducers } from 'redux';
import { createReducer } from 'redux-create-reducer';
import * as actionTypes from '../actionTypes/index';
import { LoadStatus } from '../constants/Status';

const defaultUserInfo = {
  loadStatus: LoadStatus.None,
};
const userInfoReducer = createReducer(defaultUserInfo, {
  [actionTypes.SET_USER_INFO_RESULT]: setUserInfoResult,
  [actionTypes.SET_USER_INFO_REQUEST]: setLoading,
});
function setUserInfoResult(_state: any, { user }: AnyAction) {
  if (user) {
    return {
      ...user,
      loadStatus: LoadStatus.Success,
    };
  }

  return { loadStatus: LoadStatus.Error };
}


const defaultReposData = {
  data: null,
  reposStat: {},
  loadStatus: LoadStatus.None
};
const reposListReducer = createReducer(defaultReposData, {
  [actionTypes.ADD_TO_REPOS_LIST]: addToReposList,
  [actionTypes.ADD_TO_REPOS_LIST_REQUEST]: setLoading,
  [actionTypes.MODIFY_REPOS_LIST]: modifyReposList,
});
function addToReposList(state: any, { data, reposStat }: AnyAction) {
  if (data) {
    return {
      ...state,
      data: data,
      reposStat: reposStat,
      loadStatus: LoadStatus.Success,
    };
  }

  return {
    ...state,
    data: [],
    loadStatus: LoadStatus.Error
  };
}
function modifyReposList(state: any, { from, chunk }: AnyAction) {
  state.data.splice(from, chunk.length, ...chunk);

  return {
    ...state,
    data: state.data
  }
}
function setLoading(state: any, _action: AnyAction) {
  return {
    ...state,
    loadStatus: LoadStatus.Loading,
  };
}

export const rootReducer = combineReducers({
  user: userInfoReducer,
  repos: reposListReducer,
});
