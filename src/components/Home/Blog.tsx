import useBlogs from "@/hooks/useBlogs";
import BlogCard from "../Blog/BlogCard";
import SectionTop from "../shared/SectionTop";

const Blog = () => {
  const blogs = useBlogs(3);

  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <SectionTop title="Our Blog" subtitle="Recent News" />
        <div className="mt-12 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] justify-center gap-6">
          {blogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
