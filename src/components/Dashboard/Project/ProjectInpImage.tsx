import { cn } from "@/lib/utils";
import { useMemo } from "react";
import { IoCloseOutline } from "react-icons/io5";

interface ProjectInpImageProps {
  label: string;
  image: File | null;
  setImage: React.Dispatch<React.SetStateAction<File | null>>;
  defaultImage?: string;
  disabled?: boolean;
}

const ProjectInpImage: React.FC<ProjectInpImageProps> = ({
  label,
  image,
  setImage,
  defaultImage,
  disabled,
}) => {
  const displayUrl = useMemo(() => {
    if (!image && !defaultImage) {
      return null;
    }

    if (image) {
      return URL.createObjectURL(image);
    }

    return `${import.meta.env.VITE_BACKEND_URL}/images/${defaultImage}`;
  }, [image, defaultImage]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setImage(files[0]);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
  };

  return (
    <div className={cn(disabled && "pointer-events-none opacity-70")}>
      <h3 className="mb-1.5 text-sm font-medium">{label}</h3>
      <label className="flex cursor-pointer items-center gap-x-5 border-2 border-dashed px-5 py-3.5">
        <img
          className="h-12"
          src={"/images/icons/photo-upload.png"}
          alt="Upload photo"
        />
        <span className="text-gray-600">Select an image to upload</span>
        <input
          type="file"
          accept="image/png,image/jpg,image/jpeg,application/pdf"
          hidden
          onChange={handleFileChange}
        />
      </label>
      {!!displayUrl && (
        <div className="relative mt-6 w-24">
          <img
            className="size-24 rounded-[4px] object-cover"
            src={displayUrl}
            alt="Selected image"
          />
          {!!image && (
            <button
              onClick={() => handleRemoveImage()}
              className="absolute right-0 top-0 flex size-[30px] -translate-y-[12px] translate-x-[12px] items-center justify-center rounded-full border border-gray-500 bg-white text-lg text-gray-700"
            >
              <IoCloseOutline />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectInpImage;
