import type { Metadata } from "next"
import { Inter, Newsreader } from "next/font/google"
import { ThemeProvider } from "@/components/ThemeProvider"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
})

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-headline",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://geraldofori.vercel.app"),
  title: {
    default: "Gerald Ofori | Software Engineer & Architect",
    template: "%s | Gerald Ofori",
  },
  description:
    "Building high-performance systems for deep thought. Software engineer and architect based in Accra, building globally.",
  keywords: [
    "Software Engineer",
    "Frontend Architect",
    "React",
    "Next.js",
    "TypeScript",
    "Ghana",
    "Gerald Ofori",
  ],
  authors: [{ name: "Gerald Ofori" }],
  creator: "Gerald Ofori",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://geraldofori.vercel.app",
    title: "Gerald Ofori | Software Engineer & Architect",
    description:
      "Building high-performance systems for deep thought. Software engineer and architect based in Accra, building globally.",
    siteName: "Gerald Ofori",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gerald Ofori | Software Engineer & Architect",
    description:
      "Building high-performance systems for deep thought. Software engineer and architect based in Accra, building globally.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${newsreader.variable} h-full`}
    >
      <body className="min-h-screen bg-background text-on-surface dark:bg-dark-surface dark:text-dark-on-surface font-body antialiased">
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
