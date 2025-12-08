import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { MapPin, Calendar } from "lucide-react"

const projects = [
  {
    title: "Highway Expansion Project",
    category: "Road Construction",
    location: "Kathmandu Valley",
    year: "2024",
    description: "Major highway widening and improvement project covering 15km with modern drainage systems.",
    image: "/highway-road-construction-project-nepal-mountains.jpg",
  },
  {
    title: "Commercial Complex",
    category: "Building Construction",
    location: "Baneshwor, Kathmandu",
    year: "2023",
    description: "Multi-story commercial building with modern amenities and sustainable design elements.",
    image: "/modern-commercial-building-construction-high-rise.jpg",
  },
  {
    title: "Rural Road Development",
    category: "Road Construction",
    location: "Sindhupalchok",
    year: "2023",
    description: "Rural road connectivity project improving access for remote communities.",
    image: "/rural-road-construction-mountain-village-nepal.jpg",
  },
  {
    title: "Government Office Building",
    category: "Building Construction",
    location: "Lalitpur",
    year: "2023",
    description: "Modern government office complex with earthquake-resistant design and sustainable features.",
    image: "/government-office-building-construction-modern-arc.jpg",
  },
  {
    title: "Bridge Construction",
    category: "Infrastructure",
    location: "Dolakha",
    year: "2022",
    description: "Steel and concrete bridge construction connecting two important districts.",
    image: "/bridge-construction-over-river-nepal-infrastructur.jpg",
  },
  // {
  //   title: "School Building Renovation",
  //   category: "Building Construction",
  //   location: "Bhaktapur",
  //   year: "2022",
  //   description: "Complete renovation and retrofitting of school buildings for earthquake resilience.",
  //   image: "/placeholder.svg?height=400&width=600",
  // },
]

const categories = ["All", "Road Construction", "Building Construction", "Infrastructure"]

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 bg-primary">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-accent font-semibold tracking-wide uppercase text-sm mb-4">Our Projects</p>
              <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
                Building Excellence Across Nepal
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
                Explore our portfolio of completed and ongoing construction projects that showcase our commitment to
                quality and innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 text-sm font-medium rounded-full border border-border hover:border-accent hover:text-accent transition-colors first:bg-primary first:text-primary-foreground first:border-primary"
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="group bg-card border border-[#aaa] rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div
                    className="aspect-[4/3] bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url('${project.image}')` }}
                  />
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-semibold text-card-foreground group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                    <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {project.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {project.year}
                      </span>
                    </div>
                  </div>
                </article>
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
