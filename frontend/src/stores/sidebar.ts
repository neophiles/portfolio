import { create } from "zustand"

interface SidebarStore {
  isOpen: boolean;
  toggleOpen: () => void;
}

const useSidebar = create<SidebarStore>((set) => ({
  isOpen: true,
  toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}))

export default useSidebar
