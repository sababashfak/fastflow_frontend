import { Link } from "react-router-dom";
import useServices from "../../hooks/useServices";
import SectionTop from "../shared/SectionTop";
import ServiceCard from "./ServiceCard";

const OurServices = () => {
  const services = useServices();

  return (
    <section>
      <div className="container py-16 md:py-20">
        <SectionTop
          title="Our Services"
          subtitle="We provide the best services for our clients"
        />
        <div className="grid grid-cols-1 gap-4 pt-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
      <div className="z-10 bg-[linear-gradient(to_right,#222_50%,#333_50%,#333_100%)]">
        <div className="container relative z-10 flex flex-wrap items-center justify-between gap-x-40 gap-y-5 bg-[linear-gradient(to_right,#222_75%,#333_75%,#333_100%)] py-10 lg:py-12">
          <h4 className="flex items-center gap-5 bg-[linear-gradient(to_right,#333_50%,#333_50%,#3330_50%,#0000_100%)] p-2 md:max-w-[70%]">
            <span className="block h-[1px] w-10 bg-primary"></span>
            <span className="font-semibold text-white xl:text-lg">
              You need more information about our services and company
              capabilities?
            </span>
          </h4>
          <Link
            to="/services"
            className="bg-primary p-3 text-sm font-semibold text-dark duration-100 hover:bg-primary/90"
          >
            View All Services
          </Link>
          <div className="absolute left-[75%] top-1/2 z-[-1] h-10 w-1.5 -translate-x-1/2 bg-primary md:-translate-y-1/2"></div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
