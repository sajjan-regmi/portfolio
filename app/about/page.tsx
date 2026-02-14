import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen relative">

      <div className="relative z-10 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">About Me</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Passionate about forestry science, climate action, and biodiversity conservation
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Profile Photo */}
            <div className="lg:col-span-1">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-square relative bg-gradient-to-br from-emerald-100 to-emerald-200">
                  <Image
                    src="/about/sajjan.png"
                    alt="Sajjan Regmi"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain"
                    priority
                  />
                </div>


                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold mb-2">Sajjan Regmi</h3>
                    <p className="text-muted-foreground">
                      Forestry Officer & Researcher
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>


            {/* About Content */}
            <div className="lg:col-span-2 space-y-8">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold text-primary mb-4">Personal Statement</h2>
                  <div className="prose prose-lg max-w-none text-foreground">
                    <p className="text-pretty">
                      As a dedicated Forestry Officer and Researcher, I am deeply committed to advancing our
                      understanding of forest ecosystems and their critical role in addressing global environmental
                      challenges. My passion for forestry stems from a profound appreciation for the intricate
                      relationships between forests, climate, and biodiversity.
                    </p>
                    <p className="text-pretty">
                      Throughout my career, I have focused on developing sustainable forest management practices that
                      balance conservation needs with community livelihoods. My research interests span climate change
                      adaptation strategies, biodiversity conservation, and natural resource governance, with a
                      particular emphasis on community-based forest management approaches.
                    </p>
                    <p className="text-pretty">
                      I believe that effective forest conservation requires a multidisciplinary approach that combines
                      scientific rigor with practical field experience and meaningful community engagement. Through my
                      work, I strive to bridge the gap between academic research and real-world implementation of
                      sustainable forestry practices.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold text-primary mb-6">Academic Qualifications</h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-primary font-semibold">MSc</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Master of Science in Forestry</h3>
                        <p className="text-muted-foreground">
                          Specialized in sustainable forest management, climate change adaptation, and ecosystem
                          services
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Focus: Climate-resilient forestry practices
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                        <span className="text-secondary font-semibold">BSc</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Bachelor of Science in Forestry</h3>
                        <p className="text-muted-foreground">
                          Foundation in forest ecology, silviculture, and natural resource management
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Focus: Forest ecosystem dynamics and conservation
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold text-primary mb-6">Professional Journey</h2>
                  <div className="space-y-6">
                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="text-lg font-semibold">Current Role</h3>
                      <p className="text-muted-foreground mb-2">Forestry Officer & Researcher</p>
                      <p className="text-sm text-pretty">
                        Leading research initiatives in sustainable forest management, conducting field assessments, and
                        developing policy recommendations for climate-resilient forestry practices. Collaborating with
                        local communities and government agencies to implement conservation strategies.
                      </p>
                    </div>

                    <div className="border-l-4 border-secondary pl-6">
                      <h3 className="text-lg font-semibold">Research Focus Areas</h3>
                      <ul className="text-sm text-muted-foreground space-y-1 mt-2">
                        <li>• Climate change adaptation in forest ecosystems</li>
                        <li>• Biodiversity conservation strategies</li>
                        <li>• Community-based forest management</li>
                        <li>• Natural resource governance</li>
                        <li>• Sustainable livelihood development</li>
                      </ul>
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
