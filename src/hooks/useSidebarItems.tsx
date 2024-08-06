import { RiArticleLine } from "react-icons/ri";

export type TSidebarItem = {
  title: string;
  path: string;
  icon: JSX.Element;
};

type UserRole = "admin" | "user";

type SidebarItemsProps = {
  [key in UserRole]: TSidebarItem[];
};

const sidebarItems: SidebarItemsProps = {
  admin: [
    {
      title: "Blog",
      path: "blog",
      icon: <RiArticleLine />,
    },
  ],
  user: [],
};

const useSidebarItems = (role: UserRole | undefined) => {
  if (role) {
    return sidebarItems[role];
  }

  return [];
};

export default useSidebarItems;
