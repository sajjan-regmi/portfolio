import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { postsBySlug } from "@/lib/posts"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = postsBySlug[params.slug]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen relative">
      <div className="relative z-10 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <Button variant="ghost" asChild>
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>

          {/* Article Header */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">{post.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">{post.title}</h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty">{post.excerpt}</p>

              <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground mb-8">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{post.readTime}</span>
                </div>
                <Button variant="ghost" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>

              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {(post.tags || []).map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Featured Image */}
            <div className="aspect-video relative bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-lg overflow-hidden mb-12">
              <img src={post.coverImage || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
            </div>

            {/* Article Content */}
            <Card>
              <CardContent className="p-8 md:p-12">
                <div
                  className="prose prose-lg max-w-none text-foreground prose-headings:text-primary prose-a:text-primary prose-strong:text-foreground"
                  dangerouslySetInnerHTML={{ __html: post.content ?? `<p>${post.excerpt}</p>` }}
                />
              </CardContent>
            </Card>

            {/* Author Bio */}
            <Card className="mt-12">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full flex items-center justify-center text-2xl">
                    👨‍🔬
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Sajjan Regmi</h3>
                    <p className="text-muted-foreground text-pretty">
                      Forestry Officer & Researcher specializing in climate change adaptation, biodiversity
                      conservation, and community-based forest management. With over 5 years of field experience in
                      Nepal's diverse forest ecosystems.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Articles */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-primary mb-8 text-center">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="mb-3">
                      Research Methods
                    </Badge>
                    <h3 className="text-lg font-semibold mb-2 text-balance">
                      Advanced Techniques in Forest Biodiversity Monitoring
                    </h3>
                    <p className="text-sm text-muted-foreground text-pretty">
                      Leveraging modern technology including remote sensing and AI to monitor forest biodiversity more
                      effectively.
                    </p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="mb-3">
                      Policy & Governance
                    </Badge>
                    <h3 className="text-lg font-semibold mb-2 text-balance">
                      From Policy to Practice: Implementing Forest Conservation Strategies
                    </h3>
                    <p className="text-sm text-muted-foreground text-pretty">
                      Bridging the gap between forest policy development and on-ground implementation.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
