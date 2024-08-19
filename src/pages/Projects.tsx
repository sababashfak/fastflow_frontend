import ProjectCard from "@/components/Project/ProjectCard";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import useProjects from "@/hooks/useProjects";
import { TProject } from "@/interfaces/project";
import { useState } from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const Projects = () => {
  const [quickView, setQuickView] = useState(false);
  const [selectedProject, setSelectedProject] = useState<TProject | null>(null);
  const projects = useProjects();

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
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              handleQuickView={handleQuickView}
            />
          ))}
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
                    src={`/images/projects/${selectedProject?.beforeImage}`}
                    alt={selectedProject?.name}
                    className="h-full"
                  />
                }
                itemTwo={
                  <ReactCompareSliderImage
                    src={`/images/projects/${selectedProject?.image}`}
                    alt={selectedProject?.name}
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
