import { create } from "zustand"

interface State {
  isSideMenuOpen: boolean;
  openSideMenu: () => void;
  closeSideMenu: () => void;
  toggle: () => void;
}

export const useUIStore = create<State>()((set, get) => ({
  isSideMenuOpen: false,

  openSideMenu: () => set({ isSideMenuOpen: true }),
  closeSideMenu: () => set({ isSideMenuOpen: false }),
  toggle: () => set({ isSideMenuOpen: !(get().isSideMenuOpen) }),
}))