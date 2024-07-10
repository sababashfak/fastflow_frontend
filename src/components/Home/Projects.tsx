import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import SectionTop from "../shared/SectionTop";

const Projects = () => {
  return (
    <section className="bg-[#232123] py-16 md:py-20">
      <div className="container">
        <div className="flex flex-wrap items-start justify-between gap-x-10 gap-y-2">
          <SectionTop
            title="Our Portfolio"
            subtitle="Recent Projects"
            titleClass="text-primary"
            subtitleClass="text-white"
            rightBarClass="bg-white"
            containerClass="text-left items-start"
          />
          <Link
            to="/projects"
            className="mt-6 flex items-center gap-2 border-2 border-primary px-3 py-2.5 font-semibold uppercase text-primary duration-300 hover:bg-primary hover:text-dark"
          >
            View All <FiPlus className="text-lg" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
