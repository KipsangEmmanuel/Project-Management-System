export interface updatUser {
  id: string;
  username: string;
  email: string;
}
export interface user extends updatUser {
  password: string;
  isdeleted: boolean;
  isAdmin: boolean;
}

export interface ExtendedUser extends Request {
  info?: updatUser;
}

export interface checkDetailsUser {
  _id: string;
  username: string;
  email: string;
}