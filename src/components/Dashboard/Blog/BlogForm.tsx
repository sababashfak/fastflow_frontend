import { createBlog, updateBlog } from "@/api/blog";
import { TBlog, TNewBlog } from "@/interfaces/blog";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  });

  return <div>BlogForm</div>;
};

export default BlogForm;
