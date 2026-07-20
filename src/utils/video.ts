// Turns a YouTube/Vimeo page link into its embeddable URL.
// Returns null for anything unrecognised, so callers can fall back to a plain link.
export function toEmbedUrl(url?: string): string | null {
  if (!url) return null

  let parsed: URL
  try {
    parsed = new URL(url)
  } catch {
    return null
  }

  const host = parsed.hostname.replace(/^www\./, '')

  if (host === 'youtu.be') {
    const id = parsed.pathname.slice(1)
    return id ? `https://www.youtube.com/embed/${id}` : null
  }

  if (host === 'youtube.com' || host === 'm.youtube.com') {
    if (parsed.pathname === '/watch') {
      const id = parsed.searchParams.get('v')
      return id ? `https://www.youtube.com/embed/${id}` : null
    }
    const match = parsed.pathname.match(/^\/(?:embed|shorts|live)\/([^/]+)/)
    return match ? `https://www.youtube.com/embed/${match[1]}` : null
  }

  if (host === 'vimeo.com') {
    const id = parsed.pathname.split('/').filter(Boolean)[0]
    return /^\d+$/.test(id) ? `https://player.vimeo.com/video/${id}` : null
  }

  if (host === 'player.vimeo.com') return url

  return null
}
