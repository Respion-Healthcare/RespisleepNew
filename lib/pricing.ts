// lib/pricing.ts
// Pricing is discontinued - the site now operates exclusively on phone inquiries (7077718897).

export const getFinalPrice = (product: any): number => {
  return typeof product?.price === "number" ? product.price : 0
}