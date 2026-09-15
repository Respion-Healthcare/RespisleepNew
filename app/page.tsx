import type { Metadata } from "next"

import BestSellingSection from "@/components/BestSellingSection"
import DealOfTheDay from "@/components/DealOfTheDaySection"
import Hero from "@/components/Hero"
import ProductBannerGrid from "@/components/ProductBannerGrid"
import ReviewsSection from "@/components/Review"
import ShopCategories from "@/components/ShopCategories"
import TrustBadges from "@/components/TrustBadges"
import FloatingContactButtons from "@/components/FloatingContactButtons"
import AuthorizedPartners from "@/components/AuthorizedPartners"

export const metadata: Metadata = {
  title: "Buy CPAP, BiPAP & Oxygen Concentrators in India | Respisleep",
  description:
    "Buy CPAP machines, BiPAP machines, and oxygen concentrators online in India at best prices. Trusted sleep apnea equipment provider - Respisleep.",
  keywords: [
    "CPAP Machine India",
    "BiPAP Machine India",
    "Oxygen Concentrator India",
    "Sleep Apnea Machine",
    "CPAP price India",
  ],
  openGraph: {
    title: "Respisleep - CPAP, BiPAP & Oxygen Concentrators",
    description:
      "Buy sleep apnea machines and oxygen concentrators online in India.",
    url: "https://Respisleep.in",
    siteName: "Respisleep",
    type: "website",
  },
}

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-blue-50 via-white to-blue-100">
      {/* SEO H1 */}
      <h1 className="sr-only">
        Buy CPAP, BiPAP Machines & Oxygen Concentrators in India
      </h1>

      <Hero />

      <section className="space-y-10 sm:space-y-12 md:space-y-16">
        <DealOfTheDay />

        <ProductBannerGrid />

        <ShopCategories />

        <BestSellingSection />

        <TrustBadges />

        <AuthorizedPartners />

        <ReviewsSection />
      </section>

      <FloatingContactButtons />
    </main>
  )
}