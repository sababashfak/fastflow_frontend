import authAxios from "@/lib/authAxios";
import apiRequest from "./apiRequest";

export const createComment = async (commentData: any) => {
  return apiRequest(() =>
    authAxios.post("/comments", commentData).then((res) => res.data),
  );
};

export const getComments = async () => {
  return apiRequest(() => authAxios.get("/comments").then((res) => res.data));
};

export const getCommentsByBlogId = async (blogId: string, query: any) => {
  return apiRequest(() =>
    authAxios
      .get(`/comments/${blogId}`, { params: query })
      .then((res) => res.data),
  );
};

export const updateComment = async (commentId: string, commentData: any) => {
  return apiRequest(() =>
    authAxios
      .patch(`/comments/${commentId}`, commentData)
      .then((res) => res.data),
  );
};

export const deleteComment = async (commentId: string) => {
  return apiRequest(() =>
    authAxios.delete(`/comments/${commentId}`).then((res) => res.data),
  );
};
