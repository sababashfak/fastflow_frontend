import { getBookingById } from "@/api/booking";
import Loader from "@/components/shared/Loader";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import DashboardHeader from "../shared/DashboardHeader";
import DashBookingDetailsContent from "./DashBookingDetailsContent";

const DashBookingDetails = () => {
  const { bookingId } = useParams();

  const bookingQuery = useQuery({
    queryKey: ["bookings", bookingId],
    queryFn: () => getBookingById(bookingId!),
  });

  const booking = bookingQuery.data?.data?.booking || {};

  return (
    <div>
      <DashboardHeader title="Booking Details" desc="View booking details" />
      <div className="h-[calc(100dvh-80px)] w-full overflow-y-auto">
        <div className="p-3 sm:p-5 xl:p-10">
          {bookingQuery.isFetching && (
            <div className="flex flex-col items-center rounded-md bg-white py-16">
              <Loader className="w-[70px]" />
              <p className="mt-2 text-gray-600">Please wait</p>
            </div>
          )}
          {!bookingQuery.isFetching && booking.category && (
            <DashBookingDetailsContent booking={booking} />
          )}
        </div>
      </div>
    </div>
  );
};

export default DashBookingDetails;
