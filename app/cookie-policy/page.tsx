import Link from "next/link"

export const metadata = {
  title: "Cookie Policy | Quantum Pulse Digital",
  description: "Information about how we use cookies and similar technologies on our website",
}

export default function CookiePolicyPage() {
  return (
    <main className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-violet-700">
          Cookie Policy
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Information about how we use cookies and similar technologies on our website
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <p>
          <strong>Last Updated: May 16, 2025</strong>
        </p>

        <h2>1. Introduction</h2>
        <p>
          This Cookie Policy explains how Quantum Pulse Digital ("we," "our," or "us") uses cookies and similar
          technologies on our website. By using our website, you consent to the use of cookies as described in this
          policy.
        </p>

        <h2>2. What Are Cookies?</h2>
        <p>
          Cookies are small text files that are placed on your device when you visit a website. They are widely used to
          make websites work more efficiently and provide information to the website owners. Cookies can be "persistent"
          or "session" cookies. Persistent cookies remain on your device when you go offline, while session cookies are
          deleted as soon as you close your web browser.
        </p>

        <h2>3. Types of Cookies We Use</h2>
        <p>We use the following types of cookies on our website:</p>

        <h3>3.1 Essential Cookies</h3>
        <p>
          These cookies are necessary for the website to function properly. They enable core functionality such as
          security, network management, and account access. You may disable these by changing your browser settings, but
          this may affect how the website functions.
        </p>

        <h3>3.2 Performance and Analytics Cookies</h3>
        <p>
          These cookies help us understand how visitors interact with our website by collecting and reporting
          information anonymously. They help us improve the functionality and user experience of our website.
        </p>

        <h3>3.3 Functionality Cookies</h3>
        <p>
          These cookies enable the website to provide enhanced functionality and personalization. They may be set by us
          or by third-party providers whose services we have added to our pages.
        </p>

        <h3>3.4 Targeting and Advertising Cookies</h3>
        <p>
          These cookies are used to deliver advertisements more relevant to you and your interests. They are also used
          to limit the number of times you see an advertisement and help measure the effectiveness of advertising
          campaigns.
        </p>

        <h2>4. Specific Cookies We Use</h2>
        <table className="min-w-full border border-gray-300 my-6">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Cookie Name</th>
              <th className="border border-gray-300 px-4 py-2">Type</th>
              <th className="border border-gray-300 px-4 py-2">Purpose</th>
              <th className="border border-gray-300 px-4 py-2">Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">_ga</td>
              <td className="border border-gray-300 px-4 py-2">Analytics</td>
              <td className="border border-gray-300 px-4 py-2">Used by Google Analytics to distinguish users</td>
              <td className="border border-gray-300 px-4 py-2">2 years</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">_gid</td>
              <td className="border border-gray-300 px-4 py-2">Analytics</td>
              <td className="border border-gray-300 px-4 py-2">Used by Google Analytics to distinguish users</td>
              <td className="border border-gray-300 px-4 py-2">24 hours</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">_gat</td>
              <td className="border border-gray-300 px-4 py-2">Analytics</td>
              <td className="border border-gray-300 px-4 py-2">Used by Google Analytics to throttle request rate</td>
              <td className="border border-gray-300 px-4 py-2">1 minute</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">cookie_consent</td>
              <td className="border border-gray-300 px-4 py-2">Essential</td>
              <td className="border border-gray-300 px-4 py-2">Stores your cookie consent preferences</td>
              <td className="border border-gray-300 px-4 py-2">1 year</td>
            </tr>
          </tbody>
        </table>

        <h2>5. Third-Party Cookies</h2>
        <p>
          In addition to our own cookies, we may also use various third-party cookies to report usage statistics,
          deliver advertisements, and so on. These cookies may include:
        </p>
        <ul>
          <li>Google Analytics</li>
          <li>Google Ads</li>
          <li>Facebook Pixel</li>
          <li>LinkedIn Insight Tag</li>
          <li>HubSpot</li>
        </ul>

        <h2>6. How to Manage Cookies</h2>
        <p>
          Most web browsers allow you to control cookies through their settings. You can usually find these settings in
          the "Options" or "Preferences" menu of your browser. The following links may be helpful:
        </p>

        <p>
          To opt out of being tracked by Google Analytics across all websites, you can visit{" "}

        </p>
        <p>
          Please note that restricting cookies may impact the functionality of our website and your experience using it.
        </p>

        <h2>7. Cookie Consent</h2>
        <p>
          When you first visit our website, you will be shown a cookie banner that allows you to accept or decline
          non-essential cookies. You can change your preferences at any time by clicking on the "Cookie Settings" link
          in the footer of our website.
        </p>

        <h2>8. Changes to This Cookie Policy</h2>
        <p>
          We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie
          Policy on this page and updating the "Last Updated" date. You are advised to review this Cookie Policy
          periodically for any changes.
        </p>

        <h2>9. Contact Us</h2>
        <p>
          If you have any questions about our Cookie Policy, please contact us at:
          <br />
          <p  className="text-purple-600 hover:text-purple-800">
            info@quantumpulsedigital.com
          </p>
        </p>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p>
            For more information about how we protect your privacy, please see our{" "}
            <Link href="/privacy-policy" className="text-purple-600 hover:text-purple-800">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </main>
  )
}
