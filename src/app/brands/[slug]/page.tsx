import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { brands, getBrandBySlug } from '../../../data/brands'
import BrandPage from '../../../components/BrandPage'

// Static export: pre-generate only the known active brand slugs; anything else 404s.
export const dynamicParams = false

export function generateStaticParams() {
  return brands.map((b) => ({ slug: b.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const brand = getBrandBySlug(slug)
  if (!brand) return { title: 'Restaurant Brand | Kabseh' }

  const name = brand.title?.en || slug
  const description =
    brand.description?.en ||
    `Order ${name} on Kabseh — fast, fair food delivery in Jordan. Available now through the Kabseh app.`
  const url = `https://web.kabseh.app/brands/${brand.slug}/`

  return {
    title: `Order ${name} on Kabseh`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${name} on Kabseh`,
      description,
      url,
      images: brand.logo ? [{ url: brand.logo }] : undefined,
    },
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const brand = getBrandBySlug(slug)
  if (!brand) notFound()
  return <BrandPage brand={brand} />
}
