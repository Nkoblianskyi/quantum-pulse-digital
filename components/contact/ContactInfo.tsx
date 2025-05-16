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

      <div className="mt-10">
        <h3 className="font-semibold text-lg mb-4">Our Location</h3>
        <div className="h-64 bg-gray-200 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.0968706849!2d34.77193491524158!3d32.0698089810193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4b82a6148a07%3A0x9f5e6e5e6f8d57c0!2sAllenby%20St%2094%2C%20Tel%20Aviv-Yafo%2C%20Israel!5e0!3m2!1sen!2sus!4v1652345678901!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  )
}
