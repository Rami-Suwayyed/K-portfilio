import type { Metadata } from 'next'
import RegistrationLayout from '../../../components/RegistrationLayout'

export const metadata: Metadata = {
  title: 'Become a Kabseh Captain',
  description:
    'Apply to join the Kabseh delivery team — weekly payments, performance bonuses, and flexible working hours.',
  alternates: { canonical: 'https://web.kabseh.app/register/captain/' },
}

export default function RegisterCaptainPage() {
  return <RegistrationLayout type="captain" />
}
