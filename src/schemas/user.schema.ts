// import * as mongoose from 'mongoose';
// export class User {
//   username: string;
//   password: string;
// }

// export const UserSchema = new mongoose.Schema(User);

export interface User {
  username: string;
  password: string;
}
