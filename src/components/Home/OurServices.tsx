import useServices from "../../hooks/useServices";
import SectionTop from "../shared/SectionTop";
import ServiceCard from "./ServiceCard";

const OurServices = () => {
  const services = useServices();

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container">
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
    </section>
  );
};

export default OurServices;
