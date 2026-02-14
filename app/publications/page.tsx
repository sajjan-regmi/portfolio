import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Download, Calendar, Users, BookOpen } from "lucide-react"
import Link from "next/link"

const publications = [
  {
    id: 1,
    citation:
      "Sharma, L. N., Poudel, Y. B., Magar, R. P., Bhattarai, M., Neupane, A., Gautam, A., & Regmi, S. (2023). Jalthal biodiversity approach: Conservation of plant diversity with emphasis on rare and threatened trees in Jalthal remnant forest (ForestAction Technical Note No. 01). ForestAction Nepal.",
    year: 2023,
    type: "Technical Note",
    link: "",
  },
  {
    id: 2,
    citation:
      "Khatri, D., Paudel, G., Paudel, D., Regmi, S., & Parajuli, R. (2025). Institutional development and functioning in Nepal’s community forestry: Lessons from four decades of practice. In H. Ojha & D. Khatri (Eds.), Restoring forests and improving livelihoods in Nepal: Four decades of community forestry. Routledge. https://doi.org/10.4324/9781032705613-10",
    year: 2025,
    type: "Book Chapter",
    link: "https://doi.org/10.4324/9781032705613-10",
  },
  {
    id: 3,
    citation:
      "Regmi, S., Rai, R. K., Maharjan, S. K., & Yadav, N. K. (in press). Economics of eucalyptus plantations in Terai, Nepal. Banko Janakari.",
    year: 2024,
    type: "Article (in press)",
    link: "",
  },
  {
    id: 4,
    citation:
      "Regmi, S., Acharya, S., Khatri, D., & Poudel, G. (2026). Technocracy over tenure: The crisis of operational planning in Nepal’s community forests. New Angle: Nepal Journal of Social Science and Public Policy.",
    year: 2026,
    type: "Journal Article",
    link: "",
  },
  {
    id: 5,
    citation:
      "Regmi, S., Khatri, S., Shrestha, S., & Poudel, D. (2026). Exploring dynamics and drivers of change in high-altitude transhumance practice in Nepal: An assessment of factors influencing change. New Angle: Nepal Journal of Social Science and Public Policy.",
    year: 2026,
    type: "Journal Article",
    link: "",
  },
]

const bookChapters = [
  {
    id: 1,
    title: "Sustainable Forest Management in the Context of Climate Change",
    book: "Climate Change and Forest Ecosystems: Global Perspectives",
    editors: ["Prof. Michael Brown", "Dr. Elena Rodriguez"],
    publisher: "Academic Press",
    year: 2023,
    pages: "Chapter 8, pp. 187-210",
    isbn: "978-0-12-345678-9",
    abstract:
      "This chapter discusses the principles and practices of sustainable forest management in the context of climate change, drawing from case studies across different forest types and geographical regions.",
  },
  {
    id: 2,
    title: "Community Participation in Forest Conservation: The Nepal Model",
    book: "Participatory Natural Resource Management: Global Experiences",
    editors: ["Dr. James Wilson", "Prof. Maria Santos"],
    publisher: "Springer Nature",
    year: 2022,
    pages: "Chapter 12, pp. 245-268",
    isbn: "978-3-030-12345-6",
    abstract:
      "This chapter examines Nepal's community forestry program as a model for participatory natural resource management, highlighting successes, challenges, and lessons learned.",
  },
]

const presentations = [
  {
    id: 1,
    type: "Poster Presentation",
    title: "Human-wildlife conflict: how do communities respond to the crisis?",
    event: 'International Conference on “Revitalizing Community Forestry in the Era of Socio-Environmental Crisis”',
    date: "2024-03-04",
    location: "Park Village Resort",
    coPresenters: [],
    description:
      "Poster presentation exploring community responses to human–wildlife conflict at the international conference.",
  },
  {
    id: 2,
    type: "Oral Presentation",
    title:
      "Sustainable Forestry Practices: A Catalyst for Climate Action and Achieving Sustainable Development Goals",
    event: "Nepal Bangladesh Youth Conclave",
    date: "2023-12-18",
    location: "Embassy of Bangladesh in Nepal",
    coPresenters: [],
    description:
      "Oral presentation on sustainable forestry practices and their role in climate action and SDG achievement.",
  },
  {
    id: 3,
    type: "Oral Presentation",
    title: "Should We Think Beyond Silviculture and Make Forest Management Simpler?",
    event: "National Silvicultural Workshop II",
    date: "2025-05-10",
    location: "(various)",
    coPresenters: ["Govinda Poudel", "Dil Khatri"],
    description:
      "Joint oral presentation with Govinda Poudel and Dil Khatri discussing simplification of forest management beyond traditional silviculture.",
  },
  {
    id: 4,
    type: "Oral Presentation",
    title:
      "Why Institutional Development Matters for the Long-Term Success of Ecological Restoration: Insights from the History of Nepal’s Community Forestry",
    event: "(various)",
    date: "2025-05-11",
    location: "(various)",
    coPresenters: ["Dil Khatri", "Govinda Poudel"],
    description:
      "Joint presentation on the role of institutional development in ecological restoration, drawing on Nepal's community forestry history.",
  },
]

