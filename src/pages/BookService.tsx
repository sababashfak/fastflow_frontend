import BookServiceForm from "@/components/BookService/BookServiceForm";
import useCategories from "@/hooks/useCategories";
import { TCategory } from "@/interfaces/categories";
import useStore from "@/store";
import { Link, useSearchParams } from "react-router-dom";

const BookService = () => {
  const user = useStore((state) => state.user);
  const isDisabled = !user?._id || user?.role === "admin";
  const [params] = useSearchParams();
  const categorySlug = params.get("category") || "";
  const categories = useCategories();
  const defaultCategory = !isDisabled
    ? categories.find((category) => category.cat_slug === categorySlug)
    : undefined;

  return (
    <main>
      <section className="bg-[url(/book-service-cover.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="bg-black/80 py-20">
          <div className="container text-center">
            <h3 className="text-3xl font-bold text-white lg:text-4xl">
              Book a <span className="text-primary">Service</span>
            </h3>
          </div>
        </div>
      </section>
      {isDisabled && (
        <div className="bg-primary">
          <div className="container">
            <p className="py-3 text-center text-black">
              {!user && (
                <>
                  You must be a logged in user to book a service:{" "}
                  <Link
                    className="ml-1 mt-1 inline-block rounded-md bg-purple-500 px-2 py-1 text-white duration-200 hover:bg-purple-600"
                    to="/login"
                  >
                    Login now
                  </Link>
                </>
              )}
              {user?.role === "admin" && (
                <>Booking a service is not possible with an admin account</>
              )}
            </p>
          </div>
        </div>
      )}
      <div
        aria-disabled={isDisabled}
        className="aria-disabled:pointer-events-none aria-disabled:opacity-70"
      >
        <BookServiceForm
          categories={categories as TCategory[]}
          defaultCategory={defaultCategory as TCategory}
        />
      </div>
    </main>
  );
};

export default BookService;
