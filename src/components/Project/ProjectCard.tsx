import { TProject } from "@/interfaces/project";
import { IoEyeOutline } from "react-icons/io5";

interface ProjectCardProps {
  project: TProject;
  handleQuickView: (project: TProject) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  handleQuickView,
}) => {
  return (
    <div className="group w-full max-w-[380px]">
      <div className="relative">
        <img
          className="h-[490px] w-full object-cover"
          src={`/images/projects/${project.image}`}
          alt={project.name}
        />
        <img
          src={`/images/projects/${project.beforeImage}`}
          alt="Before"
          className="invisible absolute left-0 top-0 h-full w-full object-cover opacity-0 duration-300 group-hover:visible group-hover:opacity-100"
        />
        <div className="absolute left-0 top-0 h-full w-full bg-black/30">
          <div className="flex h-full w-full flex-col items-start justify-between bg-[linear-gradient(to_top,#000d,#0000)] px-7 py-6">
            <div className="flex w-full items-center justify-between">
              <div className="relative h-[30px] w-20 overflow-hidden rounded-md bg-black/30 text-white backdrop-blur-sm">
                <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 duration-300 group-hover:-translate-y-10">
                  After
                </p>
                <p className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-4 duration-300 group-hover:-translate-y-1/2">
                  Before
                </p>
              </div>
              <button
                onClick={() => handleQuickView(project)}
                className="flex items-center gap-1 rounded-full bg-primary px-3 py-1.5 text-[15px] font-medium duration-200 hover:bg-[#f6ad16]"
              >
                <IoEyeOutline className="text-[19px]" />
                Quick View
              </button>
            </div>
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
  );
};

export default ProjectCard;
