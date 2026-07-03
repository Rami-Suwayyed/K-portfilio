import { MetadataRoute } from 'next'
import { brands } from '../data/brands'

// Required for static export
export const dynamic = 'force-static'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://web.kabseh.app'
  const lastModified = new Date()

  const staticEntries: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/#about`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/#feature`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/#brands`, lastModified, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/#downloadApp`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/#contact`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/register/restaurant/`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/register/captain/`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
  ]

  // One entry per partner brand page (from the local brand list).
  const brandEntries: MetadataRoute.Sitemap = brands.map((b) => ({
    url: `${baseUrl}/brands/${b.slug}/`,
    lastModified,
    changeFrequency: 'weekly',
    priority: 0.6,
  }))

  return [...staticEntries, ...brandEntries]
}
