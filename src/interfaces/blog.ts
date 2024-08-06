export interface TBlog {
  _id: string;
  author: string;
  title: string;
  tags?: string[];
  categories: string[];
  content: string;
  featuredImage: string;
  status: "draft" | "published";
  publishedDate: string;
  createdAt: string;
}

export type TNewBlog = Omit<TBlog, "_id" | "createdAt" | "author">;
