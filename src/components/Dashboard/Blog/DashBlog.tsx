import { getBlogs } from "@/api/blog";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import DashboardHeader from "../shared/DashboardHeader";
import DashBlogsTable from "./DashBlogsTable";

const DashBlog = () => {
  const navigate = useNavigate();

  const blogsQuery = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });

  const blogs = blogsQuery.data?.data?.blogs || [];

  console.log(blogs);

  const handleAddBlog = () => navigate("new");

  return (
    <div>
      <DashboardHeader title={"Blog"} desc="Manage all of your blog posts" />
      <div className="h-[calc(100dvh-80px)] w-full overflow-y-auto">
        <div className="p-3 sm:p-5 xl:p-10">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-2xl font-bold">All Blogs</h2>
            <Button
              onClick={handleAddBlog}
              className="bg-secondary hover:bg-secondary/90"
            >
              Add Blog
            </Button>
          </div>
          <DashBlogsTable blogs={blogs} isFetching={blogsQuery.isFetching} />
        </div>
      </div>
    </div>
  );
};

export default DashBlog;
