import { create } from "zustand";

const useStore = create((set) => {
  return {
    isLoggedIn: false,
    user: null,
    isFirstVisit: true,
    setFirstVisit: () => set({ isFirstVisit: false }),
    setUser: (user) => {
      if (user) {
        set({ user, isLoggedIn: true });
      } else {
        set({ user: null, isLoggedIn: false });
      }
    },
  };
});

export default useStore;
