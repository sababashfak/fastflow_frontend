import { getBlogById } from "@/api/blog";
import BlogDetailsSkeleton from "@/components/Blog/BlogDetailsSkeleton";
import ScrollToPageTop from "@/components/shared/ScrollToPageTop";
import useStore from "@/store";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

const BlogDetails = () => {
  const navigate = useNavigate();
  const user = useStore((state) => state.user);
  const { blogId } = useParams();

  const blogQuery = useQuery({
    queryKey: ["blogs", blogId],
    queryFn: () => getBlogById(blogId!),
  });

  const blog = blogQuery.data?.data?.blog || {};

  useEffect(() => {
    if (!blogQuery.isFetching && !blog._id) {
      toast.error("Blog not found or deleted");
      return navigate("/blog");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blogQuery.isFetching, blog?._id]);

  if (
    !blogQuery.isFetching &&
    blog?.status === "draft" &&
    user?.role !== "admin"
  ) {
    return <Navigate to="/blog" />;
  }

  return (
    <main>
      <ScrollToPageTop />
      <section className="bg-light-bg py-12 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            {blogQuery.isFetching && !blog._id && <BlogDetailsSkeleton />}
            {(!blogQuery.isFetching || blog._id) && blogQuery.data?.success && (
              <div className="rounded-lg bg-white p-4 sm:p-6 md:p-10">
                <h1 className="mb-5 text-center text-[22px] font-semibold leading-snug sm:text-2xl md:text-3xl">
                  {blog.title}
                </h1>
                <img
                  src={`${import.meta.env.VITE_BACKEND_URL}/images/${blog.featuredImage}`}
                  alt={blog.title}
                  className="aspect-video w-full rounded-lg object-cover"
                />
                <div className="mt-4 space-y-3">
                  <p className="text-center text-lg font-medium text-gray-700">
                    {format(new Date(blog?.publishedDate), "dd MMMM yyyy")}, by{" "}
                    <span className="text-blue-500">
                      {blog.author?.name || "Admin"}
                    </span>
                  </p>
                  {blog.categories?.length > 0 && (
                    <p className="text mx-auto flex max-w-2xl flex-wrap justify-center gap-2 text-center text-sm font-medium">
                      {blog.categories?.map((t: string) => (
                        <span
                          className="rounded-full bg-blue-500 px-2.5 py-[3px] text-white"
                          key={t}
                        >
                          {t}
                        </span>
                      ))}
                    </p>
                  )}
                </div>
                <div className="blog-content mt-10">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: blog.content,
                    }}
                  ></div>
                </div>
                {blog.tags?.length > 0 && (
                  <p className="pt-5 font-medium sm:pt-7 md:text-[17px]">
                    Tags:
                    <span className="ml-2 text-blue-500">
                      {blog.tags.join(", ")}
                    </span>
                  </p>
                )}
              </div>
            )}

            {/* <BlogComments blogId={blogId} /> */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogDetails;
