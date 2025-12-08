import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { Route, Building, PencilRuler, FileText, Compass, ClipboardList, CheckCircle2 } from "lucide-react"

const services = [
  {
    id: "road",
    icon: Route,
    title: "Road Construction",
    description:
      "We specialize in comprehensive road development solutions, from rural pathways to major highway projects.",
    features: [
      "Rural & urban road development",
      "Blacktopping, gravelling, maintenance",
      "Drainage & pavement works",
      "Highway widening & improvement",
      "Government tender-based road projects",
    ],
    image: "/asphalt-road-construction-machinery-highway-work.jpg",
  },
  {
    id: "building",
    icon: Building,
    title: "Building Construction",
    description:
      "Complete building construction services from foundation to finishing, ensuring structural integrity and aesthetic excellence.",
    features: [
      "Residential, commercial, institutional buildings",
      "Structural designing & supervision",
      "RCC construction",
      "Renovation & retrofitting",
      "Interior finishing & landscaping",
    ],
    image: "/modern-building-construction-site-crane-concrete-s.jpg",
  },
  {
    id: "design",
    icon: PencilRuler,
    title: "Engineering Design & Consultancy",
    description: "Professional engineering design services combining technical expertise with innovative solutions.",
    features: [
      "Architectural design",
      "Structural analysis & drawings",
      "Electrical & plumbing design",
      "3D modeling & visualization",
      "BOQ preparation",
    ],
    image: "/engineering-blueprints-design-drawings-architectur.jpg",
  },
  {
    id: "tendering",
    icon: FileText,
    title: "Tendering & Government Project Support",
    description:
      "Expert assistance in preparing competitive proposals and documentation for government and private tenders.",
    features: [
      "Technical & financial proposal preparation",
      "DPR preparation",
      "Cost estimation & budgeting",
      "Project documentation",
    ],
    image: "/business-documents-tender-proposal-professional-of.jpg",
  },
  {
    id: "surveying",
    icon: Compass,
    title: "Surveying & Estimating",
    description:
      "Precise surveying services using modern equipment for accurate land measurement and project estimation.",
    features: [
      "Topographical surveys",
      "Land measurement & mapping",
      "Layout planning",
      "Estimation & valuation reports",
    ],
    image: "/land-surveying-equipment-theodolite-construction-s.jpg",
  },
  {
    id: "management",
    icon: ClipboardList,
    title: "Construction Management",
    description: "Comprehensive project management ensuring on-time, on-budget delivery with quality assurance.",
    features: [
      "Planning & scheduling",
      "Quality control",
      "Safety management",
      "Site supervision",
      "Material & equipment management",
    ],
    image: "/construction-project-manager-site-supervision-safe.jpg",
  },
]

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 bg-primary">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-accent font-semibold tracking-wide uppercase text-sm mb-4">Our Services</p>
              <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
                Comprehensive Construction & Engineering Solutions
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
                From initial planning to final delivery, we provide end-to-end engineering services for government,
                corporate, and private-sector clients.
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="space-y-24">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <service.icon className="h-12 w-12 text-accent mb-4" />
                    <h2 className="text-3xl font-bold tracking-tight text-foreground">{service.title}</h2>
                    <p className="mt-4 text-muted-foreground leading-relaxed">{service.description}</p>
                    <ul className="mt-6 space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div
                      className="aspect-[4/3] rounded-lg bg-cover bg-center border border-[#aaa]"
                      style={{ backgroundImage: `url('${service.image}')` }}
                    />
                  </div>
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
