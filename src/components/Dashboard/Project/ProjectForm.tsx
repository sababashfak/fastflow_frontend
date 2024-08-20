import { createProject, updateProject } from "@/api/project";
import CustomFormField from "@/components/shared/CustomFormField";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { TNewProject, TProject, TProjectPhoto } from "@/interfaces/project";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";
import ProjectInpImage from "./ProjectInpImage";

interface ProjectFormProps {
  project?: TProject;
}

const projectSchema = z.object({
  name: z.string().min(1, {
    message: "Project name is required",
  }),
  description: z.string().min(1, {
    message: "Project description is required",
  }),
});

const ProjectForm: React.FC<ProjectFormProps> = ({ project }) => {
  const navigate = useNavigate();
  const isUpdate = !!project?._id;

  const [image, setImage] = useState<File | null>(null);
  const [beforeImage, setBeforeImage] = useState<File | null>(null);

  const form = useForm({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      name: project?.name || "",
      description: project?.description || "",
    },
  });

  const queryClient = useQueryClient();

  const projectMutation = useMutation({
    mutationFn: (data: TNewProject) => {
      if (isUpdate) {
        const photos = [];

        if (image) {
          photos.push({
            fieldName: "image",
            photo: image,
          } as TProjectPhoto);
        }

        if (beforeImage) {
          photos.push({
            fieldName: "beforeImage",
            photo: beforeImage,
          } as TProjectPhoto);
        }

        return updateProject(project._id as string, photos, data);
      } else {
        const photos = [image as File, beforeImage as File];
        return createProject(photos, data);
      }
    },
    onSuccess: (result) => {
      if (result.success) {
        toast.success(result.message);

        queryClient.invalidateQueries({
          queryKey: ["projects"],
        });

        if (!isUpdate) {
          return navigate("/dashboard/admin/projects", {
            replace: true,
          });
        }
      } else {
        toast.error(result.message || "Something went wrong");
      }
    },
  });

  const handleProject = async (data: TNewProject) => {
    if (!isUpdate && (!image || !beforeImage)) {
      return toast.error("Please upload before and after image");
    }

    projectMutation.mutate(data);
  };

  return (
    <div className="mx-auto max-w-xl rounded-md bg-white p-5 shadow-sm">
      <Form {...form}>
        <form className="space-y-4" onSubmit={form.handleSubmit(handleProject)}>
          <CustomFormField
            label="Project Name"
            name="name"
            formControl={form.control}
            placeholder="Enter a project name"
            disabled={projectMutation.isPending}
          />
          <CustomFormField
            label="Short Description"
            name="description"
            formControl={form.control}
            placeholder="Enter a short description"
            disabled={projectMutation.isPending}
          />
          <ProjectInpImage
            label="Before Image"
            image={beforeImage}
            setImage={setBeforeImage}
            defaultImage={project?.beforeImage}
            disabled={projectMutation.isPending}
          />
          <ProjectInpImage
            label="After Image"
            image={image}
            setImage={setImage}
            defaultImage={project?.image}
            disabled={projectMutation.isPending}
          />
          <Button
            type="submit"
            className="h-auto w-full bg-secondary py-3 text-base transition-all duration-300 hover:bg-secondary/90"
            disabled={projectMutation.isPending}
          >
            {projectMutation.isPending
              ? isUpdate
                ? "Updating"
                : "Adding"
              : isUpdate
                ? "Update Project"
                : "Add Project"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ProjectForm;
