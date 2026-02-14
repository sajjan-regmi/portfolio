import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen relative">

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src="/sajjan.mp4" type="video/mp4" />
        </video>

        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('/lush-green-forest-canopy-sunlight-filtering-throug.jpg')`,
          }}
        />

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-primary mb-4 text-balance">Sajjan Regmi</h1>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-6 text-balance">
              Forestry Officer & Researcher
            </p>
            <p className="text-lg md:text-xl text-foreground max-w-2xl mx-auto text-pretty">
              Dedicated to advancing forestry science, climate action, and biodiversity conservation through research,
              policy development, and sustainable natural resource management.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              <Link href="/publications">Research & Publications</Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="text-lg px-8">
              <Link href="/blog">Read Blog</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Overview Section */}
      <section className="py-16 bg-muted/30 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Advancing Forest Science</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Combining academic excellence with practical field experience to address critical challenges in forestry
              and environmental conservation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-semibold mb-2">Academic Excellence</h3>
                <p className="text-muted-foreground text-pretty">
                  MSc and BSc in Forestry with focus on sustainable forest management and climate change adaptation
                  strategies.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🔬</div>
                <h3 className="text-xl font-semibold mb-2">Research Impact</h3>
                <p className="text-muted-foreground text-pretty">
                  Published research on biodiversity conservation, natural resource governance, and climate action in
                  peer-reviewed journals.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-semibold mb-2">Field Experience</h3>
                <p className="text-muted-foreground text-pretty">
                  Extensive fieldwork experience in forest assessment, community engagement, and policy implementation
                  across diverse ecosystems.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Let's Collaborate</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Interested in forestry research, policy development, or sustainable natural resource management? Let's work
            together to create positive impact.
          </p>
          <Button asChild size="lg" className="text-lg px-8">
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
