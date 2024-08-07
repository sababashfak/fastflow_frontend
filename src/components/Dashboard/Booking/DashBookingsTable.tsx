import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { LuEye } from "react-icons/lu";
import { Link } from "react-router-dom";
import DashDataTable from "../shared/DashDataTable";

interface DashBookingsTableProps {
  bookings: any[];
  isFetching: boolean;
}

const DashBookingsTable: React.FC<DashBookingsTableProps> = ({
  bookings,
  isFetching,
}) => {
  const columns = [
    {
      accessorKey: "user.name",
      header: "User",
      enableHiding: false,
    },
    {
      accessorKey: "category",
      header: "Category",
      enableHiding: false,
    },
    {
      accessorFn: (row: any) => row.photos.length,
      header: "Attachments",
      cell: (props: any) => (
        <span className="block min-w-[100px] text-nowrap">
          {props.getValue()} {props.getValue() > 1 ? "photos" : "photo"}
        </span>
      ),
    },
    {
      accessorKey: "createdAt",
      header: "Date",
      cell: (props: any) => {
        return (
          <span className="block min-w-[100px] text-nowrap">
            {format(props.getValue(), "dd MMM yyyy")}
          </span>
        );
      },
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: (props: any) => {
        const styles = {
          accepted: "bg-green-100 text-green-600",
          rejected: "bg-red-100 text-red-600",
          pending: "bg-blue-100 text-blue-600",
        };
        return (
          <span
            className={cn(
              "rounded-full px-2.5 pb-2 pt-1 text-[13px] font-medium",
              styles[props.getValue() as keyof typeof styles],
            )}
          >
            {props.getValue()}
          </span>
        );
      },
    },
    {
      accessorFn: (row: any) => row._id,
      header: "View",
      cell: (props: any) => (
        <div className="flex max-w-[200px] items-center gap-x-2">
          <Button
            className="text-secondary"
            variant="outline"
            size="icon"
            asChild
          >
            <Link to={props.getValue()}>
              <LuEye className="text-lg" />
            </Link>
          </Button>
        </div>
      ),
      enableHiding: false,
    },
  ];

  return (
    <DashDataTable
      columns={columns}
      data={bookings}
      isLoading={isFetching}
      filterPlaceholder="Search bookings..."
    />
  );
};

export default DashBookingsTable;
