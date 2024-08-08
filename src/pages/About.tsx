import { Link } from "react-router-dom";

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
      <section className="bg-[#008FD3] py-12">
        <div className="container">
          <div className="flex flex-col items-center gap-x-10 gap-y-5 md:flex-row lg:justify-between">
            <div className="max-w-3xl text-center text-white md:text-left">
              <h2 className="mb-4 text-balance text-2xl font-bold uppercase">
                Entrust Your Project to Our Experts
              </h2>
              <p className="">
                Rely on our skilled professionals for top-notch heating,
                plumbing, and reconstruction services. We ensure high-quality
                results and dedicated support from start to finish.
              </p>
            </div>
            <Link
              className="block shrink-0 rounded-sm bg-white px-5 py-3.5 font-semibold uppercase text-dark duration-300 hover:bg-primary"
              to="/contact"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container h-40">
          <h2 className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quo
            inventore magni impedit vel eos! Placeat, dolores quibusdam? Ex
            ducimus incidunt numquam nesciunt praesentium laudantium quia
            quisquam nihil tempore fuga.
          </h2>
        </div>
      </section>
    </main>
  );
};

export default About;
