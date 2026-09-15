import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Star } from "lucide-react"
import { products } from "@/lib/products"
import ImageSlider from "./ImageSlider"
import ReviewSection from "@/components/ReviewSection"
import ProductOptions from "@/components/ProductOptions"
import InquiryButton from "@/components/InquiryButton"
import type { Metadata } from "next"

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)

  if (!product) return {}

  return {
    title: `${product.name} | Respisleep`,
    description: `Explore ${product.name} with warranty, sleep apnea support, and fast delivery from Respisleep.`,
    alternates: {
      canonical: `https://www.Respisleep.in/products/${product.category}/${product.slug}`,
    },
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.images[0]],
    },
  }
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const product = products.find((p) => p.slug === slug)

  if (!product) return notFound()

  /* Related products */
  const relatedProducts = products
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3)

  return (
    <div className="w-full px-4 sm:px-6 lg:max-w-7xl lg:mx-auto pt-8 pb-16">
      <div className="grid md:grid-cols-2 gap-10">
        {/* LEFT COLUMN - IMAGES */}
        <div className="space-y-6">
          <ImageSlider images={product.images} name={product.name} />
        </div>

        {/* RIGHT COLUMN - INFO & INQUIRY */}
        <div>
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              {product.name}
            </h1>

            <p className="text-gray-600 max-w-2xl">
              Premium respiratory care equipment designed for comfort,
              reliability, and effective therapy support.
            </p>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-3">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star
                key={s}
                className="w-4 h-4 text-yellow-400 fill-yellow-400"
              />
            ))}
            <span className="text-sm text-gray-500 ml-2">
              (12 reviews)
            </span>
          </div>

          {/* PRODUCT OPTIONS & INQUIRY */}
          <ProductOptions product={product} />
        </div>
      </div>

      {/* PRODUCT DETAILS */}
      <div className="mt-20">
        <h2 className="text-xl font-semibold mb-6">Product Details</h2>

        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-semibold mb-3">Description</h3>
            <p className="text-gray-600">{product.description}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Additional Info</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              {product.specifications?.map((spec: any, index: number) => (
                <li
                  key={index}
                  className="flex justify-between border-b pb-1"
                >
                  <span className="font-medium">{spec.label}</span>
                  <span>{spec.value}</span>
                </li>
              ))}
            </ul>
          </div>

          <ReviewSection />
        </div>
      </div>

      {/* RELATED PRODUCTS */}
      <div className="mt-20">
        <h2 className="text-2xl font-semibold mb-8">Related Products</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {relatedProducts.map((item) => (
            <div
              key={item.slug}
              className="border border-gray-200 rounded-2xl p-4 hover:shadow-lg transition flex flex-col justify-between bg-white"
            >
              <Link
                href={`/products/${item.category}/${item.slug}`}
                className="block"
              >
                <Image
                  src={item.images[0]}
                  alt={item.name}
                  width={300}
                  height={300}
                  className="w-full h-[220px] object-contain"
                />

                <h3 className="mt-4 font-medium text-gray-800 line-clamp-2 hover:text-[#0391B6] transition">
                  {item.name}
                </h3>
              </Link>

              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between gap-2">
                <InquiryButton size="sm" className="flex-1" />
                <Link
                  href={`/products/${item.category}/${item.slug}`}
                  className="px-2.5 py-1.5 text-xs font-semibold text-[#0391B6] hover:text-[#027A99] hover:bg-cyan-50 rounded-lg transition"
                >
                  Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SEO CONTENT */}
      <div className="prose prose-lg max-w-none mt-20">
        <h2>About {product.name}</h2>
        <p>{product.description}</p>
        <p>
          {product.name} is designed to provide reliable respiratory therapy
          support with a focus on comfort, performance, and long-term durability.
        </p>

        <h2>Why Choose {product.name}?</h2>
        <ul>
          <li>Trusted respiratory care solution</li>
          <li>Comfortable for daily therapy use</li>
          <li>Suitable for home and clinical environments</li>
          <li>Built using high-quality medical-grade materials</li>
          <li>Backed by Respisleep expert team support</li>
        </ul>
      </div>

      {/* SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            image: product.images,
            description: product.description,
            brand: {
              "@type": "Brand",
              name: "Respisleep",
            },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Is this product safe for daily use?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, it is designed for safe and long-term use.",
                },
              },
              {
                "@type": "Question",
                name: "Does it help with sleep apnea?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, it helps maintain proper airflow and reduces apnea symptoms.",
                },
              },
              {
                "@type": "Question",
                name: "Can beginners use it easily?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, it is user-friendly and easy to operate.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  )
}