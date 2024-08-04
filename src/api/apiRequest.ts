import { AxiosError } from "axios";

const apiRequest = async <T>(request: () => Promise<T>): Promise<T | any> => {
  try {
    return await request();
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
    throw error;
  }
};

export default apiRequest;
