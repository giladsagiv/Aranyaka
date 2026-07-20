export interface Artwork {
  title: string
  slug: string
  image: any // Sanity image object; pass to urlFor()
  altText: string
  dimensions?: string
  year?: number
  medium?: string
  price?: string
  sold?: boolean
  description?: string
  extraImages?: Array<{ altText?: string } & Record<string, any>>
  categoryId?: string
}

export interface Category {
  _id: string
  title: string
}

export interface AboutPage {
  artistName?: string
  tagline?: string
  body?: string
  homeImage?: { altText?: string } & Record<string, any>
}

export interface Post {
  title: string
  slug: string
  publishedAt: string
  videoUrl?: string
  coverImage?: ({ altText?: string } & Record<string, any>) | null
  excerpt?: string
  body?: string
}

export interface ContactPage {
  intro?: string
  email?: string
  instagram?: string
}
