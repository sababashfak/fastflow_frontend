import CustomFormField from "@/components/shared/CustomFormField";
import { Form } from "@/components/ui/form";
import { TNewProject, TProject } from "@/interfaces/project";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

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
  const isUpdate = !!project?._id;

  const [image, setImage] = useState<File | null>(null);
  const [beforeImage, setBeforeImage] = useState<string | null>(null);

  const form = useForm({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      name: project?.name || "",
      description: project?.description || "",
    },
  });

  const handleProject = async (data: TNewProject) => {
    console.log(data, image, beforeImage);

    if (!isUpdate && (!image || !beforeImage)) {
      return toast.error("Please upload before and after image");
    }
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
          />
          <CustomFormField
            label="Short Description"
            name="description"
            formControl={form.control}
            placeholder="Enter a short description"
          />
        </form>
      </Form>
    </div>
  );
};

export default ProjectForm;
