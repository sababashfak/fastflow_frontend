import { TNewBlog } from "@/interfaces/blog";
import authAxios from "@/lib/authAxios";
import apiRequest from "./apiRequest";

export const createBlog = async (blogData: TNewBlog) => {
  return apiRequest(() =>
    authAxios.post("/blogs", blogData).then((res) => res.data),
  );
};

export const getBlogs = async () => {
  return apiRequest(() => authAxios.get("/blogs").then((res) => res.data));
};

export const getBlogsPaginated = async (params: any) => {
  return apiRequest(() =>
    authAxios.get("/blogs", { params }).then((res) => {
      const data = res.data?.data;

      const totalPages = Math.ceil(data?.totalDocs / params.limit) || 1;

      return {
        blogs: data?.blogs,
        totalPages,
        totalBlogs: data?.totalDocs,
      };
    }),
  );
};

export const getBlogById = async (blogId: string) => {
  return apiRequest(() =>
    authAxios.get(`/blogs/${blogId}`).then((res) => res.data),
  );
};

export const updateBlog = async (blogId: string, blogData: TNewBlog) => {
  return apiRequest(() =>
    authAxios.patch(`/blogs/${blogId}`, blogData).then((res) => res.data),
  );
};

export const deleteBlog = async (blogId: string) => {
  return apiRequest(() =>
    authAxios.delete(`/blogs/${blogId}`).then((res) => res.data),
  );
};

export const getTags = async () => {
  return apiRequest(() => authAxios.get("/blogs/tags").then((res) => res.data));
};

export const getCategories = async () => {
  return apiRequest(() =>
    authAxios.get("/blogs/categories").then((res) => res.data),
  );
};
