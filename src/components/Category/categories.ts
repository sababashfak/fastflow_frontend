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

const typeOfArchitectProject: TStepOption[] = [
  {
    option_name: "Extension",
  },
  {
    option_name: "Loft Conversion",
  },
  {
    option_name: "Renovation",
  },
  {
    option_name: "New Build",
  },
];

export const architecturalSteps: TStep = {
  step_name: "What type of service do you need?",
  step_options: [
    {
      option_name: "Basic outline plans",
      option_description: "for quotes and planning application",
      substeps: {
        step_name: "What type of project are you planning?",
        step_options: typeOfArchitectProject,
      },
    },
    {
      option_name: "Full regulation plans",
      option_description: "for builders & building regs",
      substeps: {
        step_name: "What type of project are you planning?",
        step_options: typeOfArchitectProject,
      },
    },
    {
      option_name: "Structural calculations",
    },
  ],
};

const repointingSize: TStepOption[] = [
  {
    option_name: "Small",
    option_description: "e.g. garden walls, chimney, section of wall",
  },
  {
    option_name: "Medium",
    option_description:
      "e.g. single wall, multiple areas, garage or outbuilding",
  },
  {
    option_name: "Large",
    option_description: "e.g. multiple walls",
  },
  {
    option_name: "X - Large",
    option_description: "e.g. whole property",
  },
];

