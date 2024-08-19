import { TProject } from "../interfaces/project";

const projects: TProject[] = [
  {
    name: "Modern Kitchen",
    description: "Sleek and contemporary design",
    image: "project-1.jpg",
    beforeImage: "project-2.jpg",
  },
  {
    name: "Cozy Living Room",
    description: "Warm and inviting space",
    image: "project-2.jpg",
  },
  {
    name: "Luxury Bathroom",
    description: "Elegant and spacious layout",
    image: "project-3.jpg",
  },
  {
    name: "Home Office",
    description: "Functional and stylish",
    image: "project-4.jpg",
  },
  {
    name: "Outdoor Patio",
    description: "Relaxing outdoor retreat",
    image: "project-5.jpg",
  },
  {
    name: "Master Bedroom",
    description: "Comfortable and luxurious",
    image: "project-6.jpg",
  },
];

const useProjects = () => projects;

export default useProjects;
