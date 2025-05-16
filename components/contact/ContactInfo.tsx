import { Mail, MapPin, Phone, Clock } from "lucide-react"

export default function ContactInfo() {
  return (
    <div className="bg-gray-50 rounded-lg shadow-lg p-8">
      <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
      <p className="text-gray-600 mb-8">Reach out directly or visit our office. We're always happy to hear from you.</p>

      <div className="space-y-6">
        <div className="flex items-start">
          <div className="bg-purple-100 p-3 rounded-full mr-4">
            <MapPin className="h-6 w-6 text-purple-600" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Office Location</h3>
            <p className="text-gray-600 mt-1">
              Allenby St 94
              <br />
              Tel Aviv-Yafo, 6581301
              <br />
              Israel
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="bg-purple-100 p-3 rounded-full mr-4">
            <Phone className="h-6 w-6 text-purple-600" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Phone</h3>
            <p className="text-gray-600 mt-1">
              <a href="tel:+97253426791" className="hover:text-purple-600 transition-colors">
                +972 53 426 7191
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="bg-purple-100 p-3 rounded-full mr-4">
            <Mail className="h-6 w-6 text-purple-600" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Email</h3>
            <p className="text-gray-600 mt-1">
              <a href="mailto:info@quantumpulsedigital.com" className="hover:text-purple-600 transition-colors">
                info@quantumpulsedigital.com
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="bg-purple-100 p-3 rounded-full mr-4">
            <Clock className="h-6 w-6 text-purple-600" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Business Hours</h3>
            <p className="text-gray-600 mt-1">
              Monday - Friday: 9:00 AM - 6:00 PM
              <br />
              Saturday - Sunday: Closed
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}
