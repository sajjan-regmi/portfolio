export interface Post {
  id: string
  featured?: boolean
  category: string
  title: string
  excerpt: string
  date: string
  readTime?: string
  cta?: string
  slug: string
  tags?: string[]
  sourceUrl?: string
  coverImage?: string
  content?: string
}

export const posts: Post[] = [
  {
    id: "post-001",
    featured: false,
    category: "Sustainable Practices",
    title: "Embracing Controlled Burning for Sustainable Forest Management",
    excerpt:
      "Controlled burning (prescribed fire) can reduce fuel build-up and lower wildfire risk when planned carefully with community involvement and safety protocols.",
    date: "2023-12-10",
    readTime: "6 min read",
    cta: "Read Full Article",
    slug: "embracing-controlled-burning-sustainable-forest-management",
    tags: ["Forest Fire Management", "Prescribed Burning", "Risk Reduction", "Sustainable Forestry"],
    sourceUrl: "https://english.onlinekhabar.com/embracing-controlled-burning-for-sustainable-forest-management.html",
    coverImage: "/Blog/5.png",
  },
  {
    id: "post-002",
    featured: false,
    category: "Community Forestry",
    title: "Mobilizing Forest Resources Effectively: A Key to Reviving Participation in Community Forestry",
    excerpt:
      "Revitalizing community forestry participation through stronger governance, transparent resource mobilization, and inclusive decision-making that sustains local stewardship.",
    date: "2023-12-05",
    readTime: "7 min read",
    cta: "Read Full Article",
    slug: "mobilizing-forest-resources-community-forestry-participation",
    tags: ["Community Forestry", "Resource Mobilization", "Governance", "Participation"],
    sourceUrl: "https://english.ratopati.com/story/40091",
    coverImage: "/Blog/6.png",
  },
  {
    id: "post-003",
    featured: false,
    category: "Cultural Ecology",
    title: "Disappearing Chautari: Nepal’s Sacred Rest Stops at Risk Amid Modern Development",
    excerpt:
      "Traditional chautari—stone resting platforms under sacred trees—are disappearing due to infrastructure expansion, threatening cultural heritage and local ecological benefits.",
    date: "2023-11-28",
    readTime: "5 min read",
    cta: "Read Full Article",
    slug: "disappearing-chautari-nepal-sacred-rest-stops",
    tags: ["Cultural Heritage", "Sacred Trees", "Landscape Conservation", "Nepal"],
    sourceUrl: "https://english.onlinekhabar.com/disappearing-chautari-nepals-sacred-rest-stops-at-risk-amid-modern-development.html",
    coverImage: "/Blog/7.png",
  },
  {
    id: "post-004",
    featured: false,
    category: "Mountain Livelihoods",
    title: "Chauri Goth in Sailung: High-Altitude Pastoral Systems and Local Livelihoods",
    excerpt:
      "A look into chauri herding traditions in Sailung and how seasonal grazing, indigenous knowledge, and pasture management shape mountain livelihoods and ecosystems.",
    date: "2023-11-20",
    readTime: "6 min read",
    cta: "Read Full Article",
    slug: "chauri-goth-sailung-high-altitude-pastoral-systems",
    tags: ["Pastoralism", "High Altitude Ecosystems", "Livelihoods", "Sailung"],
    sourceUrl: "https://askmeaboutnepal.com/post/chauri-goth-in-sailung",
    coverImage: "/Blog/8.png",
  },
]

export const postsBySlug = posts.reduce<Record<string, Post>>((acc, p) => {
  acc[p.slug] = p
  return acc
}, {})

export default posts
