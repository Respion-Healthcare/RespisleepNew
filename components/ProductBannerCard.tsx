"use client"

import Image from "next/image"
import { Star } from "lucide-react"
import { Product } from "@/lib/products"
import InquiryButton from "@/components/InquiryButton"

interface Props {
  product: Product
}

export default function ProductBannerCard({ product }: Props) {
  /* ---------- DIFFERENT RATINGS & SOLD COUNTS ---------- */
  const productMeta: Record<
    string,
    {
      rating: number
      reviews: number
      sold: number
      bestseller?: boolean
    }
  > = {
    "resmed-airfit-f20-full-face-mask": {
      rating: 4.9,
      reviews: 321,
      sold: 920,
      bestseller: true,
    },
    "resmed-lumis-100-vpap-st": {
      rating: 4.7,
      reviews: 184,
      sold: 430,
    },
    "lumis-150-invasive-ventilator": {
      rating: 4.8,
      reviews: 267,
      sold: 510,
      bestseller: true,
    },
    "airmini-autoset-cpap-device": {
      rating: 4.6,
      reviews: 142,
      sold: 285,
    },
    "airsense-11-autoset-4g-tripack": {
      rating: 5,
      reviews: 412,
      sold: 1100,
      bestseller: true,
    },
    "airsense-11-autoset-single-pack": {
      rating: 4.5,
      reviews: 126,
      sold: 240,
    },
  }

  /* ---------- DEFAULT VALUES ---------- */
  const meta = productMeta[product.slug] || {
    rating: 4.7,
    reviews: 120,
    sold: 250,
    bestseller: false,
  }

  return (
    <div className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col justify-between h-full">
      {/* BEST SELLER TAG */}
      {meta.bestseller && (
        <div className="absolute z-10 top-4 left-4">
          <span className="bg-orange-100 text-orange-600 text-[11px] font-semibold px-3 py-1 rounded-md shadow-sm">
            Best Seller
          </span>
        </div>
      )}

      <div className="flex flex-col h-full">
        {/* IMAGE */}
        <div className="relative w-full h-[160px] sm:h-[240px] flex justify-center items-center bg-white overflow-hidden">
          <Image
            src={product.images[0]}
            alt={product.name}
            width={320}
            height={260}
            className="object-contain p-3 sm:p-6 transition duration-500 group-hover:scale-105"
          />
        </div>

        {/* CONTENT */}
        <div className="p-4 flex flex-col flex-grow justify-between">
          <div>
            {/* STAR RATING */}
            <div className="flex items-center gap-2 mb-3 flex-wrap">
              <div className="flex items-center gap-[2px]">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={14}
                    className={`transition ${
                      star <= Math.floor(meta.rating)
                        ? "fill-orange-400 stroke-orange-400"
                        : "fill-gray-200 stroke-gray-200"
                    }`}
                  />
                ))}
              </div>

              <span className="text-sm font-medium text-gray-700">
                {meta.rating}
              </span>

              <span className="text-sm text-gray-500">
                ({meta.reviews})
              </span>

              <span className="text-[11px] bg-green-100 text-green-700 px-2 py-[3px] rounded-full font-medium">
                {meta.sold}+ inquiries
              </span>
            </div>

            {/* PRODUCT NAME */}
            <h3 className="text-sm sm:text-lg font-semibold text-gray-900 leading-snug line-clamp-2 min-h-[42px] sm:min-h-[56px] group-hover:text-[#0391B6] transition-colors">
              {product.name}
            </h3>

            {/* CATEGORY */}
            <p className="text-sm text-gray-500 mt-1 capitalize">
              {product.category.replace("-", " ")}
            </p>
          </div>

          {/* INQUIRY ACTION */}
          <div className="mt-5 pt-3 border-t border-gray-100">
            <InquiryButton size="sm" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  )
}