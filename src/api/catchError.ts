import { AxiosError } from "axios";

const catchError = async (cb: any) => {
  try {
    return await cb();
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    } else {
      throw error;
    }
  }
};

export default catchError;
