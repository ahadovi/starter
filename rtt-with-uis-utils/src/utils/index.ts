import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes));
}

//= Dynamic url for local list of images
export function getImageUrl(name: string) {
  return new URL(`../assets/${name}`, import.meta.url).href;
}
