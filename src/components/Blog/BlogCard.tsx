import { TBlog } from "@/interfaces/blog";
import React from "react";
import { Link } from "react-router-dom";

type BlogCardProps = {
  blog: TBlog;
};

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  const { _id, title, featuredImage, categories, totalComments, createdAt } =
    blog;

  const date = new Date(createdAt);
  const month = date.toLocaleString("default", { month: "short" });
  const day = date.getDate();

  return (
    <Link
      to={`/blogs/${_id}`}
      className="group mx-auto block max-w-sm bg-white shadow-[0_2px_10px_rgba(0,0,0,0.03)]"
    >
      <img
        src={featuredImage}
        alt={title}
        className="aspect-[4/3] w-full object-cover"
      />
      <div className="relative p-5 lg:p-10">
        <div className="flex items-center gap-2">
          <h4 className="text-[13px] font-semibold uppercase text-dark">
            {categories[0]}
          </h4>
          <span className="block size-[3px] rounded-full bg-gray-400"></span>
          <p className="text-xs text-gray-400">{totalComments} Comments</p>
        </div>
        <h2 className="mt-6 text-lg font-bold uppercase leading-tight text-gray-700 duration-200">
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
