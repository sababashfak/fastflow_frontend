import { TCategory } from "@/interfaces/categories";
import { Link } from "react-router-dom";

type CategoriesListProps = {
  categories: TCategory[];
};

const CategoriesList: React.FC<CategoriesListProps> = ({ categories }) => {
  return (
    <div className="grid grid-cols-2 gap-1 sm:grid-cols-3 sm:gap-2 lg:grid-cols-6 lg:gap-3">
      {categories.map((category) => (
        <Link
          to={`/book-service/${category.cat_slug}`}
          className="flex flex-col items-center gap-3 rounded-lg bg-white p-4 shadow-sm xl:p-5"
          key={category.cat_slug}
        >
          <img
            src={`/categories/${category.cat_icon}`}
            alt={category.cat_name}
            className="size-9 object-contain object-center sm:size-10 xl:size-11"
          />
          <p className="text-center text-[13px] font-semibold sm:text-sm">
            {category.cat_name}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default CategoriesList;
