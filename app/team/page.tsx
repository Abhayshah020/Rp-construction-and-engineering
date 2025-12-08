import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { Mail, Phone } from "lucide-react"

const leadership = [
  {
    name: "Rajkumar Subedi",
    role: "Managing Director",
    description: "Visionary leader with extensive experience in construction management and business development.",
    image: "/professional-business-man-portrait-managing-direct.jpg",
  },
]

const teamCategories = [
  {
    title: "Civil Engineers",
    description: "Our team of qualified civil engineers brings technical expertise to every project.",
    count: "8+",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Architects",
    description: "Creative architects designing functional and aesthetic structures.",
    count: "4+",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Surveyors",
    description: "Precise land surveying and mapping specialists using modern technology.",
    count: "5+",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Project Managers",
    description: "Experienced managers ensuring timely and quality project delivery.",
    count: "3+",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Skilled Technicians",
    description: "Trained technicians handling specialized construction equipment and tasks.",
    count: "15+",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Safety Officers",
    description: "Dedicated safety professionals ensuring workplace safety standards.",
    count: "2+",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export default function TeamPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 bg-primary">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-accent font-semibold tracking-wide uppercase text-sm mb-4">Our Team</p>
              <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
                Meet the Experts Behind Our Success
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
                Our team consists of skilled engineers, architects, surveyors, project managers, and trained civil
                technicians committed to delivering high-quality, safe, and sustainable construction works.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-foreground">Leadership</h2>
              <p className="mt-4 text-muted-foreground">Guiding our company towards excellence</p>
            </div>
            <div className="flex justify-center">
              {leadership.map((person) => (
                <div key={person.name} className="text-center max-w-md">
                  <div
                    className="w-48 h-48 mx-auto rounded-full bg-cover bg-center border-1 border-accent"
                    style={{ backgroundImage: `url('${person.image}')` }}
                  />
                  <h3 className="mt-6 text-xl font-semibold text-foreground">{person.name}</h3>
                  <p className="text-accent font-medium">{person.role}</p>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{person.description}</p>
                  <div className="mt-4 flex justify-center gap-4">
                    <a
                      href="tel:+9779851152392"
                      className="p-2 rounded-full bg-muted hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      <Phone className="h-5 w-5" />
                    </a>
                    <a
                      href="mailto:info@rpconstruction.com"
                      className="p-2 rounded-full bg-muted hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Categories */}
        {/* <section className="py-24 bg-muted">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-foreground">Our Expert Teams</h2>
              <p className="mt-4 text-muted-foreground">Specialized professionals in every discipline</p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {teamCategories.map((category) => (
                <div
                  key={category.title}
                  className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div
                    className="h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url('${category.image}')` }}
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-card-foreground">{category.title}</h3>
                      <span className="px-3 py-1 text-sm font-bold bg-accent/10 text-accent rounded-full">
                        {category.count}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{category.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
