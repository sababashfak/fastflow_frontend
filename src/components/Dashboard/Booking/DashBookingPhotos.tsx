import FsLightbox from "fslightbox-react";
import { useState } from "react";
import { BsArrowsFullscreen } from "react-icons/bs";

interface DashBookingPhotosProps {
  photos: string[];
}

const DashBookingPhotos: React.FC<DashBookingPhotosProps> = ({ photos }) => {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  const photoUrls = photos.map(
    (photo) => `${import.meta.env.VITE_BACKEND_URL}/images/${photo}`,
  );

  const openLightboxOnSlide = (slide: number) => {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide,
    });
  };

  return (
    <div className="mt-3 rounded-md bg-white p-3 sm:p-5">
      <div className="">
        <h3 className="mb-3 text-xl font-semibold">Attachments</h3>

        <div className="flex flex-wrap gap-3">
          {photoUrls.map((photo, index) => (
            <div className="relative overflow-hidden rounded-md" key={index}>
              <img
                src={photo}
                alt="Attachment"
                className="size-40 rounded-md object-cover"
              />
              <div
                onClick={() => openLightboxOnSlide(index + 1)}
                className="absolute left-0 top-0 flex h-full w-full cursor-pointer items-center justify-center bg-black/60 opacity-0 duration-300 hover:opacity-100"
              >
                <BsArrowsFullscreen className="text-2xl text-white" />
              </div>
            </div>
          ))}
        </div>
        <FsLightbox
          toggler={lightboxController.toggler}
          sources={photoUrls}
          slide={lightboxController.slide}
        />
      </div>
    </div>
  );
};

export default DashBookingPhotos;
