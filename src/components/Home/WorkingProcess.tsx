import SectionTop from "../shared/SectionTop";

const workProcess = [
  {
    title: "Consultation",
    description: "Discuss goals and project requirements.",
    icon: "/icons/work-process-1.png",
  },
  {
    title: "Detailed Proposal",
    description: "Present detailed plan and cost estimates.",
    icon: "/icons/work-process-2.png",
  },
  {
    title: "Project Execution",
    description: "Begin construction based on approved plan.",
    icon: "/icons/work-process-3.png",
  },
  {
    title: "Final Inspection",
    description: "Verify completion and quality of work.",
    icon: "/icons/work-process-4.png",
  },
];

const WorkingProcess = () => {
  return (
    <section className="pb-16 pt-4 md:pb-20">
      <div className="container">
        <SectionTop title="Working Process" subtitle="How We Work" />
        <div className="mx-auto mt-12 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4 text-center sm:grid-cols-2 sm:text-left md:max-w-3xl lg:max-w-none lg:grid-cols-4">
          {workProcess.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center rounded-md bg-white p-5 shadow-sm sm:items-start"
            >
              <img src={step.icon} alt="" className="size-16 object-contain" />
              <h3 className="mt-5 font-semibold text-dark">{step.title}</h3>
              <p className="mt-2 text-[15px] text-gray-500">
                {step.description}
              </p>
              <span className="absolute right-[-6px] top-[-12px] text-8xl font-extrabold text-gray-100">
                {index + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
