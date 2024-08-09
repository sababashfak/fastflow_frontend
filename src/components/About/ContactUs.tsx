import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const ContactUs = () => {
  return (
    <section className="bg-[url(/about/contact-us.jpg)] bg-cover bg-fixed bg-center bg-no-repeat">
      <div className="bg-black/80 py-16 md:py-20">
        <div className="container">
          <div className="flex flex-col items-center text-center">
            <h3 className="mb-4 font-semibold uppercase text-white md:mb-5 md:text-lg">
              Want to Know More?
            </h3>
            <h2 className="mb-4 text-3xl font-semibold text-primary md:mb-6 md:text-4xl">
              We’re Here to Help
            </h2>
            <p className="mb-6 max-w-2xl font-roboto text-gray-100 md:mb-7 md:text-lg lg:max-w-3xl lg:text-[19px]">
              Have questions or need more information? Our team is ready to
              assist you. Reach out through our contact page, and we’ll get back
              to you as soon as possible.
            </p>
            <Button
              className="h-auto rounded-none bg-primary px-5 py-3.5 text-[15px] text-dark duration-200 hover:bg-primary/90 md:text-base"
              asChild
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
