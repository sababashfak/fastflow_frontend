import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const AboutCompany = () => {
  return (
    <section className="py-16 sm:py-20">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <img
            className="aspect-[3/2] w-full object-cover md:aspect-auto md:h-full"
            src="/images/hero/slide-2.jpg"
            alt="About Company"
          />
          <div className="">
            <div className="mb-3 flex items-center gap-3 lg:mb-5">
              <span className="block h-0.5 w-10 bg-blue-400"></span>
              <p className="text-sm font-semibold text-blue-400">
                About Company
              </p>
            </div>
            <h2 className="text mb-3 text-3xl font-bold text-secondary lg:mb-5 lg:text-4xl lg:leading-snug">
              With More Than 03 Years Of Combined Experience
            </h2>
            <h4 className="mb-4 font-semibold text-secondary lg:mb-5 lg:text-lg">
              We take pride in solving any problem you may have in a quick,
              professional and friendly manner.
            </h4>
            <p className="mb-5 font-roboto text-gray-500 lg:mb-6 lg:text-[17px]">
              At Fastflow, our family-owned approach ensures top-notch heating
              and plumbing services with a personal touch. We combine expert
              craftsmanship with competitive pricing to deliver a higher
              standard of care that sets us apart. Trust us for quality service
              you can count on.
            </p>
            <Button
              className="h-auto rounded-none bg-blue-500 py-3.5 hover:bg-blue-600 lg:text-base"
              asChild
            >
              <Link to="/projects">View Projects</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
