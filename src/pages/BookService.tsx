import BookServiceForm from "@/components/BookService/BookServiceForm";
import useCategories from "@/hooks/useCategories";
import { useSearchParams } from "react-router-dom";

const BookService = () => {
  const [params] = useSearchParams();
  const categorySlug = params.get("category") || "";
  const categories = useCategories(false, "");
  const defaultCategory = categories.find(
    (category) => category.cat_slug === categorySlug,
  );

  return (
    <main>
      <section className="bg-[url(/book-service-cover.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="bg-black/65 py-20 backdrop-blur-lg">
          <div className="container text-center">
            <h3 className="text-3xl font-bold text-white lg:text-4xl">
              Book a <span className="text-primary">Service</span>
            </h3>
          </div>
        </div>
      </section>
      <BookServiceForm
        categories={categories}
        defaultCategory={defaultCategory}
      />
    </main>
  );
};

export default BookService;
