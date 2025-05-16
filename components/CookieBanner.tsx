"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookiesAccepted = localStorage.getItem("cookiesAccepted")
    if (!cookiesAccepted) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true")
    setIsVisible(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookiesAccepted", "false")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white via-card to-background border-t border-border p-4 md:p-6 z-50 animate-slide-up shadow-lg">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="md:max-w-2xl">
            <h3 className="text-lg font-bold mb-2">Cookie Consent</h3>
            <p className="text-muted-foreground text-sm">
              We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our
              traffic. By clicking "Accept All", you consent to our use of cookies as described in our{" "}
              <Link href="/cookie-policy" className="text-primary hover:underline">
                Cookie Policy
              </Link>
              .
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={declineCookies}
              className="px-5 py-2 rounded-full border border-border hover:bg-card-foreground/5 transition-colors"
            >
              Decline
            </button>
            <button
              onClick={acceptCookies}
              className="px-5 py-2 rounded-full border border-border bg-transparent hover:bg-card-foreground/5 transition-colors"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CookieBanner
