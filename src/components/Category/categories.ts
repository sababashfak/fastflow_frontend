import { TStep } from "@/interfaces/categories";

// [...document.querySelectorAll(".sc-4c2e276a-11.jmjKcr button div span")].map(c => c.textContent)

export const plumberSteps: TStep[] = [
  {
    step_name: "What do you need a plumber to help with?",
    step_type: "radio",
    step_option: [
      {
        option_name: "Boilers, heating & radiators",
      },
      {
        option_name: "Bathroom appliances & fixtures",
        option_description: "e.g. showers, baths, sinks, toilets",
      },
      {
        option_name: "Kitchen appliances & fixtures",
        option_description: "e.g. cookers, dishwashers, washing machines",
      },
      {
        option_name: "Leaks, pipework & water pumps",
      },
      {
        option_name: "An emergency",
      },
      {
        option_name: "Blockages & power flushing",
      },
      {
        option_name: "Outside taps",
      },
    ],
  },
  {
    step_name: "Add a description to your job",
    step_type: "textarea",
    step_placeholder: "Please provide more details about your plumbing needs",
  },
  {
    step_name: "Add photos to your job",
    step_description:
      "This will help your plumber understand your needs better",
    step_type: "image",
  },
];

export const electricianSteps: TStep[] = [
  {
    step_name: "What do you need an electrician to help with?",
    step_type: "radio",
    step_option: [
      {
        option_name: "Appliance & fixtures",
      },
      {
        option_name: "Fuseboards, sockets & wiring",
      },
      {
        option_name: "Boilers, heating & radiators",
      },
      {
        option_name: "Lighting",
      },
      {
        option_name: "Safety checks & certificates",
      },
      {
        option_name: "Emergency issue",
      },
      {
        option_name: "Alarms & security",
      },
      {
        option_name: "Electric vehicle charging",
      },
    ],
  },
  {
    step_name: "Add a description to your job",
    step_type: "textarea",
    step_placeholder: "Please provide more details about your electrical needs",
  },
  {
    step_name: "Add photos to your job",
    step_description:
      "This will help your electrician understand your needs better",
    step_type: "image",
  },
];

export const rooferSteps: TStep[] = [
  {
    step_name: "What do you need a roofer to help with?",
    step_type: "radio",
    step_option: [
      {
        option_name: "Roofs",
      },
      {
        option_name: "Roof inspection report",
      },
      {
        option_name: "Gutters, fascias & soffits",
      },
      {
        option_name: "Chimneys",
      },
      {
        option_name: "Cleaning",
      },
      {
        option_name: "Damp proofing",
      },
      {
        option_name: "Emergency issue",
      },
      {
        option_name: "Metal & leadwork",
      },
      {
        option_name: "Dry ridges & verges",
      },
      {
        option_name: "Roof lights",
      },
      {
        option_name: "Dormer or roof windows",
      },
    ],
  },
  {
    step_name: "Add a description to your job",
    step_type: "textarea",
    step_placeholder: "Please provide more details about your roofing needs",
  },
  {
    step_name: "Add photos to your job",
    step_description: "This will help your roofer understand your needs better",
    step_type: "image",
  },
];

export const builderSteps: TStep[] = [
  {
    step_name: "What do you need a builder to help with?",
    step_type: "radio",
    step_option: [
      {
        option_name: "Work inside the property",
      },
      {
        option_name: "Work outside the property",
      },
      {
        option_name: "Extension or conversion",
      },
      {
        option_name: "Building a house",
      },
      {
        option_name: "Listed, period or heritage property",
      },
      {
        option_name: "Outbuildings",
      },
      {
        option_name: "Planning, design & support",
      },
    ],
  },
  {
    step_name: "Add a description to your job",
    step_type: "textarea",
    step_placeholder: "Please provide more details about your building needs",
  },
  {
    step_name: "Add photos to your job",
    step_description:
      "This will help your builder understand your needs better",
    step_type: "image",
  },
];

export const gardenerSteps: TStep[] = [
  {
    step_name: "What do you need a gardener to help with?",
    step_type: "radio",
    step_option: [
      {
        option_name: "One-off gardening job",
      },
      {
        option_name: "Ongoing gardening jobs",
      },
    ],
  },
  {
    step_name: "Add a description to your job",
    step_type: "textarea",
    step_placeholder: "Please provide more details about your gardening needs",
  },
  {
    step_name: "Add photos to your job",
    step_description:
      "This will help your gardener understand your needs better",
    step_type: "image",
  },
];

