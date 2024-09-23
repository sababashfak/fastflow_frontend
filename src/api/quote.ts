import authAxios from "@/lib/authAxios";
import apiRequest from "./apiRequest";

export const requestQuote = async (data: any) => {
  return apiRequest(() =>
    authAxios.post("/quote", data).then((res) => res.data),
  );
};
