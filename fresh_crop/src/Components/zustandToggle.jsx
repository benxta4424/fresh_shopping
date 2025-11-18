import { create } from "zustand";

export const takeCareOfNav = create((set) => ({
    toggle: false,
    toggleTheme: () => {
        set((state) => ({
            toggle: !state.toggle
        }))
    }
}))