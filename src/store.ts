import { create } from "zustand";
import { TUser } from "./interfaces/user";

export interface TStore {
  isLoggedIn: boolean;
  user: TUser | null;
  setUser: (user: TStore["user"]) => void;
}

const useStore = create<TStore>((set) => {
  return {
    isLoggedIn: false,
    user: null,
    setUser: (user: TUser | null) => {
      if (user) {
        set({ user, isLoggedIn: true });
      } else {
        set({ user: null, isLoggedIn: false });
      }
    },
  };
});

export default useStore;
