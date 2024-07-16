import { TCategory } from "@/interfaces/categories";

const categories: TCategory[] = [
  {
    cat_name: "Plumber",
    cat_icon: "water-tap.png",
    cat_slug: "plumber",
    steps: [],
  },
  {
    cat_name: "Electrician",
    cat_icon: "flash.png",
    cat_slug: "electrician",
    steps: [],
  },
  {
    cat_name: "Roofer",
    cat_icon: "roof.png",
    cat_slug: "roofer",
    steps: [],
  },
  {
    cat_name: "Builder",
    cat_icon: "builder.png",
    cat_slug: "builder",
    steps: [],
  },
  {
    cat_name: "Gardener",
    cat_icon: "pot.png",
    cat_slug: "gardener",
    steps: [],
  },
  {
    cat_name: "Painter",
    cat_icon: "paint-roller.png",
    cat_slug: "painter",
    steps: [],
  },
  {
    cat_name: "Landscaper",
    cat_icon: "landscape.png",
    cat_slug: "landscaper",
    steps: [],
  },
  {
    cat_name: "Carpenter",
    cat_icon: "hand-saw.png",
    cat_slug: "carpenter",
    steps: [],
  },
  {
    cat_name: "Plasterer",
    cat_icon: "trowel.png",
    cat_slug: "plasterer",
    steps: [],
  },
  {
    cat_name: "Driveways / Patios",
    cat_icon: "road-sign.png",
    cat_slug: "driveways-patios",
    steps: [],
  },
  {
    cat_name: "Fencing",
    cat_icon: "fence.png",
    cat_slug: "fencing",
    steps: [],
  },
  {
    cat_name: "Tree Surgeon",
    cat_icon: "tree-silhouette.png",
    cat_slug: "tree-surgeon",
    steps: [],
  },
  {
    cat_name: "Handyman",
    cat_icon: "maintenance.png",
    cat_slug: "handyman",
    steps: [],
  },
  {
    cat_name: "Locksmith",
    cat_icon: "key-set.png",
    cat_slug: "locksmith",
    steps: [],
  },
  {
    cat_name: "Bathrooms",
    cat_icon: "bath.png",
    cat_slug: "bathrooms",
    steps: [],
  },
  {
    cat_name: "Tiler",
    cat_icon: "tiles.png",
    cat_slug: "tiler",
    steps: [],
  },
  {
    cat_name: "Central Heating",
    cat_icon: "central-heating.png",
    cat_slug: "central-heating",
    steps: [],
  },
  {
    cat_name: "Boiler Repair",
    cat_icon: "water-boiler.png",
    cat_slug: "boiler-repair",
    steps: [],
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
