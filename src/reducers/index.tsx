import { AnyAction, combineReducers } from 'redux';
import { createReducer } from 'redux-create-reducer';
import * as actionTypes from '../actionTypes/index';
import { LoadStatus } from '../constants/Status';

const defaultUserInfo = {
  loadStatus: LoadStatus.None,
};

const userInfoReducer = createReducer(defaultUserInfo, {
  [actionTypes.SET_USER_INFO_RESULT]: setUserInfoResult,
  [actionTypes.SET_USER_INFO_REQUEST]: setUserInfoRequest,
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
function setUserInfoRequest(state: any, _action: AnyAction) {
  return {
    ...state,
    loadStatus: LoadStatus.Loading,
  };
}

export const rootReducer = combineReducers({
  user: userInfoReducer,
});
