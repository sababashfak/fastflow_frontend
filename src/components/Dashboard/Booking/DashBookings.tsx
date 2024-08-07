import { getBookings } from "@/api/booking";
import useStore from "@/store";
import { useQuery } from "@tanstack/react-query";
import DashboardHeader from "../shared/DashboardHeader";
import DashBookingsTable from "./DashBookingsTable";

const DashBookings = () => {
  const user = useStore((state) => state.user);
  const bookingsQuery = useQuery({
    queryKey: ["bookings", user?._id],
    queryFn: () =>
      getBookings({
        populate: "user:name",
      }),
  });

  const bookings = bookingsQuery.data?.data?.bookings || [];

  return (
    <div>
      <DashboardHeader title="Bookings" desc="Manage booking list" />
      <div className="h-[calc(100dvh-80px)] w-full overflow-y-auto">
        <div className="p-3 sm:p-5 xl:p-10">
          <DashBookingsTable
            bookings={bookings}
            isFetching={bookingsQuery.isFetching}
          />
        </div>
      </div>
    </div>
  );
};

export default DashBookings;
