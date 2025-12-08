import { CheckCircle2 } from "lucide-react"

const reasons = [
  "Experienced engineering professionals",
  "Expertise in government & private projects",
  "Transparent costing & accurate estimation",
  "Modern survey & construction tools",
  "Commitment to durability & quality",
  "On-time project completion",
  "Ethical, client-focused approach",
]

export function WhyChooseUs() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-accent font-semibold tracking-wide uppercase text-sm mb-3">Why Choose Us</p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Building Trust Through Quality & Integrity
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              At RP Construction & Engineering, we believe that quality, transparency, and timely delivery are the
              pillars of our success. Our dedicated team of skilled engineers, architects, surveyors, and project
              managers is committed to delivering high-quality, safe, and sustainable construction works.
            </p>
            <ul className="mt-8 space-y-3">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{reason}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div
              className="aspect-square rounded-lg bg-cover bg-center"
              style={{
                backgroundImage: "url('/professional-construction-team-engineers-meeting-o.jpg')",
              }}
            />
            <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-lg shadow-lg">
              <p className="text-4xl font-bold">4+</p>
              <p className="text-sm">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
