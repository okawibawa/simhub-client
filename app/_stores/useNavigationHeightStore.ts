import { create } from "zustand";

interface NavigationHeightStore {
  navigationBarHeight: number;
  setNavigationBarHeight: (navigationBarHeight: number) => void;
}

export const useNavigationHeightStore = create<NavigationHeightStore>(
  (set) => ({
    navigationBarHeight: 78,
    setNavigationBarHeight: (navigationBarHeight: number) =>
      set({ navigationBarHeight }),
  })
);
