import BookServiceForm from "@/components/BookService/BookServiceForm";
import useCategories from "@/hooks/useCategories";
import { useParams } from "react-router-dom";

const BookService = () => {
  const { categorySlug } = useParams();
  const categories = useCategories(false, categorySlug);
  const category = categories[0] || {};

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
      <BookServiceForm category={category} />
    </main>
  );
};

export default BookService;
