"use client"
import { useActionState } from "react"
import { submitContactForm, type FormState } from "@/app/actions/contact"
import { CheckCircle, Loader2 } from "lucide-react"

const initialState: FormState = {}

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState)

  return (
    <div className="bg-white rounded-lg shadow-xl p-8">
      <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
      <p className="text-gray-600 mb-8">Fill out the form below and our team will get back to you within 24 hours.</p>

      {state.success ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 flex flex-col items-center text-center">
          <CheckCircle className="h-12 w-12 text-green-500 mb-4" />
          <h3 className="text-xl font-semibold text-green-800 mb-2">Message Sent Successfully!</h3>
          <p className="text-green-700">{state.message}</p>
        </div>
      ) : (
        <form action={formAction} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
              {state.errors?.name && <p className="text-red-500 text-sm mt-1">{state.errors.name[0]}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
              {state.errors?.email && <p className="text-red-500 text-sm mt-1">{state.errors.email[0]}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
              Service You're Interested In *
            </label>
            <select
              id="service"
              name="service"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            >
              <option value="">Select a service</option>
              <option value="ppc">PPC Management</option>
              <option value="cro">Conversion Rate Optimization</option>
              <option value="analytics">Analytics & Data</option>
              <option value="automation">Marketing Automation</option>
              <option value="content">Content Marketing</option>
              <option value="social">Social Media Marketing</option>
              <option value="other">Other</option>
            </select>
            {state.errors?.service && <p className="text-red-500 text-sm mt-1">{state.errors.service[0]}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Your Message *
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            ></textarea>
            {state.errors?.message && <p className="text-red-500 text-sm mt-1">{state.errors.message[0]}</p>}
          </div>

          {state.errors?._form && (
            <div className="bg-red-50 border border-red-200 rounded-md p-4">
              <p className="text-red-500">{state.errors._form[0]}</p>
            </div>
          )}

          <div className="space-y-4 mt-2">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="dataProcessing"
                  name="dataProcessing"
                  type="checkbox"
                  required
                  className="h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="dataProcessing" className="font-medium text-gray-700">
                  I consent to the processing of my personal data *
                </label>
                <p className="text-gray-500">Your data will only be used to contact you and respond to your inquiry.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="privacyPolicy"
                  name="privacyPolicy"
                  type="checkbox"
                  required
                  className="h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="privacyPolicy" className="font-medium text-gray-700">
                  I have read and agree to the{" "}
                  <a href="/privacy-policy" className="text-purple-600 hover:text-purple-800 underline">
                    Privacy Policy
                  </a>{" "}
                  *
                </label>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="cookiePolicy"
                  name="cookiePolicy"
                  type="checkbox"
                  required
                  className="h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="cookiePolicy" className="font-medium text-gray-700">
                  I have read and agree to the{" "}
                  <a href="/cookie-policy" className="text-purple-600 hover:text-purple-800 underline">
                    Cookie Policy
                  </a>{" "}
                  *
                </label>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-gradient-to-r from-purple-600 to-violet-700 hover:from-purple-700 hover:to-violet-800 text-white font-medium py-3 px-6 rounded-md transition duration-300 flex items-center justify-center"
          >
            {isPending ? (
              <>
                <Loader2 className="animate-spin mr-2 h-5 w-5" />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      )}
    </div>
  )
}
