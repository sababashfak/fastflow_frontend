import { IoCloseOutline } from "react-icons/io5";

type BookServiceInpImageProps = {
  photos: string[] | null;
  setPhotos: React.Dispatch<React.SetStateAction<string[] | null>>;
};

const BookServiceInpImage: React.FC<BookServiceInpImageProps> = ({
  photos,
  setPhotos,
}) => {
  // const [selectedImages, setSelectedImages] = useState<string[] | null>(null);

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
          onChange={(e) => {
            const files = e.target.files;
            if (files) {
              setPhotos((prev) => {
                const newImages = [...(prev || [])];

                for (let i = 0; i < files.length; i++) {
                  newImages.push(URL.createObjectURL(files[i]));
                }

                return newImages;
              });
            }
          }}
        />
      </label>

      {photos && photos.length > 0 && (
        <div className="mt-8 flex flex-wrap gap-5">
          {photos.map((image, index) => (
            <div key={index} className="relative">
              <img
                className="size-24 rounded-[4px] object-cover"
                src={image}
                alt="Selected image"
              />
              <button
                onClick={() => {
                  setPhotos((prev) => {
                    const newImages = [...(prev || [])];
                    newImages.splice(index, 1);
                    return newImages;
                  });
                }}
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