export const bricklayingSteps: TStep = {
  step_name: "What type of bricklaying services are you looking for?",
  step_options: [
    {
      option_name: "Building a wall",
      substeps: {
        step_name: "What type of wall are you looking to build?",
        step_options: [
          {
            option_name: "Small decorative wall",
            option_description: "A few courses high",
          },
          {
            option_name: "Small wall",
            option_description: "For a garden or front yard",
          },
          {
            option_name: "Garden wall",
          },
          {
            option_name: "Retaining wall",
            option_description: "A large wall to support soil",
          },
          {
            option_name: "More than one wall",
          },
        ],
      },
    },
    {
      option_name: "Building a structure",
      option_description: "Outbuilding, garage, extension, etc.",
      substeps: {
        step_name: "What type of structure are you looking to build?",
        step_options: [
          {
            option_name: "Outbuilding",
          },
          {
            option_name: "Porch",
          },
          {
            option_name: "Garage",
          },
          {
            option_name: "Extension",
          },
        ],
      },
    },
    {
      option_name: "Building custom brickwork",
      option_description: "Pillar, steps, etc.",
      substeps: {
        step_name: "What type of custom brickwork are you looking for?",
        step_options: [
          {
            option_name: "Pillar",
          },
          {
            option_name: "Steps",
          },
        ],
      },
    },
    {
      option_name: "Wall alterations",
      option_description:
        "Opening for windows and doors, knocking through, etc.",
      substeps: {
        step_name:
          "Which of the following best describes your wall alteration job?",
        step_options: [
          {
            option_name: "Window or door installation / replacement",
          },
          {
            option_name: "Wall removal",
            substeps: {
              step_name: "Is it a load bearing wall?",
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
        ],
      },
    },
    {
      option_name: "Repointing",
      option_description: "Renewing the mortar on brickwork or natural stone",
      substeps: {
        step_name: "What type of repointing needs to be done?",
        step_options: [
          {
            option_name: "Brickwork",
            substeps: {
              step_name: "How large is the repointing job?",
              step_options: repointingSize,
            },
          },
          {
            option_name: "Natural Stone",
            substeps: {
              step_name: "How large is the repointing job?",
              step_options: repointingSize,
            },
          },
        ],
      },
    },
    {
      option_name: "Chimney work",
      substeps: {
        step_name: "What do you need doing to your chimney?",
        step_options: [
          {
            option_name: "Removal",
          },
          {
            option_name: "Revuilding / major alterations",
          },
          {
            option_name: "Repointing / repair",
          },
        ],
      },
    },
    {
      option_name: "Repairs",
      substeps: {
        step_name: "How extensive is your repair job?",
        step_options: [
          {
            option_name: "Small repair",
            option_description: "e.g. replace some blown brickwork",
          },
          {
            option_name: "Medium repair",
            option_description: "e.g. re-lay a few courses",
          },
          {
            option_name: "Large repair",
            option_description: "e.g. rebuild a wall section",
          },
        ],
      },
    },
  ],
};

const fireplaceNeeds: TStepOption[] = [
  {
    option_name: "Install",
    substeps: {
      step_name: "Does this include removal of an old fireplace?",
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
    option_name: "Repair",
  },
  {
    option_name: "Remove",
    substeps: {
      step_name: "Does this include installation of a new fireplace?",
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
];

export const chimneySteps: TStep = {
  step_name: "What does your job involve?",
  step_options: [
    {
      option_name: "Chimney",
      option_description:
        "Removal, repairs, capping, and sweeping of a chimney or chimney breast",
      substeps: {
        step_name: "What do you need doing to your chimney?",
        step_options: [
          {
            option_name: "Capping",
          },
          {
            option_name: "Sweeping",
          },
          {
            option_name: "Removal",
          },
          {
            option_name: "Rebuilding / major alterations",
          },
          {
            option_name: "Repointing / repair",
          },
        ],
      },
    },
    {
      option_name: "Fireplace",
      option_description:
        "Installation or repair of any fireplace (gas, electric, solid fuel, etc.)",
      substeps: {
        step_name: "What type of fireplace does this involve?",
        step_options: [
          {
            option_name: "Gas",
            substeps: {
              step_name: "What needs doing to your gas fireplace?",
              step_options: fireplaceNeeds,
            },
          },
          {
            option_name: "Electric",
            substeps: {
              step_name: "What needs doing to your electric fireplace?",
              step_options: fireplaceNeeds,
            },
          },
          {
            option_name: "Solid fuel",
            option_description: "e.g. wood, coal burning stove etc.",
            substeps: {
              step_name: "What needs doing to your solid fuel fireplace?",
              step_options: fireplaceNeeds,
            },
          },
        ],
      },
    },
    {
      option_name: "Flue",
      option_description: "Istallation, alteration or repair",
      substeps: {
        step_name: "What needs doing to your flue?",
        step_options: [
          {
            option_name: "Installation or alteration",
          },
          {
            option_name: "Repair",
          },
        ],
      },
    },
  ],
};

export const conservatorySteps: TStep = {
  step_name: "What do you need a conservatory installer's help with?",
  step_options: [
    {
      option_name: "A new conservatory installation",
      substeps: {
        step_name: "What do you need to have done?",
        step_options: [
          {
            option_name: "Build the conservatory and base",
          },
          {
            option_name: "Erect conservatory only",
          },
          {
            option_name: "Build base only",
          },
        ],
      },
    },
    {
      option_name: "Replace or improve an existing conservatory",
      substeps: {
        step_name: "What needs doing?",
        step_options: [
          {
            option_name: "Roof replacement",
          },
          {
            option_name: "Windows and doors replacement",
          },
          {
            option_name: "Large refurbishment of existing conservatory",
          },
        ],
      },
    },
    {
      option_name: "A repair",
      substeps: {
        step_name: "What is the issue?",
        step_options: [
          {
            option_name: "Leak",
          },
          {
            option_name: "Roof",
          },
          {
            option_name: "Faulty door or windows",
          },
          {
            option_name: "Broken glass",
          },
        ],
      },
    },
  ],
};

export const dampProofingSteps: TStep = {
  step_name: "Do you know what is causing your damp problem?",
  step_options: [
    {
      option_name: "No -  I need help investigating",
    },
    {
      option_name: "Yes - I just need help fixing the problem",
      substeps: {
        step_name: "How big is the affected area?",
        step_options: [
          {
            option_name: "Small isolated area",
          },
          {
            option_name: "Widespread",
          },
          {
            option_name: "I’m not sure",
          },
        ],
      },
    },
  ],
};

const fasciasSides: TStep = {
  step_name: "How many sides of the property are involved?",
  step_options: [
    {
      option_name: "1",
    },
    {
      option_name: "2",
    },
    {
      option_name: "3",
    },
    {
      option_name: "4+",
    },
    {
      option_name: "a garage / outbuilding",
    },
  ],
};

const fasciasIROptions: TStepOption[] = [
  {
    option_name: "Install / replace",
    substeps: fasciasSides,
  },
  {
    option_name: "Repair",
    substeps: {
      step_name: "Roughly how large is the repair?",
      step_options: [
        {
          option_name: "Single isolated area",
        },
        {
          option_name: "Multiple areas of the property",
        },
        {
          option_name: "I’m not sure",
        },
      ],
    },
  },
];

export const fasciasSoffitsSteps: TStep = {
  step_name: "What does your job involve?",
  step_options: [
    {
      option_name: "Guttering only",
      substeps: {
        step_name: "What guttering work do you require?",
        step_options: [
          {
            option_name: "Install / replace",
            substeps: fasciasSides,
          },
          {
            option_name: "Repair",
            option_description: "e.g. leaks",
          },
          {
            option_name: "Cleaning / blockages",
          },
        ],
      },
    },
    {
      option_name: "Fascias and/or soffits only",
      substeps: {
        step_name:
          "What are you looking to have done to your fascias & soffits?",
        step_options: fasciasIROptions,
      },
    },
    {
      option_name: "Both",
      substeps: {
        step_name:
          "What are you looking to have done to your fascias, soffits & gutter?",
        step_options: fasciasIROptions,
      },
    },
  ],
};

const domesticOrCommercial: TStep = {
  step_name: "Is this for a domestic or commercial property?",
  step_options: [
    {
      option_name: "Domesitc property",
    },
    {
      option_name: "Commercial property",
    },
  ],
};

const gasWorkOptions: TStepOption[] = [
  {
    option_name: "Yes",
    substeps: domesticOrCommercial,
  },
  {
    option_name: "No",
    substeps: domesticOrCommercial,
  },
];

export const gasWorkSteps: TStep = {
  step_name: "What does your gas job involve?",
  step_options: [
    {
      option_name: "Gas safety check",
      substeps: {
        step_name: "What do you need certified?",
        step_options: [
          {
            option_name: "Boiler",
            substeps: {
              step_name: "Would you also like the boiler serviced?",
              step_options: gasWorkOptions,
            },
          },
          {
            option_name: "Single appliance",
            substeps: {
              step_name: "Would you also like the appliance serviced?",
              step_options: gasWorkOptions,
            },
          },
          {
            option_name: "Multiple appliances",
            substeps: {
              step_name: "Would you also like the appliances serviced?",
              step_options: gasWorkOptions,
            },
          },
        ],
      },
    },
    {
      option_name: "Service boiler or appliance",
      substeps: {
        step_name: "What do you need serviced?",
        step_options: [
          {
            option_name: "Boiler",
            substeps: {
              step_name: "Would you also like the boiler certified?",
              step_options: gasWorkOptions,
            },
          },
          {
            option_name: "Single appliance",
            substeps: {
              step_name: "Would you also like the appliance certified?",
              step_options: gasWorkOptions,
            },
          },
          {
            option_name: "Multiple appliances",
            substeps: {
              step_name: "Would you also like the appliances certified?",
              step_options: gasWorkOptions,
            },
          },
        ],
      },
    },
    {
      option_name: "Install or replace boiler or appliance",
      substeps: {
        step_name:
          "What kind of appliance are you looking to have installed or replaced?",
        step_options: [
          {
            option_name: "Gas boiler",
            substeps: domesticOrCommercial,
          },
          {
            option_name: "Gas hob or oven",
            substeps: domesticOrCommercial,
          },
        ],
      },
    },
    {
      option_name: "Move or remove boiler or appliance",
      substeps: {
        step_name: "Do you want to remove a gas boiler?",
        step_options: [
          {
            option_name: "Yes",
            substeps: domesticOrCommercial,
          },
          {
            option_name: "No",
            substeps: domesticOrCommercial,
          },
        ],
      },
    },
    {
      option_name: "Pipework only",
      substeps: {
        step_name: "What needs to be changed with the pipework?",
        step_options: [
          {
            option_name: "Disconnect or cap pipework",
          },
          {
            option_name: "Install or alter pipework",
          },
        ],
      },
    },
    {
      option_name: "Problem or repair",
      substeps: {
        step_name: "What appliance needs repairing?",
        step_options: [
          {
            option_name: "Boiler",
            substeps: domesticOrCommercial,
          },
          {
            option_name: "Gas hob or oven",
            substeps: domesticOrCommercial,
          },
          {
            option_name: "Gas fireplace",
            substeps: domesticOrCommercial,
          },
        ],
      },
    },
  ],
};

export const groundworkSteps: TStep = {
  step_name: "What type of job is it?",
  step_options: [
    {
      option_name: "Foundations for a structure to be built",
      option_description:
        "e.g. Foundations for extension, new build, outbuilding or shed",
      substeps: {
        step_name: "What do you want foundations for?",
        step_options: [
          {
            option_name: "New house",
          },
          {
            option_name: "House extension",
          },
          {
            option_name: "Outbuilding or garage",
          },
          {
            option_name: "Shed",
          },
        ],
      },
    },
    {
      option_name: "Drainage & pipework",
      option_description:
        "e.g. digging trenches and laying new pipes or drains",
    },
    {
      option_name: "General garden earthworks",
      option_description:
        "e.g. level lawns, excavate for a pond or pool, dig grave, etc.",
    },
  ],
};

export const insulationSteps: TStep = {
  step_name: "What type of insulation do you want?",
  step_options: [
    {
      option_name: "Loft / roof insulation",
    },
    {
      option_name: "Wall insulation",
      substeps: {
        step_name: "How many walls need insulating?",
        step_options: [
          {
            option_name: "1 wall",
          },
          {
            option_name: "Several walls",
          },
          {
            option_name: "Whole house",
          },
        ],
      },
    },
    {
      option_name: "Floor insulation",
      substeps: {
        step_name: "How many rooms need insulating?",
        step_options: [
          {
            option_name: "1 - 2 rooms",
          },
          {
            option_name: "3 - 4 rooms",
          },
          {
            option_name: "5+ rooms",
          },
        ],
      },
    },
  ],
};

const kitchenStructureWork: TStep = {
  step_name: "Do you require any structural work (e.g. removing walls)?",
  step_options: [
    {
      option_name: "Yes",
      substeps: {
        step_name: "Do you own the property?",
        step_options: [
          {
            option_name: "Yes",
          },
          {
            option_name: "I will - purchase in progress",
          },
          {
            option_name: "No - I'm posting on behalf of the property owner",
          },
        ],
      },
    },
    {
      option_name: "No",
    },
  ],
};

const purchasedKitchen: TStep = {
  step_name: "Have you purchased a kitchen already?",
  step_options: [
    {
      option_name: "Yes - purchased everything already",
      substeps: kitchenStructureWork,
    },
    {
      option_name: "No - nothing purchased yet",
      substeps: kitchenStructureWork,
    },
  ],
};

export const kitchenFitiingSteps: TStep = {
  step_name: "What type of kitchen fitting service do you require?",
  step_options: [
    {
      option_name: "New kitchen installation",
      substeps: {
        step_name: "How big is your kitchen project?",
        step_options: [
          {
            option_name: "Extensive kitchen refurb",
            option_description:
              "Including new tiling, lighting, flooring, or plumbing",
            substeps: purchasedKitchen,
          },
          {
            option_name: "Standard kitchen refit",
            option_description:
              "Upgrading units, worktops, sink without major layout changes",
            substeps: purchasedKitchen,
          },
        ],
      },
    },
    {
      option_name: "Worktop installation",
      substeps: {
        step_name: "What worktop material would you like?",
        step_options: [
          {
            option_name: "Natural stone",
            option_description: "e.g. granite or marble",
          },
          {
            option_name: "Composite",
            option_description: "e.g. quartz or corian",
          },
          {
            option_name: "Solid wood",
            option_description: "e.g. oak, walnut, beech, bamboo",
          },
          {
            option_name: "Laminate",
            option_description: "e.g. wood, stone effect",
          },
          {
            option_name: "Not sure - need help deciding",
          },
        ],
      },
    },
    {
      option_name: "Cabinet door refurbishment / replacement",
    },
    {
      option_name: "Fit appliance (sink, oven, dishwasher, etc.)",
      substeps: {
        step_name: "What type of appliance do you require fitting?",
        step_options: [
          {
            option_name: "Gas / dual-fuel cooker / oven",
          },
          {
            option_name: "Electric cooker / oven",
          },
          {
            option_name: "Washing machine",
          },
          {
            option_name: "Dishwasher",
          },
          {
            option_name: "Sink",
          },
        ],
      },
    },
    {
      option_name: "Minor repair",
    },
  ],
};

const loftPropertyOnwerShip: TStep = {
  step_name: "Do you own the property?",
  step_options: [
    {
      option_name: "Yes",
      substeps: {
        step_name: "Have you had any plans drawn up?",
        step_options: [
          {
            option_name: "Yes I have plans",
          },
          {
            option_name: "Plans are being drawn up",
          },
          {
            option_name: "No plans have been drawn up",
            substeps: {
              step_name: "Your builder will probably require plans",
              step_description:
                "Loft conversions typically require building regulations, so we recommend you talk to an architect first to ensure your project meets any relevant regulatory requirements.",
              step_options: [
                {
                  option_name: "Okay - send my job to architects",
                },
                {
                  option_name: "Continue posting this job without plans",
                },
              ],
            },
          },
        ],
      },
    },
    {
      option_name: "I will - purchase in the progress",
    },
    {
      option_name: "No",
    },
  ],
};

const loftHouseType: TStep = {
  step_name: "What type of house is the loft conversion for?",
  step_options: [
    {
      option_name: "Detached",
      substeps: loftPropertyOnwerShip,
    },
    {
      option_name: "Semi-detached",
      substeps: loftPropertyOnwerShip,
    },
    {
      option_name: "Terraced",
      substeps: loftPropertyOnwerShip,
    },
    {
      option_name: "End of Terrace",
      substeps: loftPropertyOnwerShip,
    },
    {
      option_name: "Bungalow",
      substeps: loftPropertyOnwerShip,
    },
  ],
};

export const loftConversionsteps: TStep = {
  step_name: "What type of loft conversion do you want?",
  step_options: [
    {
      option_name: "Loft conversion with structural changes",
      option_description:
        "Requires a change to the roof structure, e.g. dormers, hip-to-gable, etc.",
      substeps: loftHouseType,
    },
    {
      option_name: "Loft conversion (no structural changes)",
      option_description: "No alterations to the roof shape or structure.",
      substeps: loftHouseType,
    },
    {
      option_name: "Loft conversion for storage purposes",
      option_description:
        "Creating an accessible space by boarding, decorating etc.",
      substeps: {
        step_name: "What do you need doing in your loft?",
        step_options: [
          {
            option_name: "Board out loft",
            option_description:
              "Board out and pull down ladder; making loft accessible and suitable for storage.",
          },
          {
            option_name: "Boarding plus additional work",
            option_description:
              "Making loft accessible including additional work such as a velux, painting & decorating, fixed staircase etc.",
          },
        ],
      },
    },
    {
      option_name: "Fit a skylight",
      option_description:
        "Add one or more windows to the roof, e.g. velux windows.",
    },
  ],
};

const newBuildBudget: TStep = {
  step_name: "Roughly what is the budget?",
  step_options: [
    {
      option_name: "Less than £200k",
    },
    {
      option_name: "£200k - £500k",
    },
    {
      option_name: "£500k - £1m",
    },
    {
      option_name: "More than £1m",
    },
    {
      option_name: "I don't know at this stage",
    },
  ],
};

const planningPermission: TStep = {
  step_name: "Do you have planning permission?",
  step_options: [
    {
      option_name: "Yes",
      substeps: newBuildBudget,
    },
    {
      option_name: "In progress",
      substeps: newBuildBudget,
    },
    {
      option_name: "Not applied for yet",
      substeps: newBuildBudget,
    },
  ],
};

export const newBuildSteps: TStep = {
  step_name: "Do you own the land you plan to build on?",
  step_options: [
    {
      option_name: "Yes",
      substeps: planningPermission,
    },
    {
      option_name: "I will - purchase in progress",
      substeps: planningPermission,
    },
    {
      option_name: "No",
      substeps: planningPermission,
    },
  ],
};

const refurbishmentProperty: TStep = {
  step_name: "Do you own the property?",
  step_options: [
    {
      option_name: "Yes",
    },
    {
      option_name: "I will - purchase in progress",
    },
    {
      option_name: "No",
    },
  ],
};

const refurbishType: TStep = {
  step_name: "What type of job is it?",
  step_options: [
    {
      option_name: "Small refurbishment",
      option_description: "e.g. no more than one room needs refurbing",
    },
    {
      option_name: "Large refurbishment",
      option_description:
        "e.g. more than one room or multiple jobs throughout property",
    },
    {
      option_name: "Full refurbishment",
      option_description: "e.g. whole house needs refurbishing",
    },
  ],
};

export const refurbishmentSteps: TStep = {
  step_name:
    "Does your job involve changing the purpose or structure of a room?",
  step_description:
    "e.g. converting a garage or removing a wall to combine rooms",
  step_options: [
    {
      option_name: "Yes",
      substeps: {
        step_name: "How extensive is your conversion job?",
        step_options: [
          {
            option_name: "Single room conversion",
            option_description:
              "e.g. join 2 rooms together, install necessary utilities",
            substeps: refurbishmentProperty,
          },
          {
            option_name: "Small garage / outbuilding conversion",
            option_description:
              "e.g. convert small outbuilding to living space",
            substeps: refurbishmentProperty,
          },
          {
            option_name: "Multiple rooms or large outbuilding",
            option_description:
              "e.g. convert a large detached garage into a self sufficient flat",
            substeps: refurbishmentProperty,
          },
          {
            option_name: "Whole property conversion",
            option_description:
              "e.g. major conversion works to one or more property, including important structural changes",
            substeps: refurbishmentProperty,
          },
        ],
      },
    },
    {
      option_name: "No",
      substeps: {
        step_name: "Do you own the property?",
        step_options: [
          {
            option_name: "Yes",
            substeps: refurbishType,
          },
          {
            option_name: "I will - purchase in progress",
            substeps: refurbishType,
          },
          {
            option_name: "No - I'm posting on behalf of the property owner",
            substeps: refurbishType,
          },
          {
            option_name: "It's a commercial property",
            substeps: refurbishType,
          },
        ],
      },
    },
  ],
};

const typeOfProperty: TStep = {
  step_name: "What type of property is the system for?",
  step_options: [
    {
      option_name: "Residential home",
    },
    {
      option_name: "Commercial property",
    },
  ],
};

const systemPurchased: TStep = {
  step_name: "Have you purchased the system already?",
  step_options: [
    {
      option_name: "Already purchased, installation only",
      substeps: typeOfProperty,
    },
    {
      option_name: "I know what I want, need the installer to buy",
      substeps: typeOfProperty,
    },
    {
      option_name: "No, I need help deciding",
      substeps: typeOfProperty,
    },
  ],
};

export const securitySystemSteps: TStep = {
  step_name: "What type of security system?",
  step_options: [
    {
      option_name: "Security alarm system",
      substeps: {
        step_name: "What service do you require?",
        step_options: [
          {
            option_name: "Installation",
            substeps: {
              step_name: "What type of security system?",
              step_options: [
                {
                  option_name: "Wired",
                  substeps: systemPurchased,
                },
                {
                  option_name: "Wireless",
                  substeps: systemPurchased,
                },
                {
                  option_name: "I'm not sure",
                  substeps: systemPurchased,
                },
              ],
            },
          },
          {
            option_name: "Servicing / repair",
            substeps: typeOfProperty,
          },
          {
            option_name: "Removal",
            substeps: typeOfProperty,
          },
        ],
      },
    },
    {
      option_name: "CCTV / Smart camera",
      substeps: {
        step_name: "What type of security camera service do you require?",
        step_options: [
          {
            option_name: "Installation",
            substeps: {
              step_name: "What type of camera system?",
              step_options: [
                {
                  option_name: "Wired",
                  substeps: systemPurchased,
                },
                {
                  option_name: "Wireless",
                  substeps: systemPurchased,
                },
                {
                  option_name: "I'm not sure",
                  substeps: systemPurchased,
                },
              ],
            },
          },
          {
            option_name: "Servicing / repair",
            substeps: typeOfProperty,
          },
          {
            option_name: "Removal",
            substeps: typeOfProperty,
          },
        ],
      },
    },
    {
      option_name: "Entry system",
    },
    {
      option_name: "Smoke alarms",
    },
    {
      option_name: "Security lights",
    },
    {
      option_name: "Locks",
    },
  ],
};
