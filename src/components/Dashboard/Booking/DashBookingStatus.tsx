import { Button } from "@/components/ui/button";

interface DashBookingStatusProps {
  name: string;
  bookingId: string;
}

const DashBookingStatus: React.FC<DashBookingStatusProps> = ({ name }) => {
  return (
    <div className="mb-3 flex items-center justify-between gap-10 rounded-md bg-white p-3 sm:px-5">
      <p>
        <span className="font-medium text-blue-500">{name}</span> has requested
        a booking
      </p>
      <div className="flex items-center gap-2">
        <Button className="text-[15px]" variant={"destructive"}>
          Reject
        </Button>
        <Button
          className="bg-emerald-500 text-[15px] hover:bg-emerald-500/90"
          variant={"default"}
        >
          Accept
        </Button>
      </div>
    </div>
  );
};

export default DashBookingStatus;
