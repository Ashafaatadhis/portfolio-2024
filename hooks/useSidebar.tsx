import { create } from "zustand";

type Active = {
  active: boolean;
  setActive: () => void;
};

const useSidebar = create<Active>()((set) => ({
  active: true,
  setActive: () => set((state) => ({ active: !state.active })),
}));
export default useSidebar;
