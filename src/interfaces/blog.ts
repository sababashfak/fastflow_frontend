export interface TBlog {
  _id: string;
  title: string;
  categories: string[];
  content: string;
  featuredImage: string;
  totalComments: number;
  createdAt: string;
}
