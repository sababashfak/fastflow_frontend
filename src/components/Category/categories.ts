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
      option_description: "e.g. cookers, showers, ovens, washinf machines",
      substeps: {
        step_name: "What do you need help with?",
        step_options: [
          {
            option_name: "Electric Cookers or Stoves",
          },
          {
            option_name: "Electric Showers",
          },
          {
            option_name: "Electric Oven or Cooker",
          },
          {
            option_name: "Washing Machine",
          },
          {
            option_name: "Electric Range Cookers",
          },
        ],
      },
    },
    {
      option_name: "Fuseboards, sockets & wiring",
      substeps: {
        step_name: "What does your wiring job involve?",
        step_options: [
          {
            option_name: "Rewires",
          },
          {
            option_name: "Fuseboards or consumer units",
            substeps: {
              step_name: "Do you need it installed or repaired?",
              step_options: [
                {
                  option_name: "Installed or replaced",
                },
                {
                  option_name: "Repair",
                },
              ],
            },
          },
          {
            option_name: "Fault finding",
          },
          {
            option_name: "Sockets",
          },
          {
            option_name: "Hot tub wiring",
          },
        ],
      },
    },
    {
      option_name: "Boilers, heating & radiators",
      substeps: {
        step_name: "What heating appliance do you need help with?",
        step_options: [
          {
            option_name: "Electric heating",
          },
          {
            option_name: "Smart thermostats",
          },
          {
            option_name: "Electric boilers",
            substeps: {
              step_name: "What does your electric boiler job involve?",
              step_options: [
                {
                  option_name: "Installation or Replacement",
                },
                {
                  option_name: "Servicing or Repair",
                },
              ],
            },
          },
          {
            option_name: "Storage heaters",
          },
          {
            option_name: "Electric underfloor heating",
            substeps: {
              step_name: "Do you need it installed or repaired?",
              step_options: [
                {
                  option_name: "Installed or replaced",
                },
                {
                  option_name: "Repaired",
                },
              ],
            },
          },
          {
            option_name: "Immersion heating",
          },
          {
            option_name: "Electric radiators",
          },
        ],
      },
    },
    {
      option_name: "Lighting",
      substeps: {
        step_name: "What type of lighting do you need help with?",
        step_options: [
          {
            option_name: "LED lighting",
          },
          {
            option_name: "Garden lighting",
          },
          {
            option_name: "Lighting design",
          },
          {
            option_name: "Emergency lighting",
          },
          {
            option_name: "Energy efficient lighting",
          },
        ],
      },
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

const typeOfRoof: TStepOption[] = [
  {
    option_name: "Porch or outhouse",
  },
  {
    option_name: "Garage, extension, or part of the house",
  },
  {
    option_name: "Whole house",
  },
];

const propertyOwnership: TStepOption[] = [
  {
    option_name: "Yes",
    substeps: {
      step_name: "What type of roof is it?",
      step_options: typeOfRoof,
    },
  },
  {
    option_name: "No, I'm a prospective buyer",
  },
  {
    option_name: "No, I am posting this on the owner's behalf",
    substeps: {
      step_name: "What type of roof is it?",
      step_options: typeOfRoof,
    },
  },
];

export const rooferSteps: TStep = {
  step_name: "What roofing service do you require?",
  step_options: [
    {
      option_name: "New or replacement roof",
      substeps: {
        step_name: "What type of roof do you need?",
        step_options: [
          {
            option_name: "Pitched roof",
            substeps: {
              step_name: "Do you own the property?",
              step_options: propertyOwnership,
            },
          },
          {
            option_name: "Flat roof",
            substeps: {
              step_name: "What material do you want for the new roof?",
              step_options: [
                {
                  option_name: "GRP (fibreglass)",
                  substeps: {
                    step_name: "Do you own the property?",
                    step_options: propertyOwnership,
                  },
                },
                {
                  option_name: "EPDM (rubber membrane)",
                  substeps: {
                    step_name: "Do you own the property?",
                    step_options: propertyOwnership,
                  },
                },
                {
                  option_name: "Felt or bitumen",
                  substeps: {
                    step_name: "Do you own the property?",
                    step_options: propertyOwnership,
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      option_name: "Roof repair or assessment",
      substeps: {
        step_name: "What type of roof is it?",
        step_options: [
          {
            option_name: "Pitched roof",
            substeps: {
              step_name: "What can a roofer help you with?",
              step_options: [
                {
                  option_name: "Leak",
                },
                {
                  option_name: "Tiling repairs",
                  substeps: {
                    step_name: "How extensive is the repair?",
                    step_options: [
                      {
                        option_name: "A single tile",
                      },
                      {
                        option_name: "2 - 5 tiles",
                      },
                      {
                        option_name: "6 - 15 tiles",
                      },
                      {
                        option_name: "16 - 30 tiles",
                      },
                      {
                        option_name: "30+ tiles",
                      },
                    ],
                  },
                },
                {
                  option_name: "Roof structure",
                },
              ],
            },
          },
          {
            option_name: "Flat roof",
            substeps: {
              step_name: "What is the roof material?",
              step_options: [
                {
                  option_name: "GRP (fibreglass)",
                  substeps: {
                    step_name: "Do you own the property?",
                    step_options: propertyOwnership,
                  },
                },
                {
                  option_name: "EPDM (rubber membrane)",
                  substeps: {
                    step_name: "Do you own the property?",
                    step_options: propertyOwnership,
                  },
                },
                {
                  option_name: "Felt or bitumen",
                  substeps: {
                    step_name: "Do you own the property?",
                    step_options: propertyOwnership,
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      option_name: "Chimney work",
      substeps: {
        step_name: "What chimney work needs doing?",
        step_options: [
          {
            option_name: "Install or rebuild new chimney",
          },
          {
            option_name: "Remove an existing chimney",
          },
          {
            option_name: "Repair or repoint my chimney",
          },
          {
            option_name: "Chimney capping",
          },
        ],
      },
    },
  ],
};

export const builderSteps: TStep = {
  step_name: "What building work do you need?",

  step_options: [
    {
      option_name: "Work inside the property",
      substeps: {
        step_name: "What do you need help with?",
        step_options: [
          {
            option_name: "Small structural changes or repairs",
          },
          {
            option_name: "Large structural changes or repairs",
          },
          {
            option_name: "Refurbishments",
            substeps: {
              step_name: "What room do you need refurbished?",
              step_options: [
                {
                  option_name: "Kitchen",
                },
                {
                  option_name: "Bathroom",
                },
              ],
            },
          },
        ],
      },
    },
    {
      option_name: "Work outside the property",
      substeps: {
        step_name: "What do you need help with?",
        step_options: [
          {
            option_name: "Cladding",
          },
          {
            option_name: "Concreting",
          },
          {
            option_name: "Driveways",
          },
          {
            option_name: "Patios or paving",
          },
          {
            option_name: "Car ports",
          },
        ],
      },
    },
    {
      option_name: "Extension or conversion",
      substeps: {
        step_name: "What work do you need?",
        step_options: [
          {
            option_name: "Extension",
          },
          {
            option_name: "Conversion",
            substeps: {
              step_name: "What conversion job do you need?",
              step_options: [
                {
                  option_name: "Loft conversion",
                },
                {
                  option_name: "Garage conversion",
                },
                {
                  option_name: "Refurbishment",
                  substeps: {
                    step_name: "What room do you need refurbished?",
                    step_options: [
                      {
                        option_name: "Kitchen",
                      },
                      {
                        option_name: "Bathroom",
                      },
                    ],
                  },
                },
                {
                  option_name: "Entire property",
                },
              ],
            },
          },
        ],
      },
    },
    {
      option_name: "Building a house",
    },
    {
      option_name: "Listed, period or heritage property",
    },
    {
      option_name: "Outbuildings",
      substeps: {
        step_name: "What do you need help with?",
        step_options: [
          {
            option_name: "Convert a Garagae",
          },
          {
            option_name: "Build a Garage",
          },
          {
            option_name: "Garden Studios",
          },
          {
            option_name: "Workshops",
          },
        ],
      },
    },
    {
      option_name: "Planning, design & support",
      substeps: {
        step_name: "What do you need help with?",
        step_options: [
          {
            option_name: "Architecture",
          },
          {
            option_name: "Surveying",
          },
          {
            option_name: "Project management",
          },
          {
            option_name: "Structural design",
          },
          {
            option_name: "Interior design",
          },
          {
            option_name: "Insurance claim specialist",
          },
        ],
      },
    },
  ],
};

export const gardenerSteps: TStep = {
  step_name: "What do you need a gardener to help with?",

  step_options: [
    {
      option_name: "One-off gardening job",
      substeps: {
        step_name: "What does your job involve?",
        step_options: [
          {
            option_name: "General Gardening",
            substeps: {
              step_name: "What does your job involve?",
              step_options: [
                {
                  option_name: "Hedges",
                },
                {
                  option_name: "Lawns",
                },
                {
                  option_name: "Pruning",
                },
                {
                  option_name: "Weed control",
                },
                {
                  option_name: "Japanese knotweed",
                },
                {
                  option_name: "Roof gardens",
                },
                {
                  option_name: "Mulching",
                },
              ],
            },
          },
          {
            option_name: "Garden Clearance",
          },
          {
            option_name: "Pond maintenance & cleaning",
          },
          {
            option_name: "Tree surgery",
          },
          {
            option_name: "Landscaping",
          },
          {
            option_name: "Garden log supplies",
          },
          {
            option_name: "Garden machinery repair ",
          },
          {
            option_name: "Rainwater harvesting",
          },
          {
            option_name: "Polytunnels",
          },
        ],
      },
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
      substeps: {
        step_name: "Where do you need your painting done?",
        step_options: [
          {
            option_name: "Inside",
            substeps: {
              step_name: "How many rooms do you need painted/decorated?",
              step_options: [
                {
                  option_name: "Less than 1 / part of a room",
                  option_description: "e.g. painting over a patch/fix",
                },
                {
                  option_name: "1 room",
                },
                {
                  option_name: "2 rooms",
                },
                {
                  option_name: "3 or more rooms",
                },
              ],
            },
          },
          {
            option_name: "Outside",
          },
          {
            option_name: "Both",
          },
        ],
      },
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
      substeps: {
        step_name: "What do you need stripped and repainting?",
        step_options: [
          {
            option_name: "Windows",
          },
          {
            option_name: "Doors",
          },
        ],
      },
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
      substeps: {
        step_name: "What do you need help with?",
        step_options: [
          {
            option_name: "Sheds",
          },
          {
            option_name: "Shed bases",
          },
          {
            option_name: "Garden rooms & annexes",
          },
          {
            option_name: "Brickwork",
          },
          {
            option_name: "Greenhouses",
          },
          {
            option_name: "Summer houses",
          },
          {
            option_name: "Sleepers",
          },
          {
            option_name: "Play areas",
          },
          {
            option_name: "Aviaries",
          },
        ],
      },
    },
    {
      option_name: "Lawns & greens",
      substeps: {
        step_name: "What do you need help with?",
        step_options: [
          {
            option_name: "Grass Cutting",
          },
          {
            option_name: "Artificial Grass",
          },
          {
            option_name: "Turfing",
          },
          {
            option_name: "Golf & Bowls Greens",
          },
        ],
      },
    },
    {
      option_name: "Decking",
    },
    {
      option_name: "Ponds, water features & systems",
      substeps: {
        step_name: "What do you need help with?",
        step_options: [
          {
            option_name: "Pond construction",
          },
          {
            option_name: "Pond maintenance & cleaning",
          },
          {
            option_name: "Irrigation systems",
          },
          {
            option_name: "Water features",
          },
          {
            option_name: "Water gardens",
          },
        ],
      },
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
      substeps: {
        step_name: "What do you need help with?",
        step_options: [
          {
            option_name: "Windows",
          },
          {
            option_name: "Doors",
            substeps: {
              step_name: "Are the doors internal or external?",
              step_options: [
                {
                  option_name: "Internal",
                },
                {
                  option_name: "External",
                },
              ],
            },
          },
        ],
      },
    },
    {
      option_name: "Furniture, cupboards & shelves",
      substeps: {
        step_name: "What type of furniture do you need help with?",
        step_options: [
          {
            option_name: "Fitted wardrobes",
          },
          {
            option_name: "Built-in furniture",
          },
          {
            option_name: "Bespoke furniture",
          },
          {
            option_name: "Cabinet making",
          },
          {
            option_name: "Cupboards",
          },
          {
            option_name: "Shelves",
            substeps: {
              step_name: "Are these standard or custom shelves?",
              step_options: [
                {
                  option_name: "Standard shelves",
                },
                {
                  option_name: "Custom fit",
                },
              ],
            },
          },
        ],
      },
    },
    {
      option_name: "Kitchens",
      substeps: {
        step_name: "What do you need help with?",
        step_options: [
          {
            option_name: "Whole kitchen fitted",
          },
          {
            option_name: "Bespoke kitchen fitted",
          },
          {
            option_name: "Worktops",
          },
          {
            option_name: "Cupboards",
          },
        ],
      },
    },
    {
      option_name: "Flooring & skirting",
      substeps: {
        step_name: "What do you need help with?",
        step_options: [
          {
            option_name: "Wooden flooring",
          },
          {
            option_name: "Laminate",
          },
          {
            option_name: "Skirting",
          },
          {
            option_name: "Vinyl or vinyl tiles",
          },
          {
            option_name: "Loft floor boarding",
          },
          {
            option_name: "Floor sanding",
          },
        ],
      },
    },
    {
      option_name: "Staircases",
    },
    {
      option_name: "Fencing & gates",
      substeps: {
        step_name: "What do you need help with?",
        step_options: [
          {
            option_name: "Fencing",
          },
          {
            option_name: "Gates",
          },
        ],
      },
    },
    {
      option_name: "Outdoor structures & roofing",
      substeps: {
        step_name: "What structure do you need help with?",
        step_options: [
          {
            option_name: "Shed or summer house",
          },
          {
            option_name: "Log cabins",
          },
          {
            option_name: "Roofing",
          },
        ],
      },
    },
  ],
};

const hallwayStairsLanding: TStep = {
  step_name: "Is this area your hallway, stairs and landing?",
  step_options: [
    {
      option_name: "Yes",
    },
    {
      option_name: "No",
    },
  ],
};

const plasterWork: TStepOption[] = [
  {
    option_name: "A small area (less than one full wall or ceiling)",
    substeps: hallwayStairsLanding,
  },
  {
    option_name: "Up to 5 walls and / or ceilings",
    substeps: hallwayStairsLanding,
  },
  {
    option_name: "6 - 10 walls and / or ceilings",
    substeps: hallwayStairsLanding,
  },
  {
    option_name: "11 - 20 walls and / or ceilings",
    substeps: hallwayStairsLanding,
  },
  {
    option_name: "More than 20 walls and / or ceilings",
    substeps: hallwayStairsLanding,
  },
];

export const plastererSteps: TStep = {
  step_name: "What do you need a plasterer to help with?",
  step_options: [
    {
      option_name: "Plastering (indoors)",
      substeps: {
        step_name: "What type of plastering do you need?",
        step_options: [
          {
            option_name: "Skim only",
            option_description:
              "Plastering over existing plaster or over plasterboard",
            substeps: {
              step_name: "Roughly how much work is it?",
              step_options: plasterWork,
            },
          },
          {
            option_name: "Plasterboard & skim",
            option_description: "For new stud walls and ceilings",
            substeps: {
              step_name: "Roughly how much work is it?",
              step_options: plasterWork,
            },
          },
        ],
      },
    },
    {
      option_name: "Rendering (outdoors)",
      substeps: {
        step_name: "What do you need rendered?",
        step_options: [
          {
            option_name: "Exterior of house",
            substeps: {
              step_name: "Roughly how large is your rendering job?",
              step_options: [
                {
                  option_name: "Small area (less than one wall)",
                  option_description:
                    "e.g. a crack or hole in an external wall",
                },
                {
                  option_name: "1 - 2 exterior walls",
                },
                {
                  option_name: "3 - 4 exterior walls",
                },
                {
                  option_name: "5+ exterior walls",
                },
              ],
            },
          },
          {
            option_name: "Garden wall(s)",
            substeps: {
              step_name: "Roughly how large is your rendering job?",
              step_options: [
                {
                  option_name: "Repair a small area",
                },
                {
                  option_name: "Small (up to 10m²)",
                },
                {
                  option_name: "Medium (10 - 30m²)",
                },
                {
                  option_name: "Large (over 30m²)",
                },
              ],
            },
          },
        ],
      },
    },
  ],
};

export const drivewaysPatiosSteps: TStep = {
  step_name: "What do you need help with?",

  step_options: [
    {
      option_name: "Driveways",
      substeps: {
        step_name: "What do you need help with?",
        step_options: [
          {
            option_name: "Block paving",
          },
          {
            option_name: "Tarmac driveway",
          },
          {
            option_name: "Resin bond/bound surfacing",
          },
          {
            option_name: "Gravel & shingle driveways",
          },
          {
            option_name: "Drop kerbs",
          },
          {
            option_name: "Concrete driveway",
          },
          {
            option_name: "Cleaning or sealing a driveway",
          },
        ],
      },
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
      substeps: {
        step_name: "What type of fencing do you need?",
        step_options: [
          {
            option_name: "Garden fencing",
          },
          {
            option_name: "Panel fencing",
          },
          {
            option_name: "Close board fencing",
          },
          {
            option_name: "Picket fencing",
          },
        ],
      },
    },
    {
      option_name: "Gates",
      substeps: {
        step_name: "What type of gates do you need?",
        step_options: [
          {
            option_name: "Wooden gates",
          },
          {
            option_name: "Metal gates",
          },
        ],
      },
    },
  ],
};

const treeSizes: TStepOption[] = [
  {
    option_name: "Small - up to 3m (9 ft)",
  },
  {
    option_name: "Medium - up to 8m (26 ft)",
  },
  {
    option_name: "Larges - over 8m (26 ft)",
  },
];

export const treeSurgeonSteps: TStep = {
  step_name: "What type of tree surgery service do you require?",
  step_options: [
    {
      option_name: "Trimming or topping",
      substeps: {
        step_name: "How many trees are involved?",
        step_options: [
          {
            option_name: "1",
            substeps: {
              step_name: "How large is the tree?",
              step_options: treeSizes,
            },
          },
          {
            option_name: "2",
            substeps: {
              step_name: "What's the height of the tallest tree?",
              step_description:
                "Don't worry if you don't know the exact height, we only need a rough estimate",
              step_options: treeSizes,
            },
          },
          {
            option_name: "3",
            substeps: {
              step_name: "What's the height of the tallest tree?",
              step_description:
                "Don't worry if you don't know the exact height, we only need a rough estimate",
              step_options: treeSizes,
            },
          },
          {
            option_name: "4 or more",
            substeps: {
              step_name: "What's the height of the tallest tree?",
              step_description:
                "Don't worry if you don't know the exact height, we only need a rough estimate",
              step_options: treeSizes,
            },
          },
        ],
      },
    },
    {
      option_name: "Cutting down (felling)",
      substeps: {
        step_name: "How many trees need to be cut down?",
        step_options: [
          {
            option_name: "1",
            substeps: {
              step_name: "How large is the tree?",
              step_options: treeSizes,
            },
          },
          {
            option_name: "2",
            substeps: {
              step_name: "What's the height of the tallest tree?",
              step_description:
                "Don't worry if you don't know the exact height, we only need a rough estimate",
              step_options: treeSizes,
            },
          },
          {
            option_name: "3 or more",
            substeps: {
              step_name: "What's the height of the tallest tree?",
              step_description:
                "Don't worry if you don't know the exact height, we only need a rough estimate",
              step_options: treeSizes,
            },
          },
        ],
      },
    },
    {
      option_name: "Stump removal only",
      substeps: {
        step_name: "How many stumps do you need removed?",
        step_options: [
          {
            option_name: "1-2 stumps",
          },
          {
            option_name: "3+ stumps",
          },
        ],
      },
    },
    {
      option_name: "Diagnosis / Assessment",
    },
    {
      option_name: "Bushes, or other gardening tasks",
    },
  ],
};

export const handymanSteps: TStep = {
  step_name: "Does your job include electrical works?",
  step_options: [
    {
      option_name: "Yes",
      substeps: {
        step_name: "What do you need an electrician’s help with?",
        step_options: [
          {
            option_name: "Rewiring",
          },
          {
            option_name: "Fuseboxes",
          },
          {
            option_name: "Electrical fittings & appliances",
          },
          {
            option_name: "Safety check or certificate",
          },
          {
            option_name: "Electrical faults & repairs",
          },
        ],
      },
    },
    {
      option_name: "No",
      substeps: {
        step_name: "What type of job is it?",
        step_options: [
          {
            option_name: "Fixtures / fittings",
            option_description:
              "e.g. handrails, blinds, mirrors, shelves, TVs, etc.",
          },
          {
            option_name: "Furniture assembling",
          },
          {
            option_name: "Shed assembling",
          },
          {
            option_name: "Cleaning / powerwashing",
          },
          {
            option_name: "Carpentry / joinery",
          },
          {
            option_name: "Various small tasks",
          },
          {
            option_name: "Repairs",
          },
        ],
      },
    },
  ],
};

export const locksmithSteps: TStep = {
  step_name: "Where is the lock?",
  step_options: [
    {
      option_name: "Door",
      substeps: {
        step_name: "What do you need a locksmith to help with?",
        step_options: [
          {
            option_name: "Lock fitting",
          },
          {
            option_name: "Emergency issue",
          },
          {
            option_name: "Lock repair",
          },
          {
            option_name: "Opening or unlocking a door",
          },
          {
            option_name: "Security door lock",
          },
          {
            option_name: "Digital door lock",
          },
          {
            option_name: "Key cutting",
          },
          {
            option_name: "Snap lock",
          },
        ],
      },
    },
    {
      option_name: "Window",
    },
    {
      option_name: "Vehicle",
      substeps: {
        step_name: "What do you need a locksmith to help with?",
        step_options: [
          {
            option_name: "Car key replacement",
          },
          {
            option_name: "Van security lock",
          },
        ],
      },
    },
    {
      option_name: "Safe",
    },
  ],
};

export const bathroomsSteps: TStep = {
  step_name: "What does your bathroom job involve?",

  step_options: [
    {
      option_name: "Bathroom refit",
      option_description: "fitting a brand new bathroom",
      substeps: {
        step_name: "What kind of refit do you need?",
        step_options: [
          {
            option_name: "Fit Only",
            option_description: "I already have the bathroom",
          },
          {
            option_name: "Supply & Fit",
            option_description:
              "I want to purchase a bathroom and have it fitted",
          },
          {
            option_name: "Supply only",
          },
        ],
      },
    },
    {
      option_name: "Bathroom fixtures",
      option_description: "e.g. showers, baths, sinks, toilets, etc.",
      substeps: {
        step_name: "What do you need help with?",
        step_options: [
          {
            option_name: "Showers",
            substeps: {
              step_name: "What do you need help with?",
              step_options: [
                {
                  option_name: "Shower Installation",
                },
                {
                  option_name: "Shower Repair",
                },
                {
                  option_name: "Shower Trays",
                },
              ],
            },
          },
          {
            option_name: "Baths, sinks or shower trays",
          },
          {
            option_name: "Bath resurfacing",
          },
          {
            option_name: "Blockages",
            option_description: "blocked sinks, baths, toilets",
            substeps: {
              step_name: "What do you need help with?",
              step_options: [
                {
                  option_name: "Blocked toilets",
                },
                {
                  option_name: "Blocked sinks",
                },
                {
                  option_name: "Blocked baths",
                },
                {
                  option_name: "Blocked shower trays",
                },
              ],
            },
          },
        ],
      },
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
      substeps: {
        step_name: "What type of tiles do you need?",
        step_options: [
          {
            option_name: "Ceramic",
          },
          {
            option_name: "Porcelain",
          },
          {
            option_name: "Plain",
          },
          {
            option_name: "Natural stone",
          },
          {
            option_name: "Victorian",
          },
          {
            option_name: "Brick",
          },
          {
            option_name: "Mosaic",
          },
        ],
      },
    },
    {
      option_name: "Repair tiles",
    },
    {
      option_name: "Fit appliances/fixtures as well as tiling",
      substeps: {
        step_name: "Which room do you need fitted and tiled?",
        step_options: [
          {
            option_name: "Kitchen",
          },
          {
            option_name: "Bathroom",
          },
        ],
      },
    },
  ],
};

export const centralHeatingSteps: TStep = {
  step_name: "What does your central heating job involve?",

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
      option_name: "Heating & radiators",
      substeps: {
        step_name: "What does your job involve?",
        step_options: [
          {
            option_name: "Central heating installation",
          },
          {
            option_name: "Central heating service/repair",
            substeps: {
              step_name: "What type of system do you need serviced/repaired?",
              step_options: [
                {
                  option_name: "Gas",
                },
                {
                  option_name: "Oil",
                },
                {
                  option_name: "LPG",
                },
              ],
            },
          },
          {
            option_name: "Radiators installation",
          },
          {
            option_name: "Radiators repair",
          },
        ],
      },
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
      substeps: {
        step_name: "What does your job involve?",
        step_options: [
          {
            option_name: "Installation",
            substeps: {
              step_name: "What type of heat pump do you need installed?",
              step_options: [
                {
                  option_name: "Ground source heat pump",
                },
                {
                  option_name: "Air source heat pump",
                },
              ],
            },
          },
          {
            option_name: "Service/Repair",
            substeps: {
              step_name: "What type of heat pump do you need repaired?",
              step_options: [
                {
                  option_name: "Ground source heat pump",
                },
                {
                  option_name: "Air source heat pump",
                },
              ],
            },
          },
        ],
      },
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
