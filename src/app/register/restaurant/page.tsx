import type { Metadata } from 'next'
import RegistrationLayout from '../../../components/RegistrationLayout'

export const metadata: Metadata = {
  title: 'Register Your Restaurant',
  description:
    'Join Kabseh as a partner restaurant — zero commission, no registration fees. Reach more customers with less cost.',
  alternates: { canonical: 'https://web.kabseh.app/register/restaurant/' },
}

export default function RegisterRestaurantPage() {
  return <RegistrationLayout type="restaurant" />
}
