import DashboardHeader from "../shared/DashboardHeader";
import BlogForm from "./BlogForm";

const NewBlog = () => {
  return (
    <div>
      <DashboardHeader title="New Blog" desc="Create a new blog post" />
      <div className="mx-auto h-[calc(100dvh-80px)] w-full overflow-y-auto">
        <div className="p-3 sm:p-5 xl:p-10">
          <BlogForm />
        </div>
      </div>
    </div>
  );
};

export default NewBlog;
