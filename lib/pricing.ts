// lib/pricing.ts
// Pricing is discontinued - the site now operates exclusively on phone inquiries (9937000606).

export const getFinalPrice = (product: any): number => {
  return typeof product?.price === "number" ? product.price : 0
}