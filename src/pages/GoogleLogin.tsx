import { getLoggedInUser } from "@/api/auth";
import FullpageLoader from "@/components/shared/FullpageLoader";
import useStore from "@/store";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

const GoogleLogin = () => {
  const navigate = useNavigate();
  const { jwtToken } = useParams();
  const setUser = useStore((state) => state.setUser);
  const queryClient = useQueryClient();

  const fetchUser = async () => {
    const result = await getLoggedInUser();

    if (result.success) {
      const user = result.data?.user;

      toast.success("Logged in successfully!", {
        description: "Redirecting to dashboard...",
      });

      queryClient.setQueryData(["user", "me"], result);
      setUser(user);

      navigate(`/dashboard/${user.role}`);
    } else {
      toast.error("Failed to login with Google");

      navigate("/login");
    }
  };

  useEffect(() => {
    if (!jwtToken) return;

    localStorage.setItem("token", jwtToken!);

    queryClient.invalidateQueries({
      queryKey: ["user", "me"],
    });

    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jwtToken]);

  return <FullpageLoader />;
};

export default GoogleLogin;
