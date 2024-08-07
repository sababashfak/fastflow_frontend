import { getBlogById } from "@/api/blog";
import Loader from "@/components/shared/Loader";
import { useQuery } from "@tanstack/react-query";
import { Navigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import DashboardHeader from "../shared/DashboardHeader";
import BlogForm from "./BlogForm";

const UpdateBlog = () => {
  const { blogId } = useParams();

  const blogQuery = useQuery({
    queryKey: ["blogs", blogId],
    queryFn: () => getBlogById(blogId!),
  });

  const blog = blogQuery.data?.data?.blog || {};

  if (!blogQuery.isFetching && !blog._id) {
    toast.error("Blog not found", {
      description: "The blog you are trying to update does not exist",
    });

    return <Navigate to="/dashboard/admin/blog" />;
  }

  return (
    <div>
      <DashboardHeader title="Update Blog" desc="Update your blog post" />
      <div className="mx-auto h-[calc(100dvh-80px)] w-full overflow-y-auto">
        <div className="h-full p-3 sm:p-5 xl:p-10">
          {!blogQuery.isFetching || blog?._id ? (
            <BlogForm blog={blog} />
          ) : (
            <div className="flex h-full items-center justify-center gap-3">
              <div className="rounded-md bg-white px-20 py-10">
                <Loader />
                <p className="text-gray-500">Please wait</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpdateBlog;
