"use client"

import { useState, useEffect } from "react"
import {
  Heart,
  ShieldCheck,
  Truck,
  BadgeCheck,
  PhoneCall,
  MessageSquare,
  Headphones,
} from "lucide-react"

export default function ProductOptions({ product }: any) {
  const isMask =
    product.category === "nasal-mask" ||
    product.category === "full-face-mask" ||
    product.category === "nasal-pillow-mask"

  const [selectedSize, setSelectedSize] = useState("Medium")
  const [wish, setWish] = useState(false)

  const handleWishlist = () => {
    const wishlist = JSON.parse(
      localStorage.getItem("wishlist") || "[]"
    )

    const exists = wishlist.find(
      (item: any) => item.slug === product.slug
    )

    if (exists) {
      const updated = wishlist.filter(
        (item: any) => item.slug !== product.slug
      )

      localStorage.setItem("wishlist", JSON.stringify(updated))
      setWish(false)
    } else {
      localStorage.setItem(
        "wishlist",
        JSON.stringify([...wishlist, product])
      )
      setWish(true)
    }
  }

  useEffect(() => {
    const wishlist = JSON.parse(
      localStorage.getItem("wishlist") || "[]"
    )

    const exists = wishlist.find(
      (item: any) => item.slug === product.slug
    )

    setWish(!!exists)
  }, [product.slug])

  const whatsappMessage = encodeURIComponent(
    `Hello Respisleep, I would like to inquire about "${product.name}" (${product.category}).`
  )

  return (
    <div className="mt-6">
      {/* Wishlist */}
      <div className="flex items-center justify-between">
        <button
          onClick={handleWishlist}
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-red-500 transition cursor-pointer"
        >
          <Heart
            className={`w-5 h-5 ${
              wish ? "fill-red-500 text-red-500" : ""
            }`}
          />
          {wish ? "Wishlisted" : "Add to Wishlist"}
        </button>

        <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Available for Inquiry
        </span>
      </div>

      {/* MASK SIZE SELECTOR */}
      {isMask && (
        <div className="mt-6">
          <h3 className="font-medium text-gray-900 mb-2">Select Size</h3>
          <div className="grid grid-cols-3 gap-3">
            {["Small", "Medium", "Large"].map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => setSelectedSize(size)}
                className={`py-2.5 rounded-xl border text-sm font-medium transition cursor-pointer ${
                  selectedSize === size
                    ? "border-[#0391B6] bg-cyan-50 text-[#0391B6] font-semibold"
                    : "border-gray-200 hover:border-gray-300 text-gray-700"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* INQUIRY CONTACT CARD */}
      <div className="mt-7 p-6 rounded-3xl bg-gradient-to-br from-[#EAF8FC] via-white to-blue-50/50 border border-[#BFEAF3] shadow-sm space-y-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
            <Headphones className="w-5 h-5 text-[#0391B6]" />
            Direct Team Inquiry
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
            Contact our sleep therapy and respiratory care specialists for device consultation, setup assistance, and delivery details.
          </p>
        </div>

        {/* CALL BUTTON */}
        <a
          href="tel:7077718897"
          className="w-full py-3.5 px-5 rounded-2xl font-bold bg-[#0391B6] hover:bg-[#027A99] text-white shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-3 text-base group cursor-pointer"
        >
          <PhoneCall className="w-5 h-5 transition-transform group-hover:scale-110" />
          <span>Call to Inquire: 7077718897</span>
        </a>

        {/* WHATSAPP BUTTON */}
        <a
          href={`https://wa.me/917077718897?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3 px-5 rounded-2xl font-semibold bg-[#25D366] hover:bg-[#1DA851] text-white shadow-sm hover:shadow transition-all duration-200 flex items-center justify-center gap-2.5 text-sm cursor-pointer"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Chat on WhatsApp</span>
        </a>
      </div>

      {/* TRUST BADGES */}
      <div className="mt-8 border-t border-gray-100 pt-6 space-y-3.5">
        <div className="flex items-center gap-3 text-sm text-gray-700">
          <Truck className="w-5 h-5 text-[#0391B6]" />
          <span>Fast pan-India delivery & doorstep support</span>
        </div>

        <div className="flex items-center gap-3 text-sm text-gray-700">
          <ShieldCheck className="w-5 h-5 text-[#0391B6]" />
          <span>Personalized therapy guidance & device setup</span>
        </div>

        <div className="flex items-center gap-3 text-sm text-gray-700">
          <BadgeCheck className="w-5 h-5 text-[#0391B6]" />
          <span>100% Genuine medical-grade equipment</span>
        </div>
      </div>
    </div>
  )
}