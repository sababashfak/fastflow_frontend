import authAxios from "@/lib/authAxios";
import apiRequest from "./apiRequest";

export const createReview = async (reviewData: any) => {
  return apiRequest(() =>
    authAxios.post("/reviews", reviewData).then((res) => res.data),
  );
};

export const getReviews = async (query: any) => {
  return apiRequest(() =>
    authAxios.get("/reviews", { params: query }).then((res) => res.data),
  );
};

export const getReviewById = async (reviewId: string) => {
  return apiRequest(() =>
    authAxios.get(`/reviews/${reviewId}`).then((res) => res.data),
  );
};

export const updateReview = async (reviewId: string, reviewData: any) => {
  return apiRequest(() =>
    authAxios.patch(`/reviews/${reviewId}`, reviewData).then((res) => res.data),
  );
};

export const deleteReview = async (reviewId: string) => {
  return apiRequest(() =>
    authAxios.delete(`/reviews/${reviewId}`).then((res) => res.data),
  );
};
