import { TPopularCategory } from "@/interfaces/categories";

const popularCategories: TPopularCategory[] = [
  {
    cat_name: "Plumber",
    cat_icon: "water-tap.png",
    cat_slug: "plumber",
  },
  {
    cat_name: "Gas Works",
    cat_icon: "gas.png",
    cat_slug: "gas-works",
  },
  {
    cat_name: "Electrician",
    cat_icon: "flash.png",
    cat_slug: "electrician",
  },
  {
    cat_name: "Builder",
    cat_icon: "builder.png",
    cat_slug: "builder",
  },
  {
    cat_name: "Painter",
    cat_icon: "paint-roller.png",
    cat_slug: "painter",
  },
  {
    cat_name: "Central Heating",
    cat_icon: "central-heating.png",
    cat_slug: "central-heating",
  },
  {
    cat_name: "Roofer",
    cat_icon: "roof.png",
    cat_slug: "roofer",
  },
  {
    cat_name: "Gardener",
    cat_icon: "pot.png",
    cat_slug: "gardener",
  },
  {
    cat_name: "Landscaper",
    cat_icon: "landscape.png",
    cat_slug: "landscaper",
  },
  {
    cat_name: "Carpenter",
    cat_icon: "hand-saw.png",
    cat_slug: "carpenter",
  },
  {
    cat_name: "Plasterer",
    cat_icon: "trowel.png",
    cat_slug: "plasterer",
  },
  {
    cat_name: "Driveways / Patios",
    cat_icon: "road-sign.png",
    cat_slug: "driveways-patios",
  },
  {
    cat_name: "Fencing",
    cat_icon: "fence.png",
    cat_slug: "fencing",
  },
  {
    cat_name: "Tree Surgeon",
    cat_icon: "tree-silhouette.png",
    cat_slug: "tree-surgeon",
  },
  {
    cat_name: "Handyman",
    cat_icon: "maintenance.png",
    cat_slug: "handyman",
  },
  {
    cat_name: "Bathrooms",
    cat_icon: "bath.png",
    cat_slug: "bathrooms",
  },
  {
    cat_name: "Tiler",
    cat_icon: "tiles.png",
    cat_slug: "tiler",
  },
  {
    cat_name: "Boiler Repair",
    cat_icon: "water-boiler.png",
    cat_slug: "boiler-repair",
  },
];

const usePopularCategories = () => popularCategories;

export default usePopularCategories;