const categories = [
  "All",
  "Climate Change",
  "Community Management",
  "Technology & Methods",
  "Policy & Governance",
  "Ecosystem Services",
]

export default function PublicationsPage() {
  return (
    <div className="min-h-screen relative">
      <div className="relative z-10 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Publications & Research</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Peer-reviewed articles, policy briefs, and book chapters contributing to the advancement of forestry
              science and sustainable natural resource management
            </p>
          </div>



          {/* Research Publications */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8 flex items-center">
              <BookOpen className="mr-3 h-8 w-8" />
              Research Publications
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {publications.map((pub) => (
                <Card key={pub.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="mb-3 flex items-center gap-3">
                          <Badge variant="outline" className="text-sm">
                            {pub.type}
                          </Badge>
                          <div className="text-sm text-muted-foreground flex items-center">
                            <Calendar className="h-4 w-4 mr-1" /> {pub.year}
                          </div>
                        </div>

                        <blockquote className="text-base text-pretty italic leading-relaxed border-l-4 border-primary/20 pl-4">
                          {pub.citation}
                        </blockquote>
                      </div>

                      <div className="flex flex-col items-start md:items-end gap-3 md:ml-6">
                        {pub.link ? (
                          <Button size="sm" asChild>
                            <Link href={pub.link} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              View
                            </Link>
                          </Button>
                        ) : (
                          <div className="text-sm text-muted-foreground">No external link</div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Book Chapters */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8 flex items-center">
              <BookOpen className="mr-3 h-8 w-8" />
              Book Chapters
            </h2>
            <div className="space-y-6">
              {bookChapters.map((chapter) => (
                <Card key={chapter.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <Badge variant="secondary" className="mb-2">
                            Book Chapter
                          </Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>{chapter.year}</span>
                          </div>
                        </div>

                        <h3 className="text-xl font-semibold text-primary mb-3 text-balance">{chapter.title}</h3>

                        <div className="text-sm text-muted-foreground mb-2">
                          <strong>In:</strong> {chapter.book}
                        </div>
                        <div className="text-sm text-muted-foreground mb-2">
                          <strong>Editors:</strong> {chapter.editors.join(", ")}
                        </div>
                        <div className="text-sm text-muted-foreground mb-4">
                          <strong>Publisher:</strong> {chapter.publisher} • {chapter.pages} • ISBN: {chapter.isbn}
                        </div>

                        <p className="text-muted-foreground text-pretty">{chapter.abstract}</p>
                      </div>

                      <div className="flex flex-col gap-2 lg:ml-6">
                        <Button size="sm" variant="outline">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Chapter
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Download PDF
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

              {/* Presentations */}
              <section className="mb-16">
                <h2 className="text-3xl font-bold text-primary mb-8 flex items-center">
                  <Users className="mr-3 h-8 w-8" />
                  Presentations
                </h2>
                <div className="space-y-6">
                  {presentations.map((p) => (
                    <Card key={p.id} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                          <div className="flex-1">
                            <div className="mb-2 flex items-center gap-3">
                              <Badge variant="secondary" className="text-sm">{p.type}</Badge>
                              <div className="text-sm text-muted-foreground flex items-center">
                                <Calendar className="h-4 w-4 mr-1" /> {p.date}
                              </div>
                            </div>

                            <h3 className="text-lg font-semibold text-primary mb-1">{p.title}</h3>
                            <div className="text-sm text-muted-foreground mb-1">
                              <strong>Event:</strong> {p.event}
                            </div>
                            <div className="text-sm text-muted-foreground mb-1">
                              <strong>Location:</strong> {p.location}
                            </div>
                            {p.coPresenters && p.coPresenters.length ? (
                              <div className="text-sm text-muted-foreground mb-1 flex items-center gap-2">
                                <Users className="h-4 w-4" /> <span>{p.coPresenters.join(", ")}</span>
                              </div>
                            ) : null}

                            <p className="text-base text-pretty mt-2">{p.description}</p>
                          </div>

                          <div className="flex items-center md:items-start md:flex-col gap-3 md:ml-6">
                            <Button size="sm" variant="outline">Details</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>


        </div>
      </div>
    </div>
  )
}
