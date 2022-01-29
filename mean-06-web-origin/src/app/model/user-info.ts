import { User } from './user';

export interface UserInfo extends User {
  id: number;
  role: string;
  active: string;
}
