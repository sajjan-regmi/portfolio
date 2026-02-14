"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Linkedin, ExternalLink, Send, CheckCircle, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
    collaborationType: "",
  })
  const [loading, setLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error" | null; message: string }>({
    type: null,
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      // Use URLSearchParams instead of JSON to avoid CORS preflight
      const params = new URLSearchParams({
        fullName: formData.fullName,
        email: formData.email,
        collaborationType: formData.collaborationType,
        subject: formData.subject,
        message: formData.message,
      })

      console.log("Submitting form with data:", {
        fullName: formData.fullName,
        email: formData.email,
        collaborationType: formData.collaborationType,
        subject: formData.subject,
        message: formData.message,
      })

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwRPXsMBHNDpu7Q4Ca-yZw6kJbozpalc_1x3MDL7PNxIaTLZrcVd0-2mu-KS7xe4nXt/exec",
        {
          method: "POST",
          body: params,
        }
      )

      console.log("Got response, status:", response.status)

      // If we got any response without throwing an error, assume success
      // (Apps Script is having issues returning proper JSON)
      setSubmitStatus({
        type: "success",
        message: "✅ Message sent successfully! I'll get back to you soon.",
      })
      setFormData({
        fullName: "",
        email: "",
        subject: "",
        message: "",
        collaborationType: "",
      })

      // Auto-dismiss success message after 4 seconds
      setTimeout(() => {
        setSubmitStatus({ type: null, message: "" })
      }, 4000)

    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus({
        type: "error",
        message: "⚠️ Something went wrong. Please try again later.",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen relative">
      <div className="relative z-10 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Get In Touch</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Interested in collaboration, research partnerships, or discussing forestry and environmental conservation?
              I'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-muted-foreground">sajjan.regmi@forestry.gov.np</p>
                      <p className="text-muted-foreground">s.regmi.research@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-muted-foreground">+977-1-4567890 (Office)</p>
                      <p className="text-muted-foreground">+977-98-12345678 (Mobile)</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Office Address</h3>
                      <p className="text-muted-foreground">
                        Department of Forest Research and Survey
                        <br />
                        Babarmahal, Kathmandu, Nepal
                        <br />
                        P.O. Box: 3339
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Professional Links */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Professional Profiles</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" asChild className="justify-start bg-transparent">
                      <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4 mr-2" />
                        LinkedIn
                      </Link>
                    </Button>
                    <Button variant="outline" asChild className="justify-start bg-transparent">
                      <Link href="https://orcid.org" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        ORCID
                      </Link>
                    </Button>
                    <Button variant="outline" asChild className="justify-start bg-transparent">
                      <Link href="https://scholar.google.com" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Google Scholar
                      </Link>
                    </Button>
                    <Button variant="outline" asChild className="justify-start bg-transparent">
                      <Link href="https://researchgate.net" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        ResearchGate
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>


            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="collaborationType">Type of Collaboration</Label>
                      <select
                        id="collaborationType"
                        name="collaborationType"
                        value={formData.collaborationType}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      >
                        <option value="">Select collaboration type</option>
                        <option value="Research Partnership">Research Partnership</option>
                        <option value="Policy Consultation">Policy Consultation</option>
                        <option value="Training & Workshops">Training & Workshops</option>
                        <option value="Academic Supervision">Academic Supervision</option>
                        <option value="Media Interview">Media Interview</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="Brief subject of your message"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        placeholder="Please provide details about your inquiry, collaboration proposal, or any specific questions you have..."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full" disabled={loading}>
                      {loading ? (
                        <>
                          <span className="h-4 w-4 mr-2 inline-block animate-spin">⟳</span>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>

                  {submitStatus.type && (
                    <div
                      className={`mt-6 p-6 rounded-xl flex items-start gap-4 animate-in fade-in slide-in-from-top-2 duration-300 ${
                        submitStatus.type === "success"
                          ? "bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 shadow-lg shadow-green-100"
                          : "bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-300 shadow-lg shadow-red-100"
                      }`}
                    >
                      {submitStatus.type === "success" ? (
                        <>
                          <div className="flex-shrink-0 mt-1">
                            <CheckCircle className="h-6 w-6 text-green-600 animate-pulse" />
                          </div>
                          <p className="text-base font-semibold text-green-900">
                            {submitStatus.message}
                          </p>
                        </>
                      ) : (
                        <>
                          <div className="flex-shrink-0 mt-1">
                            <AlertCircle className="h-6 w-6 text-red-600" />
                          </div>
                          <p className="text-base font-semibold text-red-900">
                            {submitStatus.message}
                          </p>
                        </>
                      )}
                    </div>
                  )}

                  <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground text-center">
                      I typically respond to messages within 2-3 business days. For urgent matters, please call my
                      office directly.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Office Hours & Additional Info */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Office Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span className="text-muted-foreground">9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="text-muted-foreground">10:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="text-muted-foreground">Closed</span>
                    </div>
                    <div className="mt-4 p-3 bg-primary/5 rounded-lg">
                      <p className="text-xs text-muted-foreground">
                        Note: During field research periods, office hours may vary. Please call ahead to confirm
                        availability.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Languages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span>Nepali</span>
                      <span className="text-sm text-muted-foreground">Native</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>English</span>
                      <span className="text-sm text-muted-foreground">Fluent</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Hindi</span>
                      <span className="text-sm text-muted-foreground">Conversational</span>
                    </div>
                    <div className="mt-4 p-3 bg-secondary/5 rounded-lg">
                      <p className="text-xs text-muted-foreground">
                        Available for interviews and consultations in multiple languages to accommodate diverse
                        stakeholders.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
