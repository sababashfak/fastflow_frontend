import Loader from "./Loader";

type FullpageLoaderProps = {
  message?: string;
  className?: string;
};

const FullpageLoader: React.FC<FullpageLoaderProps> = ({
  message,
  className,
}) => {
  return (
    <div className="flex min-h-[calc(100dvh-80px)] items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <Loader className={className} />
        {message && <p className="text-center">{message}</p>}
      </div>
    </div>
  );
};

export default FullpageLoader;
