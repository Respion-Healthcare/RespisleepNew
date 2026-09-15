"use client"

import { useSearchParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { products } from "@/lib/products"
import InquiryButton from "@/components/InquiryButton"

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""

  const filteredProducts = products.filter((product) =>
    `${product.name} ${product.category}`
      .toLowerCase()
      .includes(query.toLowerCase())
  )

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 pt-10 pb-16">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Search Results
        </h1>

        <p className="mt-2 text-gray-600">
          {filteredProducts.length} product
          {filteredProducts.length !== 1 ? "s" : ""} found for{" "}
          <span className="font-semibold text-[#0391B6]">
            "{query}"
          </span>
        </p>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="bg-gray-50 border rounded-2xl p-10 text-center">
          <h2 className="text-xl font-semibold mb-2">
            No products found
          </h2>

          <p className="text-gray-500">
            Try searching for CPAP, BiPAP, Oxygen Concentrator,
            Masks, or Accessories.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => {
            return (
              <div
                key={product.id}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <Link
                  href={`/products/${product.category}/${product.slug}`}
                  className="block"
                >
                  <div className="relative h-52 bg-gray-50">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-4 pb-0">
                    <span className="inline-block text-xs bg-[#EAF8FC] text-[#0391B6] px-2 py-1 rounded-full mb-3 capitalize font-medium">
                      {product.category.replace("-", " ")}
                    </span>

                    <h2 className="font-semibold text-gray-900 line-clamp-2 min-h-12 group-hover:text-[#0391B6] transition-colors">
                      {product.name}
                    </h2>
                  </div>
                </Link>

                <div className="p-4 pt-3 mt-2 border-t border-gray-100 flex items-center justify-between gap-2">
                  <InquiryButton size="sm" className="flex-1" />
                  <Link
                    href={`/products/${product.category}/${product.slug}`}
                    className="px-2.5 py-1.5 text-xs font-semibold text-[#0391B6] hover:text-[#027A99] hover:bg-cyan-50 rounded-lg transition"
                  >
                    Details →
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}