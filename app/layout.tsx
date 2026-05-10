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
  title: "Gerald Ofori — Software Engineer & Architect",
  description:
    "Building high-performance systems for deep thought. Software engineer and architect based in Accra, building globally.",
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
