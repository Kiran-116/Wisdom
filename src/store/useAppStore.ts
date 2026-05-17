import create from 'zustand';

type AppState = {
  freeQueriesLeft: number;
  isPremium: boolean;
  selectedCategory?: string;
  decrementQuery: () => void;
  upgradeToPremium: () => void;
  setCategory: (c?: string) => void;
};

const useAppStore = create<AppState>((set) => ({
  freeQueriesLeft: 5,
  isPremium: false,
  selectedCategory: undefined,
  decrementQuery: () => set((s) => ({ freeQueriesLeft: Math.max(0, s.freeQueriesLeft - 1) })),
  upgradeToPremium: () => set({ isPremium: true, freeQueriesLeft: 9999 }),
  setCategory: (c) => set({ selectedCategory: c })
}));

export default useAppStore;
