import {
  architecturalSteps,
  bathroomsSteps,
  boilerRepairSteps,
  bricklayingSteps,
  builderSteps,
  carpenterSteps,
  centralHeatingSteps,
  chimneySteps,
  conservatorySteps,
  dampProofingSteps,
  drivewaysPatiosSteps,
  electricianSteps,
  fasciasSoffitsSteps,
  fencingSteps,
  gardenerSteps,
  gasWorkSteps,
  groundworkSteps,
  handymanSteps,
  insulationSteps,
  kitchenFitiingSteps,
  landscaperSteps,
  locksmithSteps,
  loftConversionsteps,
  newBuildSteps,
  painterSteps,
  plastererSteps,
  plumberSteps,
  refurbishmentSteps,
  rooferSteps,
  securitySystemSteps,
  stonemasonrySteps,
  tilerSteps,
  treeSurgeonSteps,
  windowDoorSteps,
} from "@/components/Category/categories";
import { TCategory } from "@/interfaces/categories";

const categories: TCategory[] = [
  {
    cat_name: "Architectural Services",
    cat_slug: "architectural-services",
    steps: architecturalSteps,
  },
  {
    cat_name: "Bricklaying & Repointing",
    cat_slug: "bricklaying-repointing",
    steps: bricklayingSteps,
  },
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
  {
    cat_name: "Chimney & Fireplace",
    cat_slug: "chimney-fireplace",
    steps: chimneySteps,
  },
  {
    cat_name: "Conservatories",
    cat_slug: "conservatories",
    steps: conservatorySteps,
  },
  {
    cat_name: "Damp Proofing",
    cat_slug: "damp-proofing",
    steps: dampProofingSteps,
  },
  {
    cat_name: "Fascias, Soffits & Guttering",
    cat_slug: "fascias-soffits-guttering",
    steps: fasciasSoffitsSteps,
  },
  {
    cat_name: "Gas Works",
    cat_slug: "gas-works",
    steps: gasWorkSteps,
  },
  {
    cat_name: "Groundwork & Foundations",
    cat_slug: "groundwork-foundations",
    steps: groundworkSteps,
  },
  {
    cat_name: "Insulation",
    cat_slug: "insulation",
    steps: insulationSteps,
  },
  {
    cat_name: "Kitchen Fitting",
    cat_slug: "kitchen-fitting",
    steps: kitchenFitiingSteps,
  },
  {
    cat_name: "Loft Conversion",
    cat_slug: "loft-conversion",
    steps: loftConversionsteps,
  },
  {
    cat_name: "New Build",
    cat_slug: "new-build",
    steps: newBuildSteps,
  },
  {
    cat_name: "Restoration & Refurbishment",
    cat_slug: "restoration-refurbishment",
    steps: refurbishmentSteps,
  },
  {
    cat_name: "Security Systems",
    cat_slug: "security-systems",
    steps: securitySystemSteps,
  },
  {
    cat_name: "Stonemasonry",
    cat_slug: "stonemasonry",
    steps: stonemasonrySteps,
  },
  {
    cat_name: "Windows & Door Fitting",
    cat_slug: "windows-door-fitting",
    steps: windowDoorSteps,
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
