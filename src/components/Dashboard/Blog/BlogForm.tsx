import { createBlog, updateBlog } from "@/api/blog";
import { Button } from "@/components/ui/button";
import { TBlog, TNewBlog } from "@/interfaces/blog";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import BlogFormFields from "./BlogFormFields";

type BlogFormProps = {
  blog?: TBlog | null;
};

const BlogForm: React.FC<BlogFormProps> = ({ blog = null }) => {
  const [isUploading, setIsUploading] = useState(false);
  const [title, setTitle] = useState(blog?.title || "");
  const [content, setContent] = useState(blog?.content || "");
  const [featuredImage, setFeaturedImage] = useState(blog?.featuredImage || "");
  const [tags, setTags] = useState(
    blog?.tags?.map((tag) => ({ value: tag, label: tag })) || [],
  );
  const [categories, setCategories] = useState(
    blog?.categories?.map((category) => ({
      value: category,
      label: category,
    })) || [],
  );

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const postMutation = useMutation({
    mutationFn: (blogData: TNewBlog) => {
      if (!blog?._id) {
        return createBlog(blogData);
      }

      return updateBlog(blog?._id, blogData);
    },
    onSuccess: (result) => {
      if (!result.success) {
        return toast.error(result.message || "Failed to save blog post");
      }

      toast.success(result.message || "Blog post saved successfully");

      queryClient.invalidateQueries({
        queryKey: ["blogs"],
      });

      if (!blog?._id) {
        navigate("/dashboard/admin/blog");
      }
    },
  });

  const handlePostBlog = (
    e: React.MouseEvent,
    status: "draft" | "published",
  ) => {
    e.preventDefault();

    if (
      !title ||
      !content ||
      (!featuredImage && !blog?.featuredImage) ||
      !categories.length
    ) {
      return toast.error("Please fill in all of the required fields");
    }

    let publishedDate = blog?.publishedDate as string | Date;

    if (!blog?._id || (blog.status === "draft" && status === "published")) {
      publishedDate = new Date();
    }

    const blogData: TNewBlog = {
      title,
      content,
      featuredImage: (featuredImage || blog?.featuredImage) as string,
      tags: tags.map((tag) => tag.value),
      categories: categories.map((category) => category.value),
      status,
      publishedDate: publishedDate as string,
    };

    postMutation.mutate(blogData);
  };

  return (
    <div>
      <>
        <form
          className="aria-disabled:pointer-events-none aria-disabled:opacity-60"
          aria-disabled={postMutation.isPending}
        >
          <div className="mb-5 flex justify-between gap-10">
            <Button
              className="py-5"
              onClick={(e) => {
                e.preventDefault();

                navigate("../blog");
              }}
              variant="outline"
            >
              <ChevronLeft /> Go Back
            </Button>
            <div className="flex items-center gap-2">
              <Button
                onClick={(e) => handlePostBlog(e, "draft")}
                className="py-5"
                variant="outline"
                type="button"
                disabled={isUploading || postMutation.isPending}
              >
                Save Draft
              </Button>
              <Button
                onClick={(e) => handlePostBlog(e, "published")}
                className="bg-secondary py-5 hover:bg-secondary/90"
                disabled={isUploading || postMutation.isPending}
              >
                Publish
              </Button>
            </div>
          </div>
          <BlogFormFields
            tags={tags}
            setTags={setTags}
            categories={categories}
            setCategories={setCategories}
            title={title}
            setTitle={setTitle}
            content={content}
            setContent={setContent}
            featuredImage={featuredImage}
            setFeaturedImage={setFeaturedImage}
            isUploading={isUploading}
            setIsUploading={setIsUploading}
            isUpdate={!!blog?._id}
          />
        </form>
      </>
    </div>
  );
};

export default BlogForm;
