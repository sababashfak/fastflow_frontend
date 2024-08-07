interface BookingDetailsProps {
  booking: any;
}

const DashBookingDetailsContent: React.FC<BookingDetailsProps> = ({
  booking,
}) => {
  const { status, photos } = booking;
  return (
    <div className="rounded-md bg-white p-5">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Booking Details</h2>
        <span className="text-sm text-gray-500">{status}</span>
      </div>
      <div className="mt-5">
        <h3 className="text-lg font-semibold">Photos</h3>
        <div className="mt-2 flex flex-wrap gap-3">
          {photos.map((photo: any) => (
            <img
              key={photo}
              src={`${import.meta.env.VITE_BACKEND_URL}/images/${photo}`}
              alt="booking"
              className="size-40 rounded-md object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashBookingDetailsContent;
