import authAxios from "@/lib/authAxios";
import apiRequest from "./apiRequest";

export const contact = async (data: any) => {
  return apiRequest(() =>
    authAxios.post("/contact", data).then((res) => res.data),
  );
};
