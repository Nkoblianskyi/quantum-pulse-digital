"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useRouter } from "next/navigation"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const handleNavigation = (href: string) => {
    // Close the mobile menu if it's open
    setIsMenuOpen(false)

    // Navigate to the page
    router.push(href)

    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[72px] ${
        isScrolled ? "bg-background/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => handleNavigation("/")}>
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigationItems.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavigation(link.href)}
              className="text-foreground/80 hover:text-primary transition-colors duration-200"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => handleNavigation("/contact")}
            className="px-5 py-2 rounded-full border border-border bg-transparent hover:bg-card-foreground/5 transition-colors"
          >
            Contact Us
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-background/95 backdrop-blur-lg z-40 animate-fade-in">
          <nav className="flex flex-col items-center justify-center h-full space-y-8">
            {navigationItems.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavigation(link.href)}
                className="text-xl font-medium text-foreground hover:text-primary transition-colors duration-200"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => handleNavigation("/contact")}
              className="px-8 py-3 rounded-full border border-border bg-transparent hover:bg-card-foreground/5 transition-colors"
            >
              Contact Us
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
