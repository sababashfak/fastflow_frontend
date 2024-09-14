import ScrollToPageTop from "@/components/shared/ScrollToPageTop";

const GetAQuote = () => {
  return (
    <main>
      <ScrollToPageTop />
      <section className="bg-[url(/quote-cover.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="bg-black/80 py-20">
          <div className="container text-center">
            <h3 className="text-3xl font-bold text-white lg:text-4xl">
              Get a <span className="text-primary">Quote</span>
            </h3>
          </div>
        </div>
      </section>
      <section className="py-20">
        <h3 className="text-center">Quote Form</h3>
      </section>
    </main>
  );
};

export default GetAQuote;
