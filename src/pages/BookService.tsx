import useCategories from "@/hooks/useCategories";
import { useParams } from "react-router-dom";

const BookService = () => {
  const { categorySlug } = useParams();
  const categories = useCategories(false, categorySlug);
  const category = categories[0] || {};

  const steps1 = category.steps?.[0];

  return (
    <main>
      <section className="bg-[url(/book-service-cover.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="bg-black/65 py-20 backdrop-blur-lg">
          <div className="container text-center">
            <h3 className="text-3xl font-bold text-white lg:text-4xl">
              Book a <span className="text-primary">{category.cat_name}</span>{" "}
              Service
            </h3>
          </div>
        </div>
      </section>
      <section className="bg-white py-16 md:py-20">
        <div className="container">
          <h2 className="mb-5 text-2xl font-semibold">{steps1?.step_name}</h2>
          <p className="">{steps1?.step_description}</p>
          <div className="max-w-md space-y-3">
            {steps1?.step_option?.map((option) => {
              return (
                <label
                  key={option.option_name}
                  className="flex cursor-pointer items-center gap-3 rounded-[4px] border p-3 hover:border-gray-700 has-[input:checked]:border-[#008FD3]"
                >
                  <input name={categorySlug} type="radio" />
                  {option.option_name}
                </label>
              );
            })}
          </div>
          <div className="mt-5 flex items-center gap-3">
            <button className="rounded-[4px] border-2 border-[#008FD3]/60 px-5 py-2.5 font-medium text-[#008FD3]">
              Back
            </button>
            <button className="rounded-[4px] border-2 border-[#008FD3] bg-[#008FD3] px-4 py-2.5 font-medium text-white">
              Continue
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BookService;
