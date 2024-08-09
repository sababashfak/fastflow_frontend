import { Link } from "react-router-dom";

const AboutCallback = () => {
  return (
    <section className="bg-[#008FD3] py-12">
      <div className="container">
        <div className="flex flex-col items-center gap-x-10 gap-y-5 md:flex-row lg:justify-between">
          <div className="max-w-3xl text-center text-white md:text-left">
            <h2 className="mb-4 text-balance text-2xl font-bold uppercase">
              Entrust Your Project to Our Experts
            </h2>
            <p className="">
              Rely on our skilled professionals for top-notch heating, plumbing,
              and reconstruction services. We ensure high-quality results and
              dedicated support from start to finish.
            </p>
          </div>
          <Link
            className="block shrink-0 rounded-sm bg-white px-5 py-3.5 font-semibold uppercase text-dark duration-300 hover:bg-primary"
            to="/book-service"
          >
            Book a Service
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutCallback;
