import authAxios from "@/lib/authAxios";
import apiRequest from "./apiRequest";

export const callback = async (data: any) => {
  return apiRequest(() =>
    authAxios.post("/callback", data).then((res) => res.data),
  );
};
