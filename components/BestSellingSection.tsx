"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart } from "lucide-react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { products } from "@/lib/products"
import InquiryButton from "@/components/InquiryButton"

export default function BestSellingSection() {
  // ✅ STATES
  const [wishlist, setWishlist] = useState<any[]>([])

  // ✅ LOAD WISHLIST
  useEffect(() => {
    const savedWishlist = localStorage.getItem("wishlist")

    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist))
    }
  }, [])

  /* -------------------------------- */
  /* ADD TO WISHLIST */
  /* -------------------------------- */
  const addToWishlist = (
    product: any,
    e: React.MouseEvent
  ) => {
    e.preventDefault()
    e.stopPropagation()

    let wishlistItems: any[] = []

    try {
      const stored = localStorage.getItem("wishlist")
      wishlistItems = stored ? JSON.parse(stored) : []
    } catch {
      wishlistItems = []
    }

    const exists = wishlistItems.find(
      (item: any) => item.id === product.id
    )

    if (exists) {
      alert("Already in wishlist")
      return
    }

    wishlistItems.push(product)
    localStorage.setItem("wishlist", JSON.stringify(wishlistItems))
    setWishlist(wishlistItems)
    alert("Added to wishlist")
  }

  return (
    <section className="w-full px-6 lg:px-20 py-20 bg-[#EAF8FC]/40">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
            Best Selling Products
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Trusted respiratory equipment available for direct inquiry
          </p>
        </div>

        <Link
          href="/products"
          className="text-gray-600 hover:text-[#0391B6] transition font-medium"
        >
          View all products →
        </Link>
      </div>

      {/* GRID */}
      <motion.div
        initial={{
          opacity: 0,
          x: -100,
          filter: "blur(12px)",
          scale: 0.96,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
          scale: 1,
        }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{
          duration: 1.1,
          ease: [0.22, 1, 0.36, 1] as const,
        }}
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
      >
        {products.slice(0, 10).map((product) => {
          return (
            <div
              key={product.id}
              className="group flex flex-col justify-between transition-transform duration-300 hover:-translate-y-2"
            >
              {/* PRODUCT CARD */}
              <div className="relative bg-white/90 backdrop-blur-sm rounded-xl p-4 flex justify-center items-center hover:shadow-xl transition overflow-hidden">
                {/* WISHLIST */}
                <button
                  onClick={(e) => addToWishlist(product, e)}
                  aria-label="Add to wishlist"
                  className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition z-20 cursor-pointer"
                >
                  <Heart size={18} />
                </button>

                {/* IMAGE */}
                <Link
                  href={`/products/${product.category}/${product.slug}`}
                  className="w-full"
                >
                  <div className="relative w-full h-52">
                    {/* MAIN IMAGE */}
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover transition duration-300 group-hover:opacity-0"
                    />

                    {/* HOVER IMAGE */}
                    <Image
                      src={product.images[1] || product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover absolute inset-0 transition duration-300 opacity-0 group-hover:opacity-100"
                    />
                  </div>
                </Link>
              </div>

              {/* PRODUCT INFO */}
              <div className="mt-4 space-y-2">
                <p className="text-xs text-gray-400 uppercase tracking-wide">
                  {product.category.replace("-", " ")}
                </p>

                <Link href={`/products/${product.category}/${product.slug}`}>
                  <h3 className="text-gray-800 text-sm leading-relaxed line-clamp-2 hover:text-[#0391B6] transition font-medium min-h-[40px]">
                    {product.name}
                  </h3>
                </Link>

                <InquiryButton size="sm" className="w-full mt-2" />
              </div>
            </div>
          )
        })}
      </motion.div>
    </section>
  )
}