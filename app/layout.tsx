import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import Script from "next/script" // added Script for external integrations
import StructuredData from '@/components/data';
import "./globals.css"
import "./index.css"
import "./data1.css"
import "./data2.css"

const geistSans = Geist({ subsets: ["latin"], variable: "--font-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "Codefort | Innovative Software Solutions for Business Growth",
  description: "Harness the power of scalable software solutions to elevate your business's performance and profitability with Codefort.",
  generator: "codeforttech.com",
  keywords: ['ethereum', 'smart contracts', 'solidity', 'web3', 'decentralized applications',"codeforttech", 'codefort', "code", "coding", 'custom software development', 'bespoke software', 'tailored software', 'custom application development', 'enterprise software development', 'web application development', 'mobile app development', 'desktop software development', 'cross-platform development', 'full-stack development', 'front-end development', 'back-end development', 'api development', 'microservices development', 'cloud-native development', 'serverless development', 'devops for custom software', 'agile custom development', 'scrum development', 'waterfall development', 'iterative development', 'prototype development', 'mvp development', 'minimum viable product', 'proof of concept', 'pilot project', 'software consulting', 'technical consultancy'],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://codeforttech.com", // Replace with your actual domain
  },
  openGraph: {
    title: "Codefort | Innovative Software Solutions for Business Growth",
    description: "Harness the power of scalable software solutions to elevate your business's performance and profitability with Codefort.",
    url: "https://codeforttech.com", // Replace with your actual domain
    siteName: "v0 App",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Codefort | Innovative Software Solutions for Business Growth",
    description: "Harness the power of scalable software solutions to elevate your business's performance and profitability with Codefort.",
  },
  icons: {
    icon:  [
      {
        url: "https://codeforttech.com/coded/logo.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "https://codeforttech.com/coded/logo.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "https://codeforttech.com/logo.svg",
        type: "image/svg+xml",
      },
      {
        url: "https://codeforttech.com/logo.ico",
        sizes: "any",
      },
    ],
     apple: "https://codeforttech.com/coded/logo.webp",
    shortcut: "/logo.ico",
  },
  manifest: "https://codeforttech.com/site.webmanifest", // For PWA support
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <StructuredData />
      </head>
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
