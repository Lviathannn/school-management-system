import { create } from "zustand";
import { persist } from "zustand/middleware";

type ThemeStore = {
  darkMode: boolean;
  toogleDarkMode: () => void;

};

type SidebarStore = {
  isOpen: boolean;
  toogleOpen: () => void;
  setClose: () => void;
};

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      darkMode: true,
      toogleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
    
    }),

    { name: "theme-app" },
  ),
);

export const useSidebarStore = create<SidebarStore>()(
    (set) => ({
      isOpen: false,
      toogleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
      setClose: () => set({ isOpen: false }),
    }),
)