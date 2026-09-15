// components/product/ProductCard.tsx

import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import InquiryButton from "@/components/InquiryButton"

type ProductCardProps = {
  product: any
}

export default function ProductCard({
  product,
}: ProductCardProps) {
  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-[28px] border border-[#BFEAF3] bg-white p-3.5 hover:shadow-lg transition-all duration-300">
      <Link
        href={`/products/${product.category}/${product.slug}`}
        className="block"
      >
        {/* IMAGE */}
        <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-3xl bg-linear-to-br from-blue-50 to-white p-3">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-contain transition duration-500 group-hover:scale-110"
          />
        </div>

        {/* CONTENT */}
        <div className="mt-5">
          <div className="flex items-start justify-between gap-3">
            <h3 className="line-clamp-2 text-base font-semibold leading-snug text-gray-800 group-hover:text-[#0391B6] transition-colors">
              {product.name}
            </h3>

            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#0391B6]/10 text-[#0391B6] transition duration-300 group-hover:bg-[#0391B6] group-hover:text-white">
              <ArrowUpRight size={16} />
            </div>
          </div>

          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-gray-600">
            {product.description}
          </p>
        </div>
      </Link>

      {/* ACTIONS */}
      <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between gap-2">
        <InquiryButton size="sm" className="flex-1" />

        <Link
          href={`/products/${product.category}/${product.slug}`}
          className="px-3 py-2 text-xs font-semibold text-[#0391B6] hover:text-[#027A99] hover:bg-cyan-50 rounded-lg transition"
        >
          Details →
        </Link>
      </div>
    </div>
  )
}