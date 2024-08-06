import authAxios from "@/lib/authAxios";
import apiRequest from "./apiRequest";

export const upload = async (formData: FormData) => {
  return apiRequest(() =>
    authAxios.post("/uploads", formData).then((res) => res.data),
  );
};
