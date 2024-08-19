import SectionTop from "../shared/SectionTop";

const logos = ["/logo.png", "/logo.png", "/logo.png", "/logo.png", "/logo.png"];

const Affiliations = () => {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container">
        <SectionTop title="Our Affiliations" subtitle="Proudly Working With" />
        <div className="mt-12 flex flex-wrap justify-center gap-x-4 gap-y-5">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="h-[120px] w-[200px] border bg-white p-5 saturate-0 duration-300 hover:shadow-lg hover:saturate-100"
            >
              <img
                className="h-full w-full object-contain"
                src={logo}
                alt="Affiliation Logo"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Affiliations;
