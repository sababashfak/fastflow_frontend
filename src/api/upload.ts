import authAxios from "@/lib/authAxios";
import apiRequest from "./apiRequest";

export const upload = async (formData: FormData) => {
  return apiRequest(() =>
    authAxios.post("/uploads", formData).then((res) => res.data),
  );
};

export const uploadMultiple = async (files: File[]) => {
  const formData = new FormData();
  files.forEach((file) => {
    formData.append("files", file);
  });

  return apiRequest(() =>
    authAxios.post("/uploads/multiple", formData).then((res) => res.data),
  );
};
