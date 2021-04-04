import { AnyAction, combineReducers } from 'redux';
import { createReducer } from 'redux-create-reducer';
import * as actionTypes from '../actionTypes/index';
import { LoadStatus } from '../constants/Status';
import { Repository } from '../interfaces/api-types';

const defaultUserInfo = {
  loadStatus: LoadStatus.None,
};

const userInfoReducer = createReducer(defaultUserInfo, {
  [actionTypes.SET_USER_INFO_RESULT]: setUserInfoResult,
  [actionTypes.SET_USER_INFO_REQUEST]: setLoading,
});

function setUserInfoResult(_state: any, action: AnyAction) {
  if (action.user) {
    return {
      ...action.user,
      loadStatus: LoadStatus.Success,
    };
  }

  return { loadStatus: LoadStatus.Error };
}

const defaultReposData = {
  data: [] as Repository[],
  loadStatus: LoadStatus.None,
};
const reposListReducer = createReducer(defaultReposData, {
  [actionTypes.ADD_TO_REPOS_LIST]: addToReposList,
  [actionTypes.ADD_TO_REPOS_LIST_REQUEST]: setLoading,
});
function addToReposList(_state: any, action: AnyAction) {
  if (action.data) {
    return {
      data: [ ...action.data ],
      loadStatus: LoadStatus.Success,
    };
  }

  return { data: [], loadStatus: LoadStatus.Error };
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
