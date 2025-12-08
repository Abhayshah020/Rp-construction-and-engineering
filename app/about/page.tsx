import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { Target, Eye, Shield, Lightbulb, Clock, Leaf, Users, CheckCircle2 } from "lucide-react"

const coreValues = [
  { icon: Shield, label: "Quality" },
  { icon: CheckCircle2, label: "Integrity" },
  { icon: Shield, label: "Safety" },
  { icon: Lightbulb, label: "Innovation" },
  { icon: Clock, label: "Timely Delivery" },
  { icon: Leaf, label: "Sustainability" },
  { icon: Users, label: "Client Satisfaction" },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 bg-primary">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-accent font-semibold tracking-wide uppercase text-sm mb-4">About Us</p>
              <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
                Building Nepal's Future with Excellence
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
                RP Construction & Engineering Pvt. Ltd. is a trusted Nepali construction company dedicated to
                engineering excellence, infrastructure development, and project delivery with integrity.
              </p>
            </div>
          </div>
        </section>

        {/* About Content */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground">Our Story</h2>
                <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Founded in 2021, RP Construction & Engineering has quickly established itself as a reliable partner
                    for Road Construction, Building Construction, Engineering Design, Surveying, Tender Preparation, and
                    complete Construction Management Solutions across Nepal.
                  </p>
                  <p>
                    With a strong foundation built on technical expertise, innovation, and professionalism, we offer
                    end-to-end engineering services for government, corporate, and private-sector clients.
                  </p>
                  <p>
                    Our team consists of skilled engineers, architects, surveyors, project managers, and trained civil
                    technicians committed to delivering high-quality, safe, and sustainable construction works.
                  </p>
                  <p>
                    At RP Construction & Engineering, we believe that quality, transparency, and timely delivery are the
                    pillars of our success.
                  </p>
                </div>
              </div>
              <div
                className="aspect-[4/3] rounded-lg bg-cover bg-center"
                style={{
                  backgroundImage: "url('/construction-site-progress-with-workers-and-equipm.jpg')",
                }}
              />
            </div>
          </div>
        </section>

        {/* MD Message */}
        <section className="py-24 bg-muted">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12 items-start">
              <div className="lg:col-span-1">
                <div
                  className="aspect-[3/4] rounded-lg bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/professional-business-man-portrait-managing-direct.jpg')",
                  }}
                />
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-semibold text-foreground">Mr. Rajkumar Subedi</h3>
                  <p className="text-accent text-sm">Managing Director</p>
                </div>
              </div>
              <div className="lg:col-span-2">
                <p className="text-accent font-semibold tracking-wide uppercase text-sm mb-4">
                  Message from the Managing Director
                </p>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p className="text-lg italic text-foreground">
                    "Since the establishment of RP Construction & Engineering Pvt. Ltd. in 2021, our vision has been
                    clear — to contribute meaningfully to Nepal's infrastructure development through high-quality
                    engineering solutions."
                  </p>
                  <p>
                    Every project we undertake is not just construction work; it is a step toward building a stronger,
                    safer, and more prosperous nation.
                  </p>
                  <p>
                    Our commitment to excellence, professional ethics, and customer satisfaction drives everything we
                    do. I am proud of our dedicated team whose expertise and hard work enable us to deliver projects
                    that meet national standards and exceed client expectations.
                  </p>
                  <p>
                    We look forward to continuing our journey with the same passion and purpose — constructing the
                    foundations for Nepal's future while preserving trust and innovation at every step.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card border border-border rounded-lg p-8">
                <Target className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold text-card-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide high-quality construction and engineering solutions that meet international standards while
                  supporting Nepal's development through innovation, professionalism, and sustainable practices.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-8">
                <Eye className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold text-card-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become one of Nepal's leading construction and engineering companies, known for excellence,
                  reliability, and transformative infrastructure projects.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-24 bg-primary">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground mb-12">Our Core Values</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {coreValues.map((value) => (
                <div
                  key={value.label}
                  className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-6 py-3 border border-primary-foreground/20"
                >
                  <value.icon className="h-5 w-5 text-accent" />
                  <span className="text-primary-foreground font-medium">{value.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
