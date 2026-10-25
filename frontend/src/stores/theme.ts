import { create } from "zustand"
import { persist } from "zustand/middleware";

interface ThemeStore {
  isDark: boolean;
  toggleDark: () => void;
}

const useTheme = create<ThemeStore>()(
  persist(
    (set) => ({
      isDark: false,
      toggleDark: () => {
        set((state) => {
          const nextDark = !state.isDark
          document.documentElement.classList.toggle('dark', nextDark)
          return { isDark: nextDark }
        })
      },
    }),
    {
      name: 'theme-storage',
      onRehydrateStorage: () => (state) => {
        if (state) {
          document.documentElement.classList.toggle('dark', state.isDark)
        }
      }
    }
  )
)

export default useTheme
