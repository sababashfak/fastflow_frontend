import { TBlog } from "@/interfaces/blog";
import React from "react";
import { Link } from "react-router-dom";

type BlogCardProps = {
  blog: TBlog;
};

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  const { _id, title, featuredImage, categories, createdAt } = blog;

  const date = new Date(createdAt);
  const month = date.toLocaleString("default", { month: "short" });
  const day = date.getDate();

  const displayImage =
    import.meta.env.VITE_BACKEND_URL + `/images/${featuredImage}`;

  return (
    <Link
      to={`/blogs/${_id}`}
      className="group mx-auto block max-w-[400px] bg-white shadow-[0_2px_10px_rgba(0,0,0,0.03)]"
    >
      <img
        src={displayImage}
        alt={title}
        className="aspect-[4/3] w-full object-cover"
      />
      <div className="relative p-5 lg:p-10">
        <h4 className="pr-24 text-[13px] font-semibold uppercase text-dark/80 lg:pr-0">
          {categories.slice(0, 2).join(", ")}
        </h4>
        <h2 className="mt-5 text-lg font-bold uppercase leading-tight text-gray-700 duration-200">
          {title}
        </h2>

        <div className="absolute right-7 top-0 flex -translate-y-1/2 flex-col items-center gap-0.5 bg-primary px-4 py-1.5">
          <h3 className="text-3xl font-bold">{day}</h3>
          <h5 className="text-sm font-semibold uppercase tracking-wider">
            {month}
          </h5>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
