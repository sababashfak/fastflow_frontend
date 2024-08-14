import useProjects from "@/hooks/useProjects";

const Projects = () => {
  const projects = useProjects();

  return (
    <main>
      <section className="bg-[url(/project-cover.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="bg-black/80 py-20">
          <div className="container text-center">
            <h3 className="text-3xl font-bold text-white lg:text-4xl">
              Recent <span className="text-primary">Projects</span>
            </h3>
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-20">
        <div className="container flex flex-wrap justify-center gap-5">
          {projects.map((project, index) => (
            <div className="w-full max-w-[380px]" key={index}>
              <div className="relative">
                <img
                  className="h-[490px] w-full object-cover"
                  src={`/images/projects/${project.image}`}
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
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Projects;
