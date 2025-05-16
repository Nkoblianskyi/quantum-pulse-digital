import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative h-10 w-10">
                <Image
                  src="/logo.png"
                  alt="QuantumPulse Digital Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="font-space font-bold text-xl">QuantumPulse</span>
            </div>
            <p className="text-muted-foreground">
              We transform digital marketing strategies into measurable growth systems for forward-thinking businesses.
            </p>
            <div className="flex flex-col space-y-2">
              <a
                href="mailto:info@quantumpulsedigital.com"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={16} />
                <span>info@quantumpulsedigital.com</span>
              </a>
              <a
                href="tel:+97253426791"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone size={16} />
                <span>+972 53 426 7191</span>
              </a>
              <div className="flex items-start space-x-2 text-muted-foreground">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Allenby St 94, Tel Aviv-Yafo, 6581301, Israel</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/ppc-management"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-2" />
                  PPC Management
                </Link>
              </li>
              <li>
                <Link
                  href="/services/conversion-optimization"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-2" />
                  Conversion Optimization
                </Link>
              </li>
              <li>
                <Link
                  href="/services/analytics-setup"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-2" />
                  Analytics Setup
                </Link>
              </li>
              <li>
                <Link
                  href="/services/marketing-automation"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-2" />
                  Marketing Automation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-2" />
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-2" />
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-2" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/faq"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-2" />
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-2" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-2" />
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              &copy; {currentYear} QuantumPulse Digital. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cookie-policy"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
