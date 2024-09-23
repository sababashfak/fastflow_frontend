import { verifyEmail } from "@/api/auth";
import { useQuery } from "@tanstack/react-query";
import { Navigate, useSearchParams } from "react-router-dom";
import { toast } from "sonner";

const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const verifyQuery = useQuery({
    queryKey: ["verify-email", token],
    queryFn: () => verifyEmail(token as string),
    enabled: !!token,
  });

  if (!token) {
    return <Navigate to="/" />;
  }

  if (!verifyQuery.isFetching && verifyQuery.data) {
    if (verifyQuery.data.success) {
      toast.success(verifyQuery.data.message || "Email verified successfully");

      return <Navigate to="/login" />;
    } else {
      toast.error("Verification failed", {
        description: verifyQuery.data.message || "Something went wrong",
      });

      return <Navigate to="/" />;
    }
  }

  return (
    <main className="bg-gray-200">
      <div className="container flex justify-center py-20">
        <div className="flex w-full max-w-sm flex-col items-center rounded-md bg-white px-5 py-7 text-center">
          <img src="/processing.png" alt="Processing" className="w-20" />
          <h2 className="mt-3 text-xl font-semibold text-secondary">
            Verifying Email
          </h2>
          <p className="mt-1.5 max-w-[280px] leading-tight text-gray-600">
            Please wait while we verify your email address.
          </p>
        </div>
      </div>
    </main>
  );
};

export default VerifyEmail;