export const painterSteps: TStep[] = [
  {
    step_name: "What do you need a painter to help with?",
    step_type: "radio",
    step_option: [
      {
        option_name: "Painting",
      },
      {
        option_name: "Wallpapering",
      },
      {
        option_name: "Plastering",
      },
      {
        option_name: "Carpentry",
      },
      {
        option_name: "Stripping and repainting",
      },
      {
        option_name: "Tiling",
      },
    ],
  },
  {
    step_name: "Add a description to your job",
    step_type: "textarea",
    step_placeholder: "Please provide more details about your painting needs",
  },
  {
    step_name: "Add photos to your job",
    step_description:
      "This will help your painter understand your needs better",
    step_type: "image",
  },
];

export const landscaperSteps: TStep[] = [
  {
    step_name: "What do you need a landscaper to help with?",
    step_type: "radio",
    step_option: [
      {
        option_name: "Garden design",
      },
      {
        option_name: "Hard landscaping",
      },
      {
        option_name: "Buildings or structures",
      },
      {
        option_name: "Lawns & greens",
      },
      {
        option_name: "Decking",
      },
      {
        option_name: "Ponds, water features & systems",
      },
      {
        option_name: "Gardening",
      },
      {
        option_name: "Grounds maintenance",
      },
      {
        option_name: "Tree planting",
      },
      {
        option_name: "Sensory gardens",
      },
    ],
  },
  {
    step_name: "Add a description to your job",
    step_type: "textarea",
    step_placeholder:
      "Please provide more details about your landscaping needs",
  },
  {
    step_name: "Add photos to your job",
    step_description:
      "This will help your landscaper understand your needs better",
    step_type: "image",
  },
];

export const carpenterSteps: TStep[] = [
  {
    step_name: "What do you need a carpenter to help with?",
    step_type: "radio",
    step_option: [
      {
        option_name: "Windows & doors",
      },
      {
        option_name: "Furniture, cupboards & shelves",
      },
      {
        option_name: "Kitchens",
      },
      {
        option_name: "Flooring & skirting",
      },
      {
        option_name: "Staircases",
      },
      {
        option_name: "Fencing & gates",
      },
      {
        option_name: "Outdoor structures & roofing",
      },
      {
        option_name: "Other/I'm not sure",
      },
    ],
  },
  {
    step_name: "Add a description to your job",
    step_type: "textarea",
    step_placeholder: "Please provide more details about your carpentry needs",
  },
  {
    step_name: "Add photos to your job",
    step_description:
      "This will help your carpenter understand your needs better",
    step_type: "image",
  },
];

export const plastererSteps: TStep[] = [
  {
    step_name: "What do you need a plasterer to help with?",
    step_type: "radio",
    step_option: [
      {
        option_name: "Inside the property - plastering",
      },
      {
        option_name: "Outside the property - rendering",
      },
    ],
  },
  {
    step_name: "Add a description to your job",
    step_type: "textarea",
    step_placeholder: "Please provide more details about your plastering needs",
  },
  {
    step_name: "Add photos to your job",
    step_description:
      "This will help your plasterer understand your needs better",
    step_type: "image",
  },
];

export const drivewaysPatiosSteps: TStep[] = [
  {
    step_name: "What do you need help with?",
    step_type: "radio",
    step_option: [
      {
        option_name: "Driveways",
      },
      {
        option_name: "Patios or paving",
      },
      {
        option_name: "Soakaways",
      },
    ],
  },
  {
    step_name: "Add a description to your job",
    step_type: "textarea",
    step_placeholder:
      "Please provide more details about your driveway or patio needs",
  },
  {
    step_name: "Add photos to your job",
    step_description: "This will help your us understand your needs better",
    step_type: "image",
  },
];

export const fencingSteps: TStep[] = [
  {
    step_name: "What do you need help with?",
    step_type: "radio",
    step_option: [
      {
        option_name: "Fencing",
      },
      {
        option_name: "Gates",
      },
    ],
  },
  {
    step_name: "Add a description to your job",
    step_type: "textarea",
    step_placeholder: "Please provide more details about your fencing needs",
  },
  {
    step_name: "Add photos to your job",
    step_description: "This will help your us understand your needs better",
    step_type: "image",
  },
];

export const treeSurgeonSteps: TStep[] = [
  {
    step_name: "What do you need help with?",
    step_type: "radio",
    step_option: [
      {
        option_name: "Tree felling",
      },
      {
        option_name: "Tree pruning",
      },
      {
        option_name: "Stump grinding",
      },
    ],
  },
  {
    step_name: "Add a description to your job",
    step_type: "textarea",
    step_placeholder:
      "Please provide more details about your tree surgeon needs",
  },
  {
    step_name: "Add photos to your job",
    step_description: "This will help your us understand your needs better",
    step_type: "image",
  },
];

