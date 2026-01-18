import { create } from 'zustand';

export const useNavigation = create((set) => ({
  navigating: false,
  pendingHref: null,

  start: (href) =>
    set({
      navigating: true,
      pendingHref: href ?? null,
    }),

  done: () =>
    set({
      navigating: false,
      pendingHref: null,
    }),
}));
