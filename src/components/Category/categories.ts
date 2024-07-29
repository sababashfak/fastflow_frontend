import { TStep, TStepOption } from "@/interfaces/categories";

// const lastSteps = [
//   {
//     step_name: "Add a description to your job",
//     step_type: "textarea",
//     step_placeholder: "Please provide more details about your plumbing needs",
//   },
//   {
//     step_name: "Add photos to your job",
//     step_description:
//       "This will help your plumber understand your needs better",
//     step_type: "image",
//   },
// ];

// [...document.querySelectorAll(".sc-4c2e276a-11.jmjKcr button div span")].map(c => c.textContent)
const typeOfBoilers: TStepOption[] = [
  {
    option_name: "Gas",
  },
  {
    option_name: "Electric",
  },
  {
    option_name: "Oil",
  },
  {
    option_name: "Biomass",
  },
  {
    option_name: "LPG",
  },
];

const bathroomFixtures: TStepOption[] = [
  {
    option_name: "Sink, Bath or Toilet",
  },
  {
    option_name: "Tap",
  },
  {
    option_name: "Shower",
  },
];

export const plumberSteps: TStep = {
  step_name: "What do you need a plumber to help with?",
  step_options: [
    {
      option_name: "Boilers, heating & radiators",
      substeps: {
        step_name: "What does your job involve?",
        step_options: [
          {
            option_name: "Boilers",
            substeps: {
              step_name: "What does your boiler job involve?",
              step_options: [
                {
                  option_name: "Installation",
                  substeps: {
                    step_name: "What type of boiler do you need?",
                    step_options: typeOfBoilers,
                  },
                },
                {
                  option_name: "Repair/Service",
                  substeps: {
                    step_name: "What type of boiler do you have?",
                    step_options: typeOfBoilers,
                  },
                },
                {
                  option_name: "Replacement",
                  substeps: {
                    step_name: "What type of boiler do you have or need?",
                    step_options: typeOfBoilers,
                  },
                },
              ],
            },
          },
          {
            option_name: "Radiators",
            substeps: {
              step_name: "What does your radiator job involve?",
              step_options: [
                {
                  option_name: "Installation or Replacement",
                },
                {
                  option_name: "Moving Radiators",
                },
                {
                  option_name: "Repair",
                },
                {
                  option_name: "Radiator Thermostat Valves",
                },
              ],
            },
          },
          {
            option_name: "Gas Central Heating",
            substeps: {
              step_name: "What does your job involve?",
              step_options: [
                {
                  option_name: "Installation",
                },
                {
                  option_name: "Service/Repair",
                },
              ],
            },
          },
          {
            option_name: "Unvented Hot Water Cylinders",
          },
          {
            option_name: "Underfloor Heating",
            substeps: {
              step_name: "What does your job involve?",
              step_options: [
                {
                  option_name: "Installation",
                },
                {
                  option_name: "Service/Repair",
                },
              ],
            },
          },
          {
            option_name: "Thermal Dynamics",
          },
        ],
      },
    },
    {
      option_name: "Bathroom appliances & fixtures",
      option_description: "e.g. showers, baths, sinks, toilets",
      substeps: {
        step_name: "What areas of the bathroom need work?",
        step_options: [
          {
            option_name: "I have a leak",
            substeps: {
              step_name: "What is leaking in your bathroom?",
              step_options: bathroomFixtures,
            },
          },
          {
            option_name: "I need an item replaced",
            substeps: {
              step_name: "What appliance or fixture in your bathroom?",
              step_options: bathroomFixtures,
            },
          },
          {
            option_name: "I need an item repaired",
            substeps: {
              step_name: "What appliance or fixture in your bathroom?",
              step_options: bathroomFixtures,
            },
          },
          {
            option_name: "I need an item installed",
            substeps: {
              step_name: "What appliance or fixture in your bathroom?",
              step_options: bathroomFixtures,
            },
          },
          {
            option_name: "I need sealant replaced",
          },
          {
            option_name: "I need my whole bathroom fitted",
          },
        ],
      },
    },
    {
      option_name: "Kitchen appliances & fixtures",
      option_description: "e.g. cookers, dishwashers, washing machines",
      substeps: {
        step_name: "What area of the kitchen do you need help with?",
        step_options: [
          {
            option_name: "I have a leak",
          },
          {
            option_name: "I need an item installed",
          },
          {
            option_name: "I need an item replaced",
          },
          {
            option_name: "I need an appliance repaired",
            substeps: {
              step_name: "What appliance or fixture do you need repaired?",
              step_options: [
                {
                  option_name: "Sink",
                },
                {
                  option_name: "Tap",
                },
                {
                  option_name: "Washing Machine",
                },
                {
                  option_name: "Dishwasher",
                },
                {
                  option_name: "Fridge & Freezer",
                },
              ],
            },
          },
          {
            option_name: "I need my entire kitchen fitted",
          },
        ],
      },
    },
    {
      option_name: "Leaks, pipework & water pumps",
      substeps: {
        step_name: "What does your job involve?",
        step_options: [
          {
            option_name: "A Leak",
            substeps: {
              step_name: "Do you know the source of the leak?",
              step_options: [
                {
                  option_name: "Yes",
                },
                {
                  option_name: "No",
                },
              ],
            },
          },
          {
            option_name: "Pipes",
            substeps: {
              step_name: "What does your pipework job involve?",
              step_options: [
                {
                  option_name: "Installation or Alteration",
                },
                {
                  option_name: "Repair",
                },
              ],
            },
          },
          {
            option_name: "Dranage Investigation",
          },
          {
            option_name: "Water Pumps",
            substeps: {
              step_name: "What does your water pump job involve?",
              step_options: [
                {
                  option_name: "Installation or Replacement",
                },
                {
                  option_name: "Repair",
                },
              ],
            },
          },
        ],
      },
    },
    {
      option_name: "An emergency",
      substeps: {
        step_name: "What is the nature of the emergency?",
        step_description:
          "This will help get your job to the correct tradesperson",
        step_options: [
          {
            option_name: "Boiler/Central Heating",
            option_description:
              "e.g. boiler fault, central heating not working",
          },
          {
            option_name: "Plumbing",
            option_description: "e.g. emergency leaks, water issues",
          },
        ],
      },
    },
    {
      option_name: "Blockages & power flushing",
      substeps: {
        step_name: "What does your blockage involve?",
        step_options: [
          {
            option_name: "Blocked Toilets",
          },
          {
            option_name: "Drain or Sewer Clearance",
          },
          {
            option_name: "Power Flushing",
          },
          {
            option_name: "Blocked Sinks",
          },
          {
            option_name: "Blocked Drains",
          },
          {
            option_name: "Blocked Baths",
          },
        ],
      },
    },
    {
      option_name: "Outside taps",
    },
  ],
};

