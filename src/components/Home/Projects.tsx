import { getProjects } from "@/api/project";
import { TProject } from "@/interfaces/project";
import { useQuery } from "@tanstack/react-query";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Loader from "../shared/Loader";
import SectionTop from "../shared/SectionTop";

const Projects = () => {
  const projectsQuery = useQuery({
    queryKey: ["projects"],
    queryFn: () =>
      getProjects({
        limit: 6,
      }),
  });

  const projects = projectsQuery.data?.data?.projects || [];

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
        <div className="mt-12">
          {!projectsQuery.isFetching && projects.length > 0 && (
            <Swiper
              modules={[Autoplay]}
              spaceBetween="20px"
              slidesPerView={"auto"}
              loop={true}
              speed={1000}
              autoplay={{ delay: 5000 }}
            >
              {projects.map((project: TProject, index: number) => (
                <SwiperSlide className="max-w-[380px]" key={index}>
                  <div className="relative">
                    <img
                      className="h-[490px] w-full object-cover"
                      src={`${import.meta.env.VITE_BACKEND_URL}/images/${project.image}`}
                      alt={project.name}
                    />
                    <div className="absolute left-0 top-0 h-full w-full bg-black/30">
                      <div className="flex h-full w-full flex-col items-start justify-between bg-[linear-gradient(to_top,#000d,#0000)] px-8 py-6">
                        <h4 className="bg-black/30 p-1.5 text-xl font-bold text-white backdrop-blur-md">
                          0{index + 1}.
                        </h4>
                        <div>
                          <h2 className="mb-3 text-2xl font-semibold uppercase tracking-tight text-white">
                            {project.name}
                          </h2>
                          <p className="text-white/80">{project.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
          {!projectsQuery.isFetching && projects.length === 0 && (
            <p className="pt-8 text-center text-gray-300">No projects found</p>
          )}
          {projectsQuery.isFetching && (
            <div className="flex flex-col items-center justify-center gap-2 pt-8">
              <Loader />
              <p className="text-gray-300">Loading projects</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
