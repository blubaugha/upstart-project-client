import { User } from 'projects/core-lib/src/lib/models/user.model';

export interface UserStatus {
  message: string,
  user: User;
}
