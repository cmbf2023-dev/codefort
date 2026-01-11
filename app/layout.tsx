import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import Script from "next/script" // added Script for external integrations
import "./globals.css"
import "./index.css"
import "./data1.css"
import "./data2.css"

const geistSans = Geist({ subsets: ["latin"], variable: "--font-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "Codefort | Innovative Software Solutions for Business Growth",
  description:
    "Harness the power of scalable software solutions to elevate your business's performance and profitability with Codefort.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/coded/logo.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/coded/logo.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/logo.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/_next/logo.webp",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Script
          src="https://cdn.jsdelivr.net/npm/tsparticles-slim@2.0.6/tsparticles.slim.bundle.min.js"
          strategy="lazyOnload"
        />
        <Script src="https://www.google.com/recaptcha/enterprise.js?" strategy="lazyOnload" />
      </body>
    </html>
  )
}
