import { getProjects } from "@/api/project";
import ProjectCard from "@/components/Project/ProjectCard";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { TProject } from "@/interfaces/project";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const Projects = () => {
  const [quickView, setQuickView] = useState(false);
  const [selectedProject, setSelectedProject] = useState<TProject | null>(null);

  const projectsQuery = useQuery({
    queryKey: ["projects"],
    queryFn: () => getProjects(),
  });

  const projects = projectsQuery.data?.data?.projects || [];

  const handleQuickView = (project: TProject) => {
    setSelectedProject(project);
    setQuickView(true);
  };

  const handleCloseQuickView = () => {
    setSelectedProject(null);
    setQuickView(false);
  };

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
          {projects.map((project: TProject, index: number) => (
            <ProjectCard
              key={index}
              project={project}
              handleQuickView={handleQuickView}
            />
          ))}
        </div>
        <div className="container">
          {projectsQuery.isFetching && (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[...Array(3)].map((_, index) => (
                <div className="last:hidden lg:last:block" key={index}>
                  <Skeleton className="mx-auto flex h-[460px] w-full max-w-[380px] flex-col justify-between bg-gray-300 p-6">
                    <div className="flex justify-between">
                      <Skeleton className="h-6 w-16 rounded-sm bg-gray-400" />
                      <Skeleton className="h-6 w-20 rounded-full bg-gray-400" />
                    </div>
                    <div>
                      <Skeleton className="mb-2 h-7 w-40 bg-gray-400" />
                      <Skeleton className="h-6 w-64 bg-gray-400" />
                    </div>
                  </Skeleton>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      <Dialog open={quickView} onOpenChange={handleCloseQuickView}>
        <DialogContent className="z-[99999] mt-8 w-[calc(100%-20px)] rounded-md p-0 lg:max-w-xl">
          <DialogHeader>
            <DialogTitle className="border-b px-3 py-2.5 text-left text-xl">
              {selectedProject?.name}
            </DialogTitle>
            <DialogDescription hidden />
            <div className="p-3 pt-2">
              <div className="mb-1 flex justify-between text-sm font-medium uppercase text-secondary">
                <p>Before</p>
                <p>After</p>
              </div>
              <ReactCompareSlider
                className="h-[280px] md:h-[320px] lg:h-[350px]"
                itemOne={
                  <ReactCompareSliderImage
                    src={`${import.meta.env.VITE_BACKEND_URL}/images/${selectedProject?.beforeImage}`}
                    alt={selectedProject?.name}
                    className="h-full object-cover"
                  />
                }
                itemTwo={
                  <ReactCompareSliderImage
                    src={`${import.meta.env.VITE_BACKEND_URL}/images/${selectedProject?.image}`}
                    alt={selectedProject?.name}
                    className="h-full object-cover"
                  />
                }
              />
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default Projects;
