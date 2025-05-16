import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ServiceNotFound() {
  return (
    <div className="container mx-auto px-4 py-24 text-center">
      <h1 className="text-4xl font-bold mb-6">Service Not Found</h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
        The service you're looking for doesn't exist or may have been moved.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild size="lg">
          <Link href="/services">View All Services</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  )
}
