interface DashBookingPhotosProps {
  photos: string[];
}

const DashBookingPhotos: React.FC<DashBookingPhotosProps> = ({ photos }) => {
  const photoUrls = photos.map(
    (photo) => `${import.meta.env.VITE_BACKEND_URL}/images/${photo}`,
  );

  return (
    <div className="mt-3 rounded-md bg-white p-3 sm:p-5">
      <div className="">
        <h3 className="text-lg font-semibold">Attachments</h3>
        <div className="mt-2 flex flex-wrap gap-3">
          {photoUrls.map((photo: any) => (
            <img
              key={photo}
              src={photo}
              alt="booking"
              className="size-40 rounded-md object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashBookingPhotos;
