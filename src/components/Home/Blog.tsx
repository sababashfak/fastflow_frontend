import { getBlogsPaginated } from "@/api/blog";
import { TBlog } from "@/interfaces/blog";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import BlogCard from "../Blog/BlogCard";
import SectionTop from "../shared/SectionTop";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";

const Blog = () => {
  const blogsQuery = useQuery({
    queryKey: ["blogs", { status: "published", limit: 3 }],
    queryFn: () => getBlogsPaginated({ status: "published", limit: 3 }),
  });

  const blogs = blogsQuery.data?.blogs || [];

  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <SectionTop title="Our Blog" subtitle="Recent News" />
        {blogsQuery.isFetching && (
          <div className="mx-auto mt-12 grid max-w-[1200px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(3)].map((_, ind) => (
              <div key={ind} className="rounded-md bg-white p-4">
                <Skeleton className="relative mb-5 aspect-[4/3] w-full">
                  <Skeleton className="absolute bottom-[-30px] right-5 h-[70px] w-16 bg-gray-300" />
                </Skeleton>
                <Skeleton className="mb-3 h-4 w-3/5" />
                <Skeleton className="h-6 w-5/6" />
              </div>
            ))}
          </div>
        )}
        {!blogsQuery.isFetching && blogs.length === 0 && (
          <div className="mt-12 rounded-lg bg-white px-5 py-14 text-center">
            <p className="text-lg font-medium text-gray-400">
              No blog post found
            </p>
          </div>
        )}
        {!blogsQuery.isFetching && blogs.length !== 0 && (
          <div className="mt-12 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] justify-center gap-6">
            {blogs.map((blog: TBlog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
          </div>
        )}
        {blogs.length > 0 && (
          <div className="mt-7 flex justify-center">
            <Button
              className="= mx-auto h-12 rounded-none bg-primary font-semibold text-dark duration-300 hover:bg-dark hover:text-white md:h-14 md:px-5 md:text-base"
              asChild
            >
              <Link to="/blogs">Read All Blogs</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
