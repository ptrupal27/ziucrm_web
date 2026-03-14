import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustedBy } from './components/TrustedBy';
import { Features } from './components/Features';
import { Screenshots } from './components/Screenshots';
import { MobileApp } from './components/MobileApp';
import { HowItWorks } from './components/HowItWorks';
import { Benefits } from './components/Benefits';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ImageTransparent } from './components/ImageTransparent';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      {/* <TrustedBy /> */}
      <Features />
      <Screenshots />
      <MobileApp />
      <HowItWorks />
      <Benefits />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Contact />
      {/* <div className="bg-gray-50 py-12">
        <ImageTransparent />
      </div> */}
      <Footer />
    </div>
  );
}
