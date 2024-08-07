import {
  FiChevronLeft,
  FiChevronRight,
  FiChevronsLeft,
  FiChevronsRight,
} from "react-icons/fi";
import { useSearchParams } from "react-router-dom";

interface PaginationProps {
  hasPrevPage: boolean;
  hasNextPage: boolean;
  lastPage: number;
  isFetching: boolean;
  currentPage: number;
}

interface PaginationBtnProps {
  page: number;
  icon: JSX.Element;
  disabled: boolean;
  handlePageChange: (page: string) => void;
}

const PaginationBtn: React.FC<PaginationBtnProps> = ({
  page,
  icon,
  disabled,
  handlePageChange,
}) => {
  return (
    <button
      className="bg-secondary p-3 text-lg text-white transition-all duration-200 first:rounded-l-md last:rounded-r-md disabled:pointer-events-none disabled:opacity-50 sm:text-[19px] lg:hover:bg-[#3d3d3d]"
      disabled={disabled}
      onClick={() => handlePageChange(String(page))}
    >
      {icon}
    </button>
  );
};

const Pagination: React.FC<PaginationProps> = ({
  hasPrevPage,
  hasNextPage,
  lastPage,
  isFetching,
  currentPage,
}) => {
  const [, setSearchParams] = useSearchParams();

  const handlePageChange = (page: string) => {
    setSearchParams((prev) => {
      prev.set("page", page);

      return prev;
    });
  };

  return (
    <div className="mt-8">
      <div className="flex justify-center gap-[1px]">
        <PaginationBtn
          page={1}
          icon={<FiChevronsLeft />}
          disabled={!hasPrevPage || isFetching}
          handlePageChange={handlePageChange}
        />
        <PaginationBtn
          page={currentPage - 1}
          icon={<FiChevronLeft />}
          disabled={!hasPrevPage || isFetching}
          handlePageChange={handlePageChange}
        />
        <p className="flex items-center justify-center gap-1 bg-secondary px-3 font-medium text-white sm:min-w-[80px]">
          {currentPage}
          <span className="opacity-80">/</span>
          {lastPage}
        </p>
        <PaginationBtn
          page={currentPage + 1}
          icon={<FiChevronRight />}
          disabled={!hasNextPage || isFetching}
          handlePageChange={handlePageChange}
        />
        <PaginationBtn
          page={lastPage}
          icon={<FiChevronsRight />}
          disabled={!hasNextPage || isFetching}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Pagination;
