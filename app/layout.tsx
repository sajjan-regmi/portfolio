import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ForestAnimations } from "@/components/forest-animations"
import { Navigation } from "@/components/navigation"
import "./globals.css"

export const metadata: Metadata = {
  title: "Sajjan Regmi - Forestry Officer & Researcher",
  description:
    "Professional website of Sajjan Regmi, Forestry Officer and Researcher specializing in climate action, biodiversity conservation, and natural resource governance.",
  generator: "v0.app",
  keywords: "Forestry Nepal, Climate Change, Biodiversity, Research Officer, Sajjan Regmi",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ForestAnimations />
        <Navigation />
        <Suspense fallback={null}>{children}</Suspense>
">
        <Analytics />
</body>
    </html>
  )
}
