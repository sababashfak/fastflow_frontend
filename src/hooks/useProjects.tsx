import { TProject } from "../interfaces/project";

const projects: TProject[] = [
  {
    name: "Modern Kitchen",
    description: "Sleek and contemporary design",
    image: "project-1.jpg",
    link: "modern-kitchen",
  },
  {
    name: "Cozy Living Room",
    description: "Warm and inviting space",
    image: "project-2.jpg",
    link: "cozy-living-room",
  },
  {
    name: "Luxury Bathroom",
    description: "Elegant and spacious layout",
    image: "project-3.jpg",
    link: "luxury-bathroom",
  },
  {
    name: "Home Office",
    description: "Functional and stylish",
    image: "project-4.jpg",
    link: "home-office",
  },
  {
    name: "Outdoor Patio",
    description: "Relaxing outdoor retreat",
    image: "project-5.jpg",
    link: "outdoor-patio",
  },
  {
    name: "Master Bedroom",
    description: "Comfortable and luxurious",
    image: "project-6.jpg",
    link: "master-bedroom",
  },
];

const useProjects = () => projects;

export default useProjects;
