"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { useState } from "react"

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "Baneshwor-10, Kathmandu, Nepal",
    href: "https://maps.google.com/?q=Baneshwor,Kathmandu,Nepal",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+977 9851152392, +977 9851190713",
    href: "tel:+9779851152392",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@rpconstruction.com",
    href: "mailto:info@rpconstruction.com",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Sun - Fri: 9:00 AM - 6:00 PM",
    href: null,
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
    alert("Thank you for your message. We will get back to you soon!")
  }

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 bg-primary">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-accent font-semibold tracking-wide uppercase text-sm mb-4">Contact Us</p>
              <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
                Let's Discuss Your Project
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
                Have a construction project in mind? Get in touch with our team for a free consultation and quote.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="p-3 bg-accent/10 rounded-lg">
                        <item.icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-foreground hover:text-accent transition-colors"
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-foreground">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map placeholder */}
                <div
                  className="mt-8 aspect-square rounded-lg bg-cover bg-center border border-[#ccc]"
                  style={{
                    backgroundImage: "url('/map.png')",
                  }}
                />
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-card border border-[#ccc] rounded-lg p-8">
                  <h2 className="text-2xl font-bold text-card-foreground mb-6">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Your name"
                          className="border border-[#ccc] focus:border-orange-500 focus:ring-orange-500"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          className="border border-[#ccc] focus:border-orange-500 focus:ring-orange-500"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          className="border border-[#ccc] focus:border-orange-500 focus:ring-orange-500"
                          type="tel"
                          placeholder="+977 98XXXXXXXX"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          className="border border-[#ccc] focus:border-orange-500 focus:ring-orange-500"
                          type="text"
                          placeholder="Project inquiry"
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        className="border border-[#ccc] focus:border-orange-500 focus:ring-orange-500"
                        id="message"
                        placeholder="Tell us about your project..."
                        rows={6}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full cursor-pointer sm:w-auto bg-orange-500 text-accent-foreground hover:bg-orange-600"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
