// src/store/useFunMode.ts
import { create } from "zustand";

// 1. Define the shape of your state
interface FunModeState {
  isFun: boolean;
  animate: boolean;
  start: any; // Ideally, replace 'any' with the specific type (e.g., number or string)
  end: any;
  triggerAnimation: (start: any, end: any) => void;
  stopAnimation: () => void;
}

// 2. Apply the interface to the create function
export const useFunMode = create<FunModeState>((set) => ({
  isFun: false,
  animate: false,
  start: null,
  end: null,

  triggerAnimation: (start, end) =>
    set({
      isFun: true,
      animate: true,
      start,
      end,
    }),

  stopAnimation: () =>
    set({
      animate: false,
    }),
}));