export const electricianSteps: TStep = {
  step_name: "What do you need an electrician to help with?",

  step_options: [
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
};

export const rooferSteps: TStep = {
  step_name: "What do you need a roofer to help with?",

  step_options: [
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
};

export const builderSteps: TStep = {
  step_name: "What do you need a builder to help with?",

  step_options: [
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
};

export const gardenerSteps: TStep = {
  step_name: "What do you need a gardener to help with?",

  step_options: [
    {
      option_name: "One-off gardening job",
    },
    {
      option_name: "Ongoing gardening jobs",
    },
  ],
};

export const painterSteps: TStep = {
  step_name: "What do you need a painter to help with?",

  step_options: [
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
};

export const landscaperSteps: TStep = {
  step_name: "What do you need a landscaper to help with?",

  step_options: [
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
};

export const carpenterSteps: TStep = {
  step_name: "What do you need a carpenter to help with?",

  step_options: [
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
};

export const plastererSteps: TStep = {
  step_name: "What do you need a plasterer to help with?",

  step_options: [
    {
      option_name: "Inside the property - plastering",
    },
    {
      option_name: "Outside the property - rendering",
    },
  ],
};

export const drivewaysPatiosSteps: TStep = {
  step_name: "What do you need help with?",

  step_options: [
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
};

export const fencingSteps: TStep = {
  step_name: "What do you need help with?",

  step_options: [
    {
      option_name: "Fencing",
    },
    {
      option_name: "Gates",
    },
  ],
};

export const treeSurgeonSteps: TStep = {
  step_name: "What do you need help with?",

  step_options: [
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
};

export const handymanSteps: TStep = {
  step_name: "What do you need help with?",

  step_options: [
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
};

export const locksmithSteps: TStep = {
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
};

// export const locksmithSteps: TStep = {
//   step_name: "Where is the lock?",

//   step_options: [
//     {
//       option_name: "Door",
//     },
//     {
//       option_name: "Window",
//     },
//     {
//       option_name: "Vehicle",
//     },
//     {
//       option_name: "Safe",
//     },
//   ],
// };

export const bathroomsSteps: TStep = {
  step_name: "What does your bathroom job involve?",

  step_options: [
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
};

export const tilerSteps: TStep = {
  step_name: "What do you need a tiler to help with?",

  step_options: [
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
};

export const centralHeatingSteps: TStep = {
  step_name: "What does your central heating job involve?",

  step_options: [
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
};

export const boilerRepairSteps: TStep = {
  step_name: "What does your boiler repair job involve?",

  step_options: [
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
};
