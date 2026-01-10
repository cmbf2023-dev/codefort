import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border px-4 sm:px-6 lg:px-16 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-24">
          {/* Logo and Copyright */}
          <div className="flex flex-col items-start gap-6">
            <Link href="/">
              <Image alt="logo" width={67} height={64} src="/images/logo.png" className="hidden sm:block" />
              <Image alt="logo" width={44.667} height={42.667} src="/images/logo.png" className="sm:hidden" />
            </Link>
            <p className="text-sm text-muted-foreground">© 2023 CodeFort, All rights reserved</p>
          </div>

          {/* Navigation Columns */}
          <div className="flex flex-col sm:flex-row gap-12 lg:gap-16 flex-1 justify-end">
            {/* Company */}
            <div className="flex flex-col gap-4">
              <h3 className="text-base font-semibold text-foreground">Company</h3>
              <div className="flex flex-col gap-3">
                <Link href="/about-us" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About us
                </Link>
                <Link
                  href="/our-process"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Our process
                </Link>
                <Link
                  href="/terms-of-service#privacy-policy"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-of-service"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms of service
                </Link>
              </div>
            </div>

            {/* Services */}
            <div className="flex flex-col gap-4">
              <h3 className="text-base font-semibold text-foreground">Services</h3>
              <div className="flex flex-col gap-3">
                <Link
                  href="/software-development"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Custom Software Development
                </Link>
                <Link href="/blockchain" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Blockchain Development
                </Link>
                <Link
                  href="/product-design"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Product Design
                </Link>
                <Link href="/ai-and-ml" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  AI and ML Development
                </Link>
                <Link
                  href="/outsourcing"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Outsourcing & Recruitment
                </Link>
                <Link
                  href="/maintenance"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Software Maintenance
                </Link>
                <Link href="#startup" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Startup Solutions
                </Link>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-4">
              <h3 className="text-base font-semibold text-foreground">Contact info</h3>
              <div className="flex flex-col gap-3">
                <p className="text-sm text-muted-foreground max-w-xs">
                  CodeFortTech HQ, Adebola House (Suite 100, Rear Wing), 40 Opebi Road, Ikeja-Lagos.
                </p>
                <p className="text-sm text-muted-foreground">info@codeforttech.com</p>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-4 mt-4">
                <a href="https://twitter.com/codeforttech/" target="_blank" rel="noopener noreferrer">
                  <Image alt="social icon" width={40} height={40} src="/images/twitter.svg" />
                </a>
                <a href="https://linkedin.com/in/codeforttech-limited-340848259" target="_blank" rel="noopener noreferrer">
                  <Image alt="social icon" width={40} height={40} src="/images/linkedin.svg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
