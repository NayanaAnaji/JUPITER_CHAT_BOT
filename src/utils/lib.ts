import { clsx, type ClassArray } from "clsx";
import { twMerge } from "tailwind-merge";
 
export const tw = (...inputs: ClassArray) => {
  return twMerge(clsx(inputs));
};
 
export const safeJSONParse = <T,>(value: string | null, fallback: T): T => {
  try {
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    console.warn("JSON parse error:", error);
    return fallback;
  }
};