import Header from "@/components/header"
import Hero from "@/components/hero"
import HowItWorks from "@/components/how-it-works"
import Features from "@/components/features"
import WhyChoose from "@/components/why-choose"
import Pricing from "@/components/pricing"
import Footer from "@/components/footer"
import CallToAction from "@/components/call-to-action"
import ProductShowcase from "@/components/product-showcase"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 text-slate-200 relative overflow-hidden">
      {/* Ambient background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern-dark.svg')] bg-center opacity-10"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-teal-500/10 rounded-full blur-[80px]"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 -z-5 overflow-hidden">
        <div className="particle-1 absolute w-1 h-1 rounded-full bg-blue-400/40 top-[15%] left-[10%] animate-float-slow"></div>
        <div className="particle-2 absolute w-2 h-2 rounded-full bg-teal-400/30 top-[25%] left-[80%] animate-float-medium"></div>
        <div className="particle-3 absolute w-1 h-1 rounded-full bg-purple-400/40 top-[65%] left-[5%] animate-float-fast"></div>
        <div className="particle-4 absolute w-1.5 h-1.5 rounded-full bg-blue-400/30 top-[85%] left-[90%] animate-float-slow"></div>
        <div className="particle-5 absolute w-1 h-1 rounded-full bg-teal-400/40 top-[45%] left-[50%] animate-float-medium"></div>
      </div>

      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <ProductShowcase />
        <WhyChoose />
        <Pricing />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}

