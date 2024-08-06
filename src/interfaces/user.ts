export interface TUser {
  _id: string;
  name: string;
  email: string;
  avatar: string;
  role: "user" | "admin";
}

export interface SignupUser {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface LoginUser {
  email: string;
  password: string;
}

export interface ChangePassword {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

export interface TResetPassword {
  password: string;
  confirmPassword: string;
}

export interface UpdateUser {
  name: string;
  email: string;
  avatar: string;
}
