import { Link } from "react-router-dom";

const ContactCallback = () => {
  return (
    <section className="relative bg-white">
      <div className="container">
        <div className="grid-cols-1 md:grid-cols-2">
          <div className="max-w-xs py-10 md:py-14 lg:max-w-md lg:py-24 xl:max-w-xl xl:py-[220px]">
            <h4 className="text-sm font-semibold uppercase text-gray-500 xl:text-base">
              Unmatched Qualitry
            </h4>
            <h3 className="mt-3 text-[22px] font-bold uppercase leading-tight text-dark lg:text-3xl xl:text-[40px] xl:leading-tight">
              We Make Your Home Look Modern and Safe
            </h3>
            <Link
              to="/contact"
              className="mt-5 inline-block bg-primary px-4 py-3.5 text-sm font-semibold uppercase duration-300 hover:bg-primary/90 xl:mt-7 xl:px-5 xl:py-4 xl:text-base"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
      <div className="aspect-[4/3] w-full md:absolute md:bottom-0 md:right-0 md:h-full md:w-1/2 xl:w-[45%]">
        <img
          className="h-full w-full object-cover"
          src="/contact-callback.jpg"
          alt="Contact Callback"
        />
      </div>
    </section>
  );
};

export default ContactCallback;
