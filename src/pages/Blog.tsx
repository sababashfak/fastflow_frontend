import { getBlogsPaginated } from "@/api/blog";
import BlogCard from "@/components/Blog/BlogCard";
import Pagination from "@/components/shared/Pagination";
import ScrollToPageTop from "@/components/shared/ScrollToPageTop";
import { Skeleton } from "@/components/ui/skeleton";
import { TBlog } from "@/interfaces/blog";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

const Blog = () => {
  const [searchParams] = useSearchParams({
    page: "1",
    limit: "10",
  });

  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "10");

  const blogsQuery = useQuery({
    queryKey: ["blogs", { status: "published", page, limit }],
    queryFn: () => getBlogsPaginated({ status: "published", page, limit }),
  });

  const blogs = blogsQuery.data?.blogs || [];
  const totalPages = blogsQuery.data?.totalPages || 1;

  return (
    <main>
      <ScrollToPageTop />
      <section className="bg-[url(/blog-cover.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="bg-black/80 py-20">
          <div className="container text-center">
            <h1 className="text-3xl font-bold text-white lg:text-4xl">
              Blog <span className="text-primary">Posts</span>
            </h1>
          </div>
        </div>
      </section>
      <section className="bg-light-bg min-h-[calc(100vh-280px)] py-12 md:py-16">
        <div className="container">
          {blogsQuery.isFetching && (
            <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
            <div className="rounded-lg bg-white px-5 py-14 text-center">
              <p className="text-lg font-medium text-gray-400">
                No blog post found
              </p>
            </div>
          )}
          {!blogsQuery.isFetching && blogs.length !== 0 && (
            <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] justify-center gap-6 lg:grid-cols-3">
              {blogs.map((blog: TBlog) => (
                <BlogCard key={blog._id} blog={blog} />
              ))}
            </div>
          )}
          {blogs.length !== 0 && (
            <Pagination
              hasPrevPage={page > 1}
              hasNextPage={page < totalPages}
              lastPage={totalPages}
              isFetching={blogsQuery.isFetching}
              currentPage={page}
            />
          )}
        </div>
      </section>
    </main>
  );
};

export default Blog;
