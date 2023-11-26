import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function zeroPad(num: number, places: number = 2) {
  return String(num).padStart(places, "0");
}

export function getTimeInUnit(item: number) {
  const seconds = item % 60;
  const minutes = Math.floor(item / 60) % 60;
  const hours = Math.floor(item / 3600) % 24;
  const days = Math.floor(item / 86400) % 30;
  const months = Math.floor(item / 2592000) % 12;
  const years = Math.floor(item / 31104000);

  return { seconds, minutes, hours, days, months, years };
}
