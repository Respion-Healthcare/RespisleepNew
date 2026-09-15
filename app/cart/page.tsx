"use client"

import Link from "next/link"
import { PhoneCall, MessageSquare, ShieldCheck, Truck, Headphones } from "lucide-react"

export default function CartPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-12 text-center">
        <div className="w-20 h-20 bg-[#EAF8FC] rounded-full flex items-center justify-center mx-auto mb-6 text-[#0391B6]">
          <Headphones className="w-10 h-10" />
        </div>

        <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-[#0391B6] text-xs font-semibold uppercase tracking-wider mb-4">
          Personalized Medical Care
        </span>

        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
          Direct Inquiry & Consultation
        </h1>

        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
          To ensure accurate machine calibration, proper mask fitting, and personalized therapy support, all equipment purchases and rentals are coordinated directly by phone with our respiratory team.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <a
            href="tel:9937000606"
            className="inline-flex items-center justify-center gap-2 bg-[#0391B6] hover:bg-[#027A99] text-white px-8 py-3.5 rounded-2xl font-bold shadow-md hover:shadow-lg transition text-base"
          >
            <PhoneCall className="w-5 h-5" />
            <span>Call: 9937000606</span>
          </a>

          <a
            href="https://wa.me/919937000606?text=Hello%20Respisleep,%20I%20would%20like%20to%20inquire%20about%20your%20products."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1DA851] text-white px-8 py-3.5 rounded-2xl font-semibold shadow-sm hover:shadow transition text-base"
          >
            <MessageSquare className="w-5 h-5" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        <div className="border-t border-gray-100 pt-6">
          <Link
            href="/products"
            className="inline-flex items-center text-sm font-semibold text-[#0391B6] hover:underline"
          >
            ← Browse Catalog Products
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-gray-100 text-left text-xs text-gray-500">
          <div className="flex items-center gap-2.5">
            <Truck className="w-4 h-4 text-[#0391B6] shrink-0" />
            <span>Pan-India fast doorstep delivery</span>
          </div>
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-[#0391B6] shrink-0" />
            <span>Genuine certified medical devices</span>
          </div>
        </div>
      </div>
    </div>
  )
}