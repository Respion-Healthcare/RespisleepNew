"use client"

import Image from "next/image"
import Link from "next/link"
import { useRef, useEffect, useState } from "react"
import {
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Star,
  Sparkles,
} from "lucide-react"
import { motion } from "framer-motion"
import { products as allProducts } from "@/lib/products"
import InquiryButton from "@/components/InquiryButton"

export default function DealOfTheDay() {
  const scrollRef = useRef<HTMLDivElement>(null)

  /* -------------------------------- */
  /* PRODUCTS */
  /* -------------------------------- */

  const dealSlugs = [
    "oxymed-portable-oxygen-concentrator",
    "oxymed-oxygen-concentrator-5lpm",
    "oxymed-10ltr-oxygen-concentrator",
    "philips-everflo-oxygen-concentrator",
    "resmed-airmini-f30-setup-pack",
  ]

  const rightProducts = [
    "resmed-airfit-n20-nasal-mask",
    "resmed-airsense-10-autoset-tripack",
  ]

  /* -------------------------------- */
  /* AUTO SLIDE */
  /* -------------------------------- */

  useEffect(() => {
    const autoSlide = setInterval(() => {
      if (scrollRef.current) {
        const container = scrollRef.current

        const maxScrollLeft =
          container.scrollWidth - container.clientWidth

        if (container.scrollLeft >= maxScrollLeft) {
          container.scrollTo({
            left: 0,
            behavior: "smooth",
          })
        } else {
          container.scrollBy({
            left: 320,
            behavior: "smooth",
          })
        }
      }
    }, 3500)

    return () => clearInterval(autoSlide)
  }, [])

  /* -------------------------------- */
  /* MANUAL SCROLL */
  /* -------------------------------- */

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -320 : 320,
      behavior: "smooth",
    })
  }

  return (
    <section className="relative overflow-hidden py-10 sm:py-14 lg:py-24 bg-gradient-to-b from-[#f8fbff] via-[#eef6ff] to-[#f4f9ff]">
      {/* BACKGROUND BLUR */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-blue-200/40 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-200/30 blur-[140px] rounded-full" />

      <div className="relative z-10 px-4 sm:px-6 lg:px-20">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-blue-100 text-[#0391B6] px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold tracking-wide flex items-center gap-1">
                <Sparkles size={14} />
                FEATURED EQUIPMENT
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Top Rated Sleep & Respiratory Solutions
            </h2>

            <p className="text-gray-500 text-sm sm:text-base mt-2">
              Connect directly with our team for consultations and inquiries
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              aria-label="Previous products"
              className="p-3 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition cursor-pointer"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={() => scroll("right")}
              aria-label="Next products"
              className="p-3 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition cursor-pointer"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* LEFT SLIDER (2 COLUMNS) */}
          <div className="lg:col-span-2 relative">
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth py-2"
            >
              {dealSlugs.map((slug) => {
                const product = allProducts.find((p) => p.slug === slug)

                if (!product) return null

                return (
                  <motion.div
                    key={product.id}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3 }}
                    className="min-w-[230px] sm:min-w-[280px] lg:min-w-[300px]"
                  >
                    <div className="group relative bg-white rounded-[2rem] p-5 border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col justify-between h-full">
                      <Link
                        href={`/products/${product.category}/${product.slug}`}
                        className="block"
                      >
                        {/* IMAGE */}
                        <div className="relative h-[170px] sm:h-[210px] lg:h-[240px] rounded-2xl bg-gradient-to-br from-blue-50 to-white flex items-center justify-center overflow-hidden">
                          <motion.div
                            whileHover={{ scale: 1.08 }}
                            transition={{ duration: 0.3 }}
                            className="relative flex items-center justify-center flex-shrink-0 w-[150px] h-[150px] sm:w-[220px] sm:h-[220px]"
                          >
                            <Image
                              src={product.images[0]}
                              alt={product.name}
                              width={220}
                              height={220}
                              className="w-full h-full object-contain"
                            />
                          </motion.div>
                        </div>

                        {/* CONTENT */}
                        <div className="mt-5">
                          <p className="text-xs uppercase tracking-wider text-[#0391B6] font-semibold">
                            {product.category.replace("-", " ")}
                          </p>

                          <h3 className="mt-2 text-base sm:text-lg font-semibold text-gray-900 leading-snug line-clamp-2 min-h-[56px] group-hover:text-[#0391B6] transition-colors">
                            {product.name}
                          </h3>

                          {/* RATING */}
                          <div className="flex items-center gap-1 mt-3">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                size={14}
                                className="fill-orange-400 stroke-orange-400"
                              />
                            ))}
                            <span className="text-sm text-gray-500 ml-1">
                              (124)
                            </span>
                          </div>
                        </div>
                      </Link>

                      {/* INQUIRY & DETAILS */}
                      <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-2">
                        <InquiryButton size="sm" className="flex-1" />
                        <Link
                          href={`/products/${product.category}/${product.slug}`}
                          className="text-xs font-medium text-gray-600 hover:text-[#0391B6] px-2 py-2"
                        >
                          Details →
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="flex flex-col gap-6">
            {rightProducts.map((slug) => {
              const product = allProducts.find((p) => p.slug === slug)

              if (!product) return null

              return (
                <motion.div
                  key={slug}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="group relative flex items-center justify-between gap-6 rounded-[2rem] bg-white/85 backdrop-blur-xl border border-white/60 p-6 shadow-[0_15px_50px_rgba(0,0,0,0.08)]">
                    {/* SIDE GLOW */}
                    <div className="absolute top-0 left-0 h-full w-2 bg-gradient-to-b from-blue-500 to-cyan-400 rounded-full" />

                    {/* CONTENT */}
                    <div className="flex-1 pl-3">
                      <span className="inline-flex bg-blue-100 text-[#0391B6] text-[11px] px-3 py-1 rounded-full font-semibold uppercase tracking-wide">
                        {product.category.replace("-", " ")}
                      </span>

                      <Link href={`/products/${product.category}/${product.slug}`}>
                        <h3 className="mt-3 text-lg font-semibold leading-snug text-gray-900 line-clamp-2 hover:text-[#0391B6] transition-colors">
                          {product.name}
                        </h3>
                      </Link>

                      {/* RATING */}
                      <div className="flex items-center gap-1 mt-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            size={13}
                            className="fill-orange-400 stroke-orange-400"
                          />
                        ))}
                        <span className="text-sm text-gray-500 ml-1">
                          (96)
                        </span>
                      </div>

                      {/* ACTION */}
                      <div className="mt-4 flex items-center gap-2">
                        <InquiryButton size="sm" />
                        <Link
                          href={`/products/${product.category}/${product.slug}`}
                          className="text-xs font-semibold text-gray-600 hover:text-[#0391B6] transition ml-1"
                        >
                          View Details →
                        </Link>
                      </div>
                    </div>

                    {/* IMAGE */}
                    <Link
                      href={`/products/${product.category}/${product.slug}`}
                      className="shrink-0"
                    >
                      <motion.div
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center justify-center w-28 h-28 sm:w-36 sm:h-36"
                      >
                        <Image
                          src={product.images[0]}
                          alt={product.name}
                          width={150}
                          height={150}
                          className="w-full h-full object-contain"
                        />
                      </motion.div>
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}