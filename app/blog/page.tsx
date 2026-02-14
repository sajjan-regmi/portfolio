import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import { posts } from "@/lib/posts"

const blogPosts = posts

const categories = ["All", ...Array.from(new Set(posts.map((p) => p.category)))]

const featured = blogPosts.find((p) => p.featured) || blogPosts[0]
const otherPosts = blogPosts.filter((p) => p.slug !== featured.slug)

export default function BlogPage() {
  return (
    <div className="min-h-screen relative">
      <div className="relative z-10 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Forest Research Blog</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Insights, research findings, and perspectives on forestry, climate change, biodiversity conservation, and
              sustainable natural resource management
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button key={category} variant={category === "All" ? "default" : "outline"} size="sm" className="mb-2">
                {category}
              </Button>
            ))}
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="aspect-video relative bg-gradient-to-br from-emerald-100 to-emerald-200">
                      <img
                        src={featured.coverImage || "/placeholder.svg"}
                        alt={featured.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <Badge className="mb-4">{featured.category}</Badge>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 text-balance">
                    {featured.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 text-pretty">{featured.excerpt}</p>
                  <div className="flex items-center text-sm text-muted-foreground mb-6">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="mr-4">{new Date(featured.date).toLocaleDateString()}</span>
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{featured.readTime}</span>
                  </div>
                  <Button asChild>
                    <Link href={featured.sourceUrl || "#"} target="_blank" rel="noopener noreferrer">
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="aspect-video relative bg-gradient-to-br from-emerald-100 to-emerald-200">
                  <img src={post.coverImage || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors text-balance">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 text-pretty">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={post.sourceUrl || "#"} target="_blank" rel="noopener noreferrer">
                        Read More
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {post.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
