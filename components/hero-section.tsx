import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Route, HardHat } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/modern-construction-site-aerial-view-with-cranes-a.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 via-blue-100 to-blue-80" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-8 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-accent font-semibold tracking-wide uppercase text-sm mb-4">Building Nepal's Future</p>
            <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl text-balance">
              Engineering Excellence. Infrastructure Development.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80 max-w-xl">
              RP Construction & Engineering Pvt. Ltd. is a trusted partner for Road Construction, Building Construction,
              Engineering Design, Surveying, and complete Construction Management Solutions across Nepal.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-orange-500 cursor-pointer border-1 border-orange-600 text-accent-foreground hover:bg-orange-600">
                <Link href="/services">
                  Our Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                <Link href="/projects">View Projects</Link>
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-[#888]">
              <Building2 className="h-10 w-10 text-accent mb-4" />
              <p className="text-3xl font-bold text-primary-foreground">50+</p>
              <p className="text-primary-foreground/70 text-sm mt-1">Projects Completed</p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-[#888]">
              <Route className="h-10 w-10 text-accent mb-4" />
              <p className="text-3xl font-bold text-primary-foreground">100+ km</p>
              <p className="text-primary-foreground/70 text-sm mt-1">Roads Built</p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-[#888]">
              <HardHat className="h-10 w-10 text-accent mb-4" />
              <p className="text-3xl font-bold text-primary-foreground">30+</p>
              <p className="text-primary-foreground/70 text-sm mt-1">Expert Team</p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-[#888]">
              <div className="text-3xl text-accent mb-4 font-bold">4+</div>
              <p className="text-3xl font-bold text-primary-foreground">Years</p>
              <p className="text-primary-foreground/70 text-sm mt-1">Of Excellence</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-gray-800 rounded-full" />
        </div>
      </div>
    </section>
  )
}
