import { getLoggedInUser } from "@/api/auth";
import { TUser } from "@/interfaces/user";
import useStore from "@/store";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const useAuth = () => {
  const user = useStore((state) => state.user);
  const setUser = useStore((state) => state.setUser);

  const userQuery = useQuery({
    queryKey: ["user", "me"],
    queryFn: getLoggedInUser,
    enabled: user === null,
  });

  const isFetching = userQuery.isFetching;

  useEffect(() => {
    const apiData = userQuery.data;
    if (!apiData) return;

    if (apiData.success && apiData.data?.user) {
      setUser(apiData.data.user as TUser);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userQuery.data]);

  return {
    user,
    isFetching,
    isError: userQuery.isError,
    error: userQuery.error,
    refetchUser: userQuery.refetch,
  };
};

export default useAuth;
