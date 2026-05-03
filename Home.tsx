import Navigation from '../sections/Navigation'
import Hero from '../sections/Hero'
import Philosophy from '../sections/Philosophy'
import Classes from '../sections/Classes'
import Trainers from '../sections/Trainers'
import CTABanner from '../sections/CTABanner'
import Testimonials from '../sections/Testimonials'
import Facility from '../sections/Facility'
import Membership from '../sections/Membership'
import ContactFooter from '../sections/ContactFooter'

export default function Home() {
  return (
    <div className="relative">
      <Navigation />
      <Hero />
      <Philosophy />
      <Classes />
      <Trainers />
      <CTABanner />
      <Testimonials />
      <Facility />
      <Membership />
      <ContactFooter />
    </div>
  )
}
