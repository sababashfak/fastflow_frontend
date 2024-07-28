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
    cat_icon: "water-tap.png",
    cat_slug: "plumber",
    steps: plumberSteps,
  },
  {
    cat_name: "Electrician",
    cat_icon: "flash.png",
    cat_slug: "electrician",
    steps: electricianSteps,
  },
  {
    cat_name: "Roofer",
    cat_icon: "roof.png",
    cat_slug: "roofer",
    steps: rooferSteps,
  },
  {
    cat_name: "Builder",
    cat_icon: "builder.png",
    cat_slug: "builder",
    steps: builderSteps,
  },
  {
    cat_name: "Gardener",
    cat_icon: "pot.png",
    cat_slug: "gardener",
    steps: gardenerSteps,
  },
  {
    cat_name: "Painter",
    cat_icon: "paint-roller.png",
    cat_slug: "painter",
    steps: painterSteps,
  },
  {
    cat_name: "Landscaper",
    cat_icon: "landscape.png",
    cat_slug: "landscaper",
    steps: landscaperSteps,
  },
  {
    cat_name: "Carpenter",
    cat_icon: "hand-saw.png",
    cat_slug: "carpenter",
    steps: carpenterSteps,
  },
  {
    cat_name: "Plasterer",
    cat_icon: "trowel.png",
    cat_slug: "plasterer",
    steps: plastererSteps,
  },
  {
    cat_name: "Driveways / Patios",
    cat_icon: "road-sign.png",
    cat_slug: "driveways-patios",
    steps: drivewaysPatiosSteps,
  },
  {
    cat_name: "Fencing",
    cat_icon: "fence.png",
    cat_slug: "fencing",
    steps: fencingSteps,
  },
  {
    cat_name: "Tree Surgeon",
    cat_icon: "tree-silhouette.png",
    cat_slug: "tree-surgeon",
    steps: treeSurgeonSteps,
  },
  {
    cat_name: "Handyman",
    cat_icon: "maintenance.png",
    cat_slug: "handyman",
    steps: handymanSteps,
  },
  {
    cat_name: "Locksmith",
    cat_icon: "key-set.png",
    cat_slug: "locksmith",
    steps: {
      step_name: "What do you need help with?",
      step_options: [
        {
          option_name: "Lock installation",
        },
        {
          option_name: "Lock repair",
        },
        {
          option_name: "Key cutting",
        },
      ],
    },
  },
  {
    cat_name: "Bathrooms",
    cat_icon: "bath.png",
    cat_slug: "bathrooms",
    steps: bathroomsSteps,
  },
  {
    cat_name: "Tiler",
    cat_icon: "tiles.png",
    cat_slug: "tiler",
    steps: tilerSteps,
  },
  {
    cat_name: "Central Heating",
    cat_icon: "central-heating.png",
    cat_slug: "central-heating",
    steps: centralHeatingSteps,
  },
  {
    cat_name: "Boiler Repair",
    cat_icon: "water-boiler.png",
    cat_slug: "boiler-repair",
    steps: boilerRepairSteps,
  },
];

const useCategories = (withoutSteps?: boolean, categorySlug?: string) => {
  let filteredCategories = categories;

  if (categorySlug) {
    filteredCategories = categories.filter(
      (category) => category.cat_slug === categorySlug,
    );
  }

  if (!withoutSteps) {
    return filteredCategories;
  }

  return filteredCategories.map((category) => {
    return {
      cat_name: category.cat_name,
      cat_icon: category.cat_icon,
      cat_slug: category.cat_slug,
      steps: [],
    };
  });
};

export default useCategories;
