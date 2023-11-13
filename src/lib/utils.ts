import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import Cookies from "js-cookie"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export default function protectedPage() {
  // const router = useRouter()
  const token = Cookies.get('Token')

  if (!token) {
    return false
  }
}
