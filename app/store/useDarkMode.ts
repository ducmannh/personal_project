import { create } from "zustand";

interface DarkModeState {
  darkMode: boolean;
  toggleDarkMode: () => void;
  setDarkMode: (darkMode: boolean) => void;
}

const useDarkMode = create<DarkModeState>((set) => ({
  darkMode: false, // Giá trị mặc định
  toggleDarkMode: () =>
    set((state) => {
      const newMode = !state.darkMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return { darkMode: newMode };
    }),
  setDarkMode: (darkMode) => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    set({ darkMode });
  },
}));

export default useDarkMode;
