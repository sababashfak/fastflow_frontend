const sections = [
  "Callback Form",
  "Projects",
  "Reviews",
  "Blog",
  "FAQ",
  "Contact Callback",
  "Footer",
];

const NextSections = () => {
  return (
    <section className="bg-primary py-16 text-dark">
      <div className="container">
        <h2 className="mb-5 border-b-2 border-dark pb-3 text-3xl font-bold">
          Upcoming Sections
        </h2>
        <ul className="flex flex-col items-start gap-5">
          {sections.map((section, index) => (
            <li
              key={section}
              className="border-2 border-dark/20 px-5 py-2 text-lg font-semibold"
            >
              {index + 1}. {section}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default NextSections;
