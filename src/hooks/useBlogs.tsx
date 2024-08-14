import { TBlog } from "@/interfaces/blog";

const blogs: TBlog[] = [
  {
    _id: "507f191e810c19729de860ea",
    title: "Top 5 Renovation Trends for 2024",
    categories: ["Renovation", "Trends"],
    content: "",
    featuredImage: "/images/blogs/blog-1.jpg",
    createdAt: "2024-07-15T00:00:00.000Z",
    author: "507f191e810c19729de860ea",
    publishedDate: "2024-08-01T00:00:00.000Z",
    status: "published",
  },
  {
    _id: "4b12f419b3d05b6890cce9a7",
    title: "How to Choose the Right Contractor",
    categories: ["Tips", "Guides"],
    content: "",
    featuredImage: "/images/blogs/blog-2.jpg",
    createdAt: "2024-07-15T00:00:00.000Z",
    author: "4b12f419b3d05b6890cce9a7",
    publishedDate: "2024-08-02T00:00:00.000Z",
    status: "draft",
  },
  {
    _id: "6d8e12a1c51e4c9d9f8b3e84",
    title: "Innovative Kitchen Remodeling Ideas",
    categories: ["Kitchen", "Remodeling"],
    content: "",
    featuredImage: "/images/blogs/blog-3.jpg",
    createdAt: "2024-07-15T00:00:00.000Z",
    author: "6d8e12a1c51e4c9d9f8b3e84",
    publishedDate: "2024-08-03T00:00:00.000Z",
    status: "published",
  },
  {
    _id: "5f9f0e5e94df1f6b98d0870d",
    title: "Budget-Friendly Home Renovation Ideas",
    categories: ["Budget", "Ideas"],
    content: "",
    featuredImage: "/images/blogs/blog-4.jpg",
    createdAt: "2024-07-15T00:00:00.000Z",
    author: "5f9f0e5e94df1f6b98d0870d",
    publishedDate: "2024-08-04T00:00:00.000Z",
    status: "published",
  },
  {
    _id: "8a7f219e39c04c2da89e7f95",
    title: "The Benefits of Sustainable Building Materials",
    categories: ["Sustainability", "Materials"],
    content: "",
    featuredImage: "/images/blogs/blog-5.jpg",
    createdAt: "2024-07-15T00:00:00.000Z",
    author: "8a7f219e39c04c2da89e7f95",
    publishedDate: "2024-08-05T00:00:00.000Z",
    status: "draft",
  },
  {
    _id: "9b6d0e5e94df1f6b8e09f789",
    title: "Maximizing Space in Small Homes",
    categories: ["Small Homes", "Space Management"],
    content: "",
    featuredImage: "/images/blogs/blog-6.jpg",
    createdAt: "2024-07-15T00:00:00.000Z",
    author: "9b6d0e5e94df1f6b8e09f789",
    publishedDate: "2024-08-06T00:00:00.000Z",
    status: "published",
  },
];

const useBlogs = (limit = 0) => {
  return limit > 0 ? blogs.slice(0, limit) : blogs;
};

export default useBlogs;
