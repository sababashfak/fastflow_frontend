import { cn } from "@/lib/utils";
import useStore from "@/store";
import { format } from "date-fns";
import DashBookingPhotos from "./DashBookingPhotos";
import DashBookingStatus from "./DashBookingStatus";

interface BookingDetailsProps {
  booking: any;
}

const styles = {
  approved: "bg-green-100 text-green-600",
  rejected: "bg-red-100 text-red-600",
  pending: "bg-blue-100 text-blue-600",
};

const DashBookingDetailsContent: React.FC<BookingDetailsProps> = ({
  booking,
}) => {
  const loggedInUser = useStore((state) => state.user);
  const {
    _id,
    email,
    phone,
    status,
    category,
    qnas,
    description,
    photos,
    createdAt,
  } = booking;

  return (
    <div className="mx-auto max-w-4xl">
      {status === "pending" && loggedInUser?.role === "admin" && (
        <DashBookingStatus bookingId={_id} />
      )}
      <div className="rounded-md bg-white">
        <div className="flex items-center justify-between gap-10 border-b p-3 sm:px-5">
          <div className="">
            <h2 className="text-xl font-semibold text-secondary sm:text-2xl">
              {category}
            </h2>
            <p className="text-[15px] text-gray-500 sm:text-base">
              at{" "}
              <span className="font-medium text-gray-600">
                {format(createdAt, "dd MMM yyyy")}
              </span>
            </p>
          </div>
          <span
            className={cn(
              "rounded-full px-2.5 pb-2 pt-1 text-[13px] font-medium",
              styles[status as keyof typeof styles],
            )}
          >
            {status}
          </span>
        </div>
        <div className="flex flex-col gap-y-5 p-3 sm:p-5">
          <div>
            <h3 className="font-medium">Contact Email</h3>
            <p className="break-words text-gray-600">{email}</p>
          </div>
          {phone && (
            <div>
              <h3 className="font-medium">Contact Phone</h3>
              <p className="text-gray-600">{phone}</p>
            </div>
          )}
          {qnas.map((qna: any, index: number) => {
            if (!qna.answer) return null;

            return (
              <div key={index}>
                <h3 className="font-medium">{qna.question}</h3>
                <p className="text-gray-600">{qna.answer}</p>
              </div>
            );
          })}
          <div>
            <h3 className="font-medium">Description</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
      </div>
      <DashBookingPhotos photos={photos} />
    </div>
  );
};

export default DashBookingDetailsContent;
