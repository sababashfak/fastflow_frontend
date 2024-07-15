import { TBlog } from "@/interfaces/blog";

const blogs: TBlog[] = [
  {
    _id: "d0b0e29d-5f7e-4d87-bd70-378c91eb088d",
    title: "Top 5 Renovation Trends for 2024",
    categories: ["Renovation", "Trends"],
    content: "",
    featuredImage: "/blogs/blog-1.jpg",
    createdAt: "2024-07-15T00:00:00.000Z",
  },
  {
    _id: "76b8c96d-72b6-4e79-94ed-69e8820c4d59",
    title: "How to Choose the Right Contractor",
    categories: ["Tips", "Guides"],
    content: "",
    featuredImage: "/blogs/blog-2.jpg",
    createdAt: "2024-07-15T00:00:00.000Z",
  },
  {
    _id: "e1b51b67-5c63-4a16-8d0b-40709c1a8cd6",
    title: "Innovative Kitchen Remodeling Ideas",
    categories: ["Kitchen", "Remodeling"],
    content: "",
    featuredImage: "/blogs/blog-3.jpg",
    createdAt: "2024-07-15T00:00:00.000Z",
  },
  {
    _id: "2a61d874-3e7e-4d39-9914-f212d12cfc21",
    title: "Budget-Friendly Home Renovation Ideas",
    categories: ["Budget", "Ideas"],
    content: "",
    featuredImage: "/blogs/blog-4.jpg",
    createdAt: "2024-07-15T00:00:00.000Z",
  },
  {
    _id: "c6018b6d-d539-4f3c-8b50-498bc6f9aeb5",
    title: "The Benefits of Sustainable Building Materials",
    categories: ["Sustainability", "Materials"],
    content: "",
    featuredImage: "/blogs/blog-5.jpg",
    createdAt: "2024-07-15T00:00:00.000Z",
  },
  {
    _id: "9d8cbd95-671b-4b57-bcd8-b1789fc5a1e3",
    title: "Maximizing Space in Small Homes",
    categories: ["Small Homes", "Space Management"],
    content: "",
    featuredImage: "/blogs/blog-6.jpg",
    createdAt: "2024-07-15T00:00:00.000Z",
  },
];

const useBlogs = (limit = 0) => {
  return limit > 0 ? blogs.slice(0, limit) : blogs;
};

export default useBlogs;
