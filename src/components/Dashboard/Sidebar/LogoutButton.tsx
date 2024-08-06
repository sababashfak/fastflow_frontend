import useStore from "@/store";
import { useQueryClient } from "@tanstack/react-query";
import { TbLogout2 } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const LogoutButton = () => {
  const navigate = useNavigate();
  const setUser = useStore((state) => state.setUser);

  const queryClient = useQueryClient();

  const handleLogout = () => {
    localStorage.removeItem("token");

    toast.success("Logout successful", {
      description: "You have been logged out successfully",
    });

    queryClient.invalidateQueries({
      queryKey: ["user", "me"],
    });

    setUser(null);

    return navigate("/");
  };

  return (
    <button
      className="hover:text-quaternary flex items-center gap-3 px-8 py-3 text-[#808080] duration-300"
      onClick={handleLogout}
    >
      <span className="text-xl">
        <TbLogout2 />
      </span>
      <span className="text-sm duration-300 sm:text-[15px]">Logout</span>
    </button>
  );
};

export default LogoutButton;
