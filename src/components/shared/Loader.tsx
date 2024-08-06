import { cn } from "@/lib/utils";

type LoaderProps = {
  className?: string;
};

const Loader: React.FC<LoaderProps> = ({ className }) => {
  return (
    <img
      className={cn("size-20", className)}
      src="/spinner.svg"
      alt="Loading..."
    />
  );
};

export default Loader;
