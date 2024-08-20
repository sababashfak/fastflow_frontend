import {
  TNewProject,
  TProjectPhoto,
  TProjectUpdate,
} from "@/interfaces/project";
import authAxios from "@/lib/authAxios";
import apiRequest from "./apiRequest";
import { uploadMultiple } from "./upload";

export const createProject = async (
  photos: File[],
  projectData: TNewProject,
) => {
  const photoResult = await uploadMultiple(photos);

  if (!photoResult.success) {
    return photoResult;
  }

  const formData = {
    ...projectData,
    image: photoResult.data.files[0].filename,
    beforeImage: photoResult.data.files[1].filename,
  };

  return apiRequest(() =>
    authAxios.post("/projects", formData).then((res) => res.data),
  );
};

export const getProjects = async (query?: any) => {
  return apiRequest(() =>
    authAxios.get("/projects", { params: query }).then((res) => res.data),
  );
};

export const getProjectById = async (projectId: string) => {
  return apiRequest(() =>
    authAxios.get(`/projects/${projectId}`).then((res) => res.data),
  );
};

export const updateProject = async (
  projectId: string,
  photos: TProjectPhoto[],
  projectData: TProjectUpdate,
) => {
  const formData = { ...projectData };

  let photoResult;

  if (photos.length > 0) {
    photoResult = await uploadMultiple(photos.map((photo) => photo.photo));

    if (!photoResult.success) {
      return photoResult;
    }

    if (photos.length === 1) {
      formData[photos[0].fieldName] = photoResult.data.files[0].filename;
    } else {
      formData.image = photoResult.data.files[0].filename;
      formData.beforeImage = photoResult.data.files[1].filename;
    }
  } else {
    delete formData.image;
    delete formData.beforeImage;
  }

  return apiRequest(() =>
    authAxios.patch(`/projects/${projectId}`, formData).then((res) => res.data),
  );
};

export const deleteProject = async (projectId: string) => {
  return apiRequest(() =>
    authAxios.delete(`/projects/${projectId}`).then((res) => res.data),
  );
};
