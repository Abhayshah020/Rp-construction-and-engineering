import Link from "next/link"
import { ArrowRight, Route, Building, PencilRuler, FileText, Compass, ClipboardList } from "lucide-react"

const services = [
  {
    icon: Route,
    title: "Road Construction",
    description: "Rural & urban road development, blacktopping, gravelling, highway widening & improvement.",
    href: "/services#road",
  },
  {
    icon: Building,
    title: "Building Construction",
    description: "Residential, commercial, institutional buildings with structural designing & supervision.",
    href: "/services#building",
  },
  {
    icon: PencilRuler,
    title: "Engineering Design",
    description: "Architectural design, structural analysis, 3D modeling & visualization, BOQ preparation.",
    href: "/services#design",
  },
  {
    icon: FileText,
    title: "Tendering Support",
    description: "Technical & financial proposal preparation, DPR preparation, cost estimation & budgeting.",
    href: "/services#tendering",
  },
  {
    icon: Compass,
    title: "Surveying & Estimating",
    description: "Topographical surveys, land measurement & mapping, layout planning, estimation reports.",
    href: "/services#surveying",
  },
  {
    icon: ClipboardList,
    title: "Construction Management",
    description: "Planning & scheduling, quality control, safety management, site supervision.",
    href: "/services#management",
  },
]

export function ServicesPreview() {
  return (
    <section className="py-24 bg-muted">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-semibold tracking-wide uppercase text-sm mb-3">What We Do</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Comprehensive Construction Solutions
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            From initial planning to final delivery, we provide end-to-end engineering services for government,
            corporate, and private-sector clients.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative bg-card rounded-lg p-6 border border-[#ccc] hover:border-accent hover:shadow-lg transition-all duration-300"
            >
              <service.icon className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-lg font-semibold text-card-foreground group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              <div className="mt-4 flex items-center text-sm font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more
                <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/services" className="inline-flex items-center text-accent font-semibold hover:underline">
            View All Services
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
