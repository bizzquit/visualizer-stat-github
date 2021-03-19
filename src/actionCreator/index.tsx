import * as actionTypes from '../actionTypes/index';
import { User } from '../components/UserCard';

export const setUserInfo = (user: User | null) => ({
  type: actionTypes.SET_USER_INFO_RESULT,
  user,
});
