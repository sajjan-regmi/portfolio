import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Award } from "lucide-react"

const workshops = [
  {
    id: 1,
    title:
      "Participated in a national-level consultation on management strategies for invasive alien species, contributing to discussions on their inclusion in Nepal’s National Biodiversity Strategy and Action Plan (NBSAP)",
    type: "Participant",
    date: "2024-08-30",
    location: "Central Department of Botany, Tribhuvan University, Kathmandu, Nepal",
    organizer: "Central Department of Botany, Tribhuvan University",
    participants: 120,
    description:
      "Contributed to discussions on invasive alien species and their inclusion in Nepal's NBSAP.",
    topics: ["Invasive species", "Biodiversity strategy"],
    role: "Participant",
  },
  {
    id: 2,
    title:
      "Served as a Documenter at the International Workshop on Green Development of the Nepal–China Economic Corridor",
    type: "Documenter",
    date: "2023-08-07",
    location: "Kathmandu, Nepal",
    organizer: "International Workshop",
    participants: 90,
    description:
      "Served as Documenter, recording proceedings and outcomes for the workshop.",
    topics: ["Green development", "Economic corridor"],
    role: "Documenter",
  },
  {
    id: 3,
    title:
      "Attended a talk program on Transformation of Forest Agencies in the Context of Changing Forestry Goals (World Ranger Day)",
    type: "Attendee",
    date: "2023-07-31",
    location: "Kathmandu, Nepal",
    organizer: "Nepal Forestry Association",
    participants: 75,
    description:
      "Attended a talk program on transformation of forest agencies in celebration of World Ranger Day.",
    topics: ["Institutional change", "Forest agencies"],
    role: "Attendee",
  },
  {
    id: 4,
    title:
      "Attended a talk program on Status, Challenges, and Future Strategies for the Innovative Forest Products Development Board",
    type: "Attendee",
    date: "2023-07-21",
    location: "NFA Building, Kathmandu, Nepal",
    organizer: "Nepal Forestry Association",
    participants: 60,
    description:
      "Participated in a talk program discussing status, challenges, and future strategies for the Innovative Forest Products Development Board.",
    topics: ["Forest products", "Institutional strategy"],
    role: "Attendee",
  },
  {
    id: 5,
    title: "Attended an event on Forest Restoration and Invasive Species Management in Nepal",
    type: "Attendee",
    date: "2024-01-31",
    location: "Kathmandu, Nepal",
    organizer: "ForestAction Nepal",
    participants: 80,
    description:
      "Event organized by ForestAction Nepal focused on forest restoration and invasive species management.",
    topics: ["Forest restoration", "Invasive species"],
    role: "Attendee",
  },
  {
    id: 6,
    title: "Participated in a two-day Community Conservation Workshop (led by Teri Allendorf)",
    type: "Participant",
    date: "2024-01-20",
    location: "Kathmandu, Nepal",
    organizer: "Community Conservation Organizer",
    participants: 40,
    description:
      "Two-day Community Conservation Workshop led by Teri Allendorf.",
    topics: ["Community conservation", "Conservation practice"],
    role: "Participant",
  },
  {
    id: 7,
    title: "Attended the National Bamboo Conference to promote bamboo’s role in Nepal’s green economy",
    type: "Participant",
    date: "2025-02-26",
    location: "Diktel, Khotang, Nepal",
    organizer: "MoFE, FRTC, Green Bamboo Creation",
    participants: 200,
    description:
      "Conference to promote bamboo's role in Nepal's green economy.",
    topics: ["Bamboo", "Green economy"],
    role: "Participant",
  },
  {
    id: 8,
    title: "Participated in the Ninth NJAA Symposium on Wildlife Management: Challenges and Solutions",
    type: "Participant",
    date: "2025-01-13",
    location: "Kathmandu, Nepal",
    organizer: "NJAA",
    participants: 150,
    description:
      "Participated in the Ninth NJAA Symposium focusing on wildlife management challenges and solutions.",
    topics: ["Wildlife management", "Human-wildlife conflict"],
    role: "Participant",
  },
]

