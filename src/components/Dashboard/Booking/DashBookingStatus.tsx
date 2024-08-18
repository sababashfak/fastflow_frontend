import { updateBooking } from "@/api/booking";
import { Button } from "@/components/ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

interface DashBookingStatusProps {
  bookingId: string;
}

const DashBookingStatus: React.FC<DashBookingStatusProps> = ({ bookingId }) => {
  const queryClient = useQueryClient();

  const updateMutation = useMutation({
    mutationFn: (data) => updateBooking(bookingId, data),
    onSuccess: (result) => {
      if (result.success) {
        toast.success("Booking updated successfully");

        queryClient.invalidateQueries({
          queryKey: ["bookings"],
        });
      } else {
        toast.error("Failed to update booking", {
          description: result.message || "An error occurred",
        });
      }
    },
  });

  const handleMutation = (status: string) => {
    const updateData = {
      status,
    };

    updateMutation.mutate(updateData as any);
  };

  return (
    <div className="mb-3 flex items-center justify-between gap-10 rounded-md bg-white p-3 sm:px-5">
      <p>A new booking has been made. Do you want to approve or reject it?</p>
      <div className="flex items-center gap-2">
        <Button
          onClick={() => handleMutation("rejected")}
          className="text-[15px]"
          variant={"destructive"}
          disabled={updateMutation.isPending}
        >
          Reject
        </Button>
        <Button
          onClick={() => handleMutation("approved")}
          className="bg-emerald-500 text-[15px] hover:bg-emerald-500/90"
          variant={"default"}
          disabled={updateMutation.isPending}
        >
          Approve
        </Button>
      </div>
    </div>
  );
};

export default DashBookingStatus;
