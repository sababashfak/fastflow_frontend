import { TService } from "../interfaces/service";

const services: TService[] = [
  {
    name: "Home Renovation",
    description: "Transform your home with our renovation services.",
    image: "service-1.jpg",
    slug: "home-renovation",
  },
  {
    name: "Commercial Cleaning",
    description: "Expert cleaning services for businesses.",
    image: "service-2.jpg",
    slug: "commercial-cleaning",
  },
  {
    name: "Building Management",
    description: "Comprehensive building management solutions.",
    image: "service-3.jpg",
    slug: "building-management",
  },
  {
    name: "Bathroom Redesign",
    description: "Transform your bathroom with our redesign.",
    image: "service-4.jpg",
    slug: "bathroom-redesign",
  },
  {
    name: "Kitchen Remodel",
    description: "Modernize your kitchen with our remodels.",
    image: "service-5.jpg",
    slug: "kitchen-remodel",
  },
  {
    name: "Roofing Service",
    description: "Expert roofing services for your needs.",
    image: "service-6.jpg",
    slug: "roofing-service",
  },
];

const useServices = () => services;

export default useServices;
