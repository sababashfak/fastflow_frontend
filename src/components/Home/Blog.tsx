import useBlogs from "@/hooks/useBlogs";
import { Link } from "react-router-dom";
import BlogCard from "../Blog/BlogCard";
import SectionTop from "../shared/SectionTop";
import { Button } from "../ui/button";

const Blog = () => {
  const blogs = useBlogs(3);

  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <SectionTop title="Our Blog" subtitle="Recent News" />
        <div className="mt-12 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] justify-center gap-6">
          {blogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
        <div className="mt-7 flex justify-center">
          <Button
            className="= mx-auto h-12 rounded-none bg-primary font-semibold text-dark duration-300 hover:bg-dark hover:text-white md:h-14 md:px-5 md:text-base"
            asChild
          >
            <Link to="/blogs">Read All Blogs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
