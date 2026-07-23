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
  provenance?: string
  printsAvailable?: boolean
  printSizes?: PrintSize[]
  journalSlug?: string
  journalTitle?: string
}

export interface Category {
  _id: string
  title: string
  isDefault?: boolean
  seriesTitle?: string
  seriesSubtitle?: string
  statement?: string
}

export interface HomePage {
  artistName?: string
  studioName?: string
  studioTagline?: string
  homeImage?: { altText?: string } & Record<string, any>
}

export interface AboutPage {
  openingQuote?: string
  quoteAttribution?: string
  body?: string
  cvUrl?: string
}

export interface Post {
  title: string
  slug: string
  publishedAt: string
  videoUrl?: string
  coverImage?: ({ altText?: string } & Record<string, any>) | null
  excerpt?: string
  body?: string
  galleryLink?: {
    _type: 'artwork' | 'category'
    _id: string
    title: string
    slug?: string
  } | null
  galleryLinkText?: string
}

export interface ContactPage {
  intro?: string
  email?: string
  instagram?: string
}

export interface PrintSize {
  label: string
  dimensions?: string
  price?: string
}

export interface PrintsPage {
  heading?: string
  intro?: string
  printSubtitle?: string
  sizes?: PrintSize[]
  details?: Array<{ label: string; text?: string }>
}
