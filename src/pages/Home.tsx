import AboutUs from "../components/Home/AboutUs";
import Hero from "../components/Home/Hero";
import NextSections from "../components/Home/NextSections";
import OurServices from "../components/Home/OurServices";
import Projects from "../components/Home/Projects";
import RequestCallback from "../components/Home/RequestCallback";
import WhyChooseUs from "../components/Home/WhyChooseUs";

const Home = () => {
  return (
    <main>
      <Hero />
      <AboutUs />
      <OurServices />
      <WhyChooseUs />
      <RequestCallback />
      <Projects />
      <NextSections />
    </main>
  );
};

export default Home;