export const handymanSteps: TStep[] = [
  {
    step_name: "What do you need help with?",
    step_type: "radio",
    step_option: [
      {
        option_name: "General maintenance",
      },
      {
        option_name: "Flat pack furniture assembly",
      },
      {
        option_name: "Hanging pictures & shelves",
      },
      {
        option_name: "Curtain poles & blinds",
      },
      {
        option_name: "TV wall mounting",
      },
    ],
  },
  {
    step_name: "Add a description to your job",
    step_type: "textarea",
    step_placeholder: "Please provide more details about your handyman needs",
  },
  {
    step_name: "Add photos to your job",
    step_description: "This will help your us understand your needs better",
    step_type: "image",
  },
];

export const locksmithSteps: TStep[] = [
  {
    step_name: "Where is the lock?",
    step_type: "radio",
    step_option: [
      {
        option_name: "Door",
      },
      {
        option_name: "Window",
      },
      {
        option_name: "Vehicle",
      },
      {
        option_name: "Safe",
      },
    ],
  },
  {
    step_name: "Add a description to your job",
    step_type: "textarea",
    step_placeholder: "Please provide more details about your locksmith needs",
  },
  {
    step_name: "Add photos to your job",
    step_description: "This will help your us understand your needs better",
    step_type: "image",
  },
];

export const bathroomsSteps: TStep[] = [
  {
    step_name: "What does your bathroom job involve?",
    step_type: "radio",
    step_option: [
      {
        option_name: "Bathroom refit",
        option_description: "fitting a brand new bathroom",
      },
      {
        option_name: "Bathroom fixtures",
        option_description: "e.g. showers, baths, sinks, toilets, etc.",
      },
      {
        option_name: "Plumbing or heating",
        option_description: "e.g. radiators, blockages, etc.",
      },
      {
        option_name: "Tiling",
      },
      {
        option_name: "Bathroom design",
      },
      {
        option_name: "Sealant",
      },
    ],
  },
  {
    step_name: "Add a description to your job",
    step_type: "textarea",
    step_placeholder: "Please provide more details about your bathroom needs",
  },
  {
    step_name: "Add photos to your job",
    step_description: "This will help your us understand your needs better",
    step_type: "image",
  },
];

export const tilerSteps: TStep[] = [
  {
    step_name: "What do you need a tiler to help with?",
    step_type: "radio",
    step_option: [
      {
        option_name: "Fit new or replace tiles",
      },
      {
        option_name: "Repair tiles",
      },
      {
        option_name: "Fit appliances/fixtures as well as tiling",
      },
    ],
  },
  {
    step_name: "Add a description to your job",
    step_type: "textarea",
    step_placeholder: "Please provide more details about your tiler needs",
  },
  {
    step_name: "Add photos to your job",
    step_description: "This will help your us understand your needs better",
    step_type: "image",
  },
];

export const centralHeatingSteps: TStep[] = [
  {
    step_name: "What does your central heating job involve?",
    step_type: "radio",
    step_option: [
      {
        option_name: "Boilers",
      },
      {
        option_name: "Heating & radiators",
      },
      {
        option_name: "Emergency issue",
      },
      {
        option_name: "Smart thermostats",
      },
      {
        option_name: "Gas safety checks",
      },
      {
        option_name: "Heat pumps",
      },
      {
        option_name: "Gas cookers",
      },
      {
        option_name: "Solid fuel",
      },
    ],
  },
  {
    step_name: "Add a description to your job",
    step_type: "textarea",
    step_placeholder:
      "Please provide more details about your central heating needs",
  },
  {
    step_name: "Add photos to your job",
    step_description: "This will help your us understand your needs better",
    step_type: "image",
  },
];

export const boilerRepairSteps: TStep[] = [
  {
    step_name: "What does your boiler repair job involve?",
    step_type: "radio",
    step_option: [
      {
        option_name: "Boiler installation",
        option_description: "e.g. new boiler installation",
      },
      {
        option_name: "Boiler repair",
      },
      {
        option_name: "Gas safety check",
      },
      {
        option_name: "Smart thermostat installation",
      },
      {
        option_name: "Heat pump installation",
      },
    ],
  },
  {
    step_name: "Add a description to your job",
    step_type: "textarea",
    step_placeholder:
      "Please provide more details about your boiler repair needs",
  },
  {
    step_name: "Add photos to your job",
    step_description: "This will help your us understand your needs better",
    step_type: "image",
  },
];
