import authAxios from "@/lib/authAxios";
import apiRequest from "./apiRequest";
import { uploadMultiple } from "./upload";

export const createBooking = async (photos: File[], bookingData: any) => {
  const photoResult = await uploadMultiple(photos);

  if (!photoResult.success) {
    return photoResult;
  }

  const formData = {
    ...bookingData,
    photos: photoResult.data.files.map((file: any) => file.filename),
  };

  return apiRequest(() =>
    authAxios.post("/bookings", formData).then((res) => res.data),
  );
};

export const getBookings = async (query: any) => {
  return apiRequest(() =>
    authAxios.get("/bookings", { params: query }).then((res) => res.data),
  );
};
