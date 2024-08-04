import useAuth from "@/hooks/useAuth";
import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "sonner";
import ScrollToTop from "../shared/ScrollToTop";

const AuthLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const { user, isFetching } = useAuth();

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (!isFetching && user) {
    toast.success("Already logged in!", {
      description: "Redirecting to dashboard...",
    });

    return <Navigate to={`/dashboard/${user.role}`} />;
  }

  return (
    <main className="bg-gray-50">
      <ScrollToTop />
      <div className="container">{children}</div>
    </main>
  );
};

export default AuthLayout;
