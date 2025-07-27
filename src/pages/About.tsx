import AboutCallback from "@/components/About/AboutCallback";
import AboutCompany from "@/components/About/AboutCompany";
import Affiliations from "@/components/About/Affiliations";
import ContactUs from "@/components/About/ContactUs";
import CoreValues from "@/components/About/CoreValues";
import WhyChooseUs from "@/components/About/WhyChooseUs";
import EmployeeProfile from "@/components/About/EmployeeProfile";



const About = () => {
  return (
    <main>
      <section className="bg-[url(/about-cover.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="bg-black/80 py-20">
          <div className="container text-center">
            <h3 className="text-3xl font-bold text-white lg:text-4xl">
              About <span className="text-primary">Fastflow</span>
            </h3>
          </div>
        </div>
      </section>
      <AboutCompany />
      <EmployeeProfile />
      <AboutCallback />
      <WhyChooseUs />
      <CoreValues />
      <ContactUs />
      <Affiliations />
    </main>
  );
};

export default About;
