import useAuth from "@/hooks/useAuth";
import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "sonner";
import FullpageLoader from "../shared/FullpageLoader";
import ScrollToTop from "../shared/ScrollToTop";

const AuthLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const { user, isFetching } = useAuth();

  if (isFetching) {
    return <FullpageLoader message="Checking authentication..." />;
  }

  if (!isFetching && user) {
    toast.success("Already logged in!", {
      description: "Redirecting to dashboard...",
    });

    return <Navigate to={`/dashboard/${user.role}`} />;
  }

  return (
    <main className="bg-[url(/auth-bg.jpg)] bg-cover bg-fixed bg-center bg-no-repeat">
      <ScrollToTop />
      <div className="w-full bg-black/40 py-16 sm:py-20">
        <div className="container flex justify-center">
          <div className="w-full max-w-lg rounded-md bg-white p-5 sm:p-7">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
