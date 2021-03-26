import { SET_USER_INFO_RESULT } from '../actionTypes';
import { User } from '../interfaces/api-types';

export const setUserInfo = (user: User | null) => ({
  type: SET_USER_INFO_RESULT,
  user,
});
