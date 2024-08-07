import { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

type BookServiceInpImageProps = {
  setPhotos: React.Dispatch<React.SetStateAction<File[]>>;
};

type SelectedImage = {
  file: File;
  display_url: string;
};

const BookServiceInpImage: React.FC<BookServiceInpImageProps> = ({
  setPhotos,
}) => {
  const [selectedImages, setSelectedImages] = useState<SelectedImage[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setSelectedImages((prev) => {
        return [
          ...prev,
          ...Array.from(files).map((file) => {
            return {
              file,
              display_url: URL.createObjectURL(file),
            };
          }),
        ];
      });
    }
  };

  const handleRemoveImage = (index: number) => {
    setSelectedImages((prev) => {
      const newImages = [...prev];
      newImages.splice(index, 1);
      return newImages;
    });
  };

  useEffect(() => {
    setPhotos(selectedImages.map((image) => image.file));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedImages]);

  return (
    <div>
      <div className="mb-5">
        <h3 className="text-lg font-semibold text-gray-900 sm:text-xl">
          Add images to your job
        </h3>
        <p className="text-gray-600">
          This will help your plumber understand your needs better
        </p>
      </div>
      <label className="flex cursor-pointer items-center gap-x-5 border-2 border-dashed px-5 py-3.5">
        <img
          className="h-12"
          src={"/icons/photo-upload.png"}
          alt="Upload photo"
        />
        <span className="text-gray-600">Select images to upload</span>
        <input
          multiple
          type="file"
          accept="image/png,image/jpg,image/jpeg,application/pdf"
          hidden
          onChange={handleFileChange}
        />
      </label>

      {selectedImages.length > 0 && (
        <div className="mt-8 flex flex-wrap gap-5">
          {selectedImages.map((image, index) => (
            <div key={index} className="relative">
              <img
                className="size-24 rounded-[4px] object-cover"
                src={image.display_url}
                alt="Selected image"
              />
              <button
                onClick={() => handleRemoveImage(index)}
                className="absolute right-0 top-0 flex size-[30px] -translate-y-[12px] translate-x-[12px] items-center justify-center rounded-full border border-gray-500 bg-white text-lg text-gray-700"
              >
                <IoCloseOutline />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookServiceInpImage;
