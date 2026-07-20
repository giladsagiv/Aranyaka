export interface Artwork {
  title: string
  slug: string
  image: any // Sanity image object; pass to urlFor()
  altText: string
  year?: number
  medium?: string
  description?: string
}
