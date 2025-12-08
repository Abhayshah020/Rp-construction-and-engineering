import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"

const navigation = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Road Construction", href: "/services#road" },
    { name: "Building Construction", href: "/services#building" },
    { name: "Engineering Design", href: "/services#design" },
    { name: "Surveying", href: "/services#surveying" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-2xl font-bold">
              RP<span className="text-accent">Construction</span>
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/80 leading-relaxed">
              Trusted Nepali construction company dedicated to engineering excellence, infrastructure development, and
              project delivery with integrity.
            </p>
            <p className="mt-4 text-sm text-primary-foreground/60">Established: 2021</p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">Company</h3>
            <ul className="mt-4 space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">Services</h3>
            <ul className="mt-4 space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/80">Baneshwor-10, Kathmandu, Nepal</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <div className="text-sm text-primary-foreground/80">
                  <p>+977 9851152392</p>
                  <p>+977 9851190713</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">info@rpconstruction.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} RP Construction & Engineering (P.) Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
