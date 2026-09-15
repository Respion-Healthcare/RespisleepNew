"use client"

import { PhoneCall } from "lucide-react"

interface InquiryButtonProps {
  className?: string
  size?: "sm" | "md" | "lg"
  label?: string
  phoneNumber?: string
}

export default function InquiryButton({
  className = "",
  size = "sm",
  label = "Inquire Now",
  phoneNumber = "9937000606",
}: InquiryButtonProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    window.location.href = `tel:${phoneNumber}`
  }

  const sizeClasses = {
    sm: "text-xs py-2 px-3 gap-1.5",
    md: "text-sm py-2.5 px-4 gap-2",
    lg: "text-base py-3.5 px-6 gap-2.5",
  }[size]

  const iconSizes = {
    sm: 13,
    md: 16,
    lg: 18,
  }[size]

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={`Call to inquire at ${phoneNumber}`}
      className={`inline-flex items-center justify-center font-semibold rounded-xl bg-[#0391B6] hover:bg-[#027A99] text-white shadow-sm hover:shadow transition-all duration-200 active:scale-95 cursor-pointer ${sizeClasses} ${className}`}
    >
      <PhoneCall size={iconSizes} className="shrink-0" />
      <span>{label}</span>
    </button>
  )
}
