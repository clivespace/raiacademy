import { type ClassValue, clsx } from "clsx"

export function cn(...inputs: ClassValue[]) {
  const merged = clsx(inputs)
  return merged.trim()
}
