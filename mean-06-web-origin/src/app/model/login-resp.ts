import { UserInfo } from './user-info';

export interface LoginResp {
  success: boolean;
  token?: string;
  message?: string;
  msgCode?: string;
  userInfo?: UserInfo;
}
