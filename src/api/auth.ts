import {
  ChangePassword,
  LoginUser,
  SignupUser,
  TResetPassword,
} from "@/interfaces/user";
import authAxios from "@/lib/authAxios";
import apiRequest from "./apiRequest";

export const getLoggedInUser = async () => {
  return apiRequest(() => authAxios.get("/users/me").then((res) => res.data));
};

export const signup = async (userData: SignupUser) => {
  return apiRequest(() =>
    authAxios.post("/users/signup", userData).then((res) => res.data),
  );
};

export const login = async (userData: LoginUser) => {
  return apiRequest(() =>
    authAxios.post("/users/login", userData).then((res) => res.data),
  );
};

export const verifyEmail = async (token: string) => {
  return apiRequest(() =>
    authAxios.get(`/users/verify-email/${token}`).then((res) => res.data),
  );
};

export const resendVerificationEmail = async (email: string) => {
  return apiRequest(() =>
    authAxios
      .post("/users/resend-verification-email", { email })
      .then((res) => res.data),
  );
};

export const changePassword = async (passwordData: ChangePassword) => {
  return apiRequest(() =>
    authAxios
      .patch("/users/change-password", passwordData)
      .then((res) => res.data),
  );
};

export const forgotPassword = async (email: string) => {
  return apiRequest(() =>
    authAxios.post("/users/forgot-password", { email }).then((res) => res.data),
  );
};

export const resetPassword = async (
  resetToken: string,
  passwordData: TResetPassword,
) => {
  return apiRequest(() =>
    authAxios
      .patch(`/users/reset-password/${resetToken}`, passwordData)
      .then((res) => res.data),
  );
};
