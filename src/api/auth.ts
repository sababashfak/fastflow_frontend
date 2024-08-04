import {
  ChangePassword,
  LoginUser,
  ResetPassword,
  SignupUser,
} from "@/interfaces/user";
import authAxios from "@/lib/authAxios";
import catchError from "./catchError";

export const getLoggedInUser = catchError(async () => {
  const result = await authAxios.get("/users/me");

  return result.data;
});

export const signup = catchError(async (userData: SignupUser) => {
  const result = await authAxios.post("/users/signup", userData);

  return result.data;
});

export const login = catchError(async (userData: LoginUser) => {
  const result = await authAxios.post("/users/login", userData);

  return result.data;
});

export const verifyEmail = catchError(async (token: string) => {
  const result = await authAxios.get(`/users/verify-email/${token}`);

  return result.data;
});

export const resendVerificationEmail = catchError(async (email: string) => {
  const result = await authAxios.post("/users/resend-verification-email", {
    email,
  });

  return result.data;
});

export const changePassword = catchError(
  async (passwordData: ChangePassword) => {
    const result = await authAxios.patch(
      "/users/change-password",
      passwordData,
    );

    return result.data;
  },
);

export const forgotPassword = catchError(async (email: string) => {
  const result = await authAxios.post("/users/forgot-password", { email });

  return result.data;
});

export const resetPassword = catchError(
  async (resetToken: string, passwordData: ResetPassword) => {
    const result = await authAxios.patch(
      `/users/reset-password/${resetToken}`,
      passwordData,
    );

    return result.data;
  },
);
