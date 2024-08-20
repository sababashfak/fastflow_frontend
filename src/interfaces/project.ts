export interface TProject {
  _id?: string;
  name: string;
  description: string;
  image: string;
  beforeImage?: string;
}

export interface TNewProject {
  name: string;
  description: string;
}

export interface TProjectUpdate {
  name: string;
  description: string;
  image?: string;
  beforeImage?: string;
}

export interface TProjectPhoto {
  photo: File;
  fieldName: "image" | "beforeImage";
}
