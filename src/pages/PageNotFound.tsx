const PageNotFound = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container flex justify-center">
        <h1 className="invisible absolute left-[-200px] top-[200px]">
          Page Not Found
        </h1>
        <img
          className="w-full max-w-3xl"
          src="/page-not-found.png"
          alt="Page not found"
        />
      </div>
    </section>
  );
};

export default PageNotFound;