const presentations = [

  {
    id: 4,
    title: "Human-wildlife conflict: how do communities respond to the crisis?",
    event: "Revitalizing Community Forestry in the Era of Socio-Environmental Crisis",
    date: "2024-03-04",
    location: "Park Village Resort, Nepal",
    type: "Poster Presentation",
  },
  {
    id: 5,
    title: "Sustainable Forestry Practices: A Catalyst for Climate Action and Achieving Sustainable Development Goals",
    event: "Nepal Bangladesh Youth Conclave",
    date: "2023-12-18",
    location: "Embassy of Bangladesh in Nepal",
    type: "Oral Presentation",
  },
  {
    id: 6,
    title: "Should We Think Beyond Silviculture and Make Forest Management Simpler?",
    event: "National Silvicultural Workshop II",
    date: "2025-05-10",
    location: "Nepal",
    type: "Oral Presentation",
  },
  {
    id: 7,
    title: "Why Institutional Development Matters for the Long-Term Success of Ecological Restoration: Insights from the History of Nepal’s Community Forestry",
    event: "POLLEN 2024 Conference",
    date: "2024-06-10",
    location: "Lund, Sweden",
    type: "Oral Presentation",
  },
]

const trainings = [
  { id: 1, title: "SPSS Training", duration: "7 days", organizer: "GRIT Center, Kathmandu" },
  { id: 2, title: "GIS Modelling & Remote Sensing Training", duration: "5 days", organizer: "Resources Himalaya Foundation" },
  { id: 3, title: "Environmental Impact Assessment (EIA) Training", duration: "9 days", organizer: "SCHEMS College" },
  { id: 4, title: "R Programming Course", duration: "Online", organizer: "Johns Hopkins University (Coursera)" },
  { id: 5, title: "Entrepreneurship Development Training", duration: "10 days", organizer: "Cottage & Small Industry Office (2017)" },
]

export default function WorkshopsPage() {
  return (
    <div className="min-h-screen relative">
      <div className="relative z-10 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Workshops & Presentations</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Professional development activities, conference presentations, and knowledge sharing initiatives in
              forestry and environmental research
            </p>
          </div>



          {/* Workshops & Training */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8 flex items-center">
              <Users className="mr-3 h-8 w-8" />
              Workshops & Training Programs
            </h2>
            <div className="space-y-6">
              {workshops.map((workshop) => (
                <Card key={workshop.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <Badge className="mb-2">{workshop.type}</Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>{new Date(workshop.date).toLocaleDateString()}</span>
                          </div>
                        </div>

                        <h3 className="text-xl font-semibold text-primary mb-3 text-balance">{workshop.title}</h3>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2" />
                            <span>{workshop.location}</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-2" />
                            <span>{workshop.participants} participants</span>
                          </div>
                          <div className="flex items-center">
                            <Award className="h-4 w-4 mr-2" />
                            <span>{workshop.role}</span>
                          </div>
                        </div>

                        <div className="text-sm text-muted-foreground mb-4">
                          <strong>Organized by:</strong> {workshop.organizer}
                        </div>

                        <p className="text-muted-foreground mb-4 text-pretty">{workshop.description}</p>

                        <div className="flex flex-wrap gap-2">
                          {workshop.topics.map((topic) => (
                            <Badge key={topic} variant="outline" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Trainings */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6 flex items-center">
              <Users className="mr-3 h-8 w-8" />
              Trainings
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {trainings.map((t) => (
                <Card key={t.id} className="hover:shadow-lg transition-shadow">
                  <CardContent>
                    <h3 className="font-semibold text-primary">{t.title}</h3>
                    <div className="text-sm text-muted-foreground">{t.duration} — {t.organizer}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          

          {/* Volunteer Works */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-primary mb-8 flex items-center">
              <Award className="mr-3 h-8 w-8" />
              Volunteer Works
            </h2>
            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <Badge className="mb-2">Volunteer</Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>May 2017 – November 2017</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold text-primary mb-3 text-balance">
                        Integrated Village Development Service (IVDS) — USAID
                      </h3>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>Sabal Project, Makwanpur</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4 text-pretty">
                        Supported community disaster management and climate change adaptation initiatives in rural Nepal.
                      </p>

                      <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                        <li>• Facilitated the formation of community disaster management committees</li>
                        <li>• Supported local communities in planning and implementing climate change adaptation activities</li>
                      </ul>

                      <div className="text-sm text-muted-foreground">
                        <strong>Reference:</strong> Nirmal Kumar Paudel, Executive Director, IVDS Makwanpur
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <Badge className="mb-2">Fieldwork Support</Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>January 2023</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold text-primary mb-3 text-balance">
                        Fieldwork Support — University of Cambridge
                      </h3>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>Hetauda, Nepal</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4 text-pretty">
                        Assisted PhD research on the experiences of working women in Nepal, contributing to data collection and community engagement activities.
                      </p>

                      <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                        <li>• Assisted Grace Mueller (PhD candidate, University of Cambridge) in conducting fieldwork</li>
                        <li>• Contributed to data collection and community engagement activities</li>
                      </ul>

                      <div className="text-sm text-muted-foreground">
                        <strong>Reference:</strong> Grace Mueller — muelleregrace@gmail.com
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
