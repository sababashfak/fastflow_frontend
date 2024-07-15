import AboutUs from "@/components/Home/AboutUs";
import Blog from "@/components/Home/Blog";
import ContactCallback from "@/components/Home/ContactCallback";
import FAQs from "@/components/Home/FAQs";
import Hero from "@/components/Home/Hero";
import OurServices from "@/components/Home/OurServices";
import Projects from "@/components/Home/Projects";
import RequestCallback from "@/components/Home/RequestCallback";
import Reviews from "@/components/Home/Reviews";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import WorkingProcess from "@/components/Home/WorkingProcess";

const Home = () => {
  return (
    <main>
      <Hero />
      <AboutUs />
      <OurServices />
      <WhyChooseUs />
      <RequestCallback />
      <WorkingProcess />
      <Projects />
      <Reviews />
      <Blog />
      <FAQs />
      <ContactCallback />
    </main>
  );
};

export default Home;
