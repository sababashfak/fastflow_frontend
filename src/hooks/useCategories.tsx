import {
  bathroomsSteps,
  boilerRepairSteps,
  builderSteps,
  carpenterSteps,
  centralHeatingSteps,
  drivewaysPatiosSteps,
  electricianSteps,
  fencingSteps,
  gardenerSteps,
  handymanSteps,
  landscaperSteps,
  locksmithSteps,
  painterSteps,
  plastererSteps,
  plumberSteps,
  rooferSteps,
  tilerSteps,
  treeSurgeonSteps,
} from "@/components/Category/categories";
import { TCategory } from "@/interfaces/categories";

const categories: TCategory[] = [
  {
    cat_name: "Plumber",
    cat_slug: "plumber",
    steps: plumberSteps,
  },
  {
    cat_name: "Electrician",
    cat_slug: "electrician",
    steps: electricianSteps,
  },
  {
    cat_name: "Roofer",
    cat_slug: "roofer",
    steps: rooferSteps,
  },
  {
    cat_name: "Builder",
    cat_slug: "builder",
    steps: builderSteps,
  },
  {
    cat_name: "Gardener",
    cat_slug: "gardener",
    steps: gardenerSteps,
  },
  {
    cat_name: "Painter",
    cat_slug: "painter",
    steps: painterSteps,
  },
  {
    cat_name: "Landscaper",
    cat_slug: "landscaper",
    steps: landscaperSteps,
  },
  {
    cat_name: "Carpenter",
    cat_slug: "carpenter",
    steps: carpenterSteps,
  },
  {
    cat_name: "Plasterer",
    cat_slug: "plasterer",
    steps: plastererSteps,
  },
  {
    cat_name: "Driveways / Patios",
    cat_slug: "driveways-patios",
    steps: drivewaysPatiosSteps,
  },
  {
    cat_name: "Fencing",
    cat_slug: "fencing",
    steps: fencingSteps,
  },
  {
    cat_name: "Tree Surgeon",
    cat_slug: "tree-surgeon",
    steps: treeSurgeonSteps,
  },
  {
    cat_name: "Handyman",
    cat_slug: "handyman",
    steps: handymanSteps,
  },
  {
    cat_name: "Locksmith",
    cat_slug: "locksmith",
    steps: locksmithSteps,
  },
  {
    cat_name: "Bathrooms",
    cat_slug: "bathrooms",
    steps: bathroomsSteps,
  },
  {
    cat_name: "Tiler",
    cat_slug: "tiler",
    steps: tilerSteps,
  },
  {
    cat_name: "Central Heating",
    cat_slug: "central-heating",
    steps: centralHeatingSteps,
  },
  {
    cat_name: "Boiler Repair",
    cat_slug: "boiler-repair",
    steps: boilerRepairSteps,
  },
];

const useCategories = (categorySlug?: string) => {
  if (!categorySlug) return categories;

  const filteredCategories = categories.filter(
    (category) => category.cat_slug === categorySlug,
  );

  return filteredCategories;
};

export default useCategories;
