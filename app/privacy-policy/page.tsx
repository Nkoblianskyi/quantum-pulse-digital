import Link from "next/link"

export const metadata = {
  title: "Privacy Policy | Quantum Pulse Digital",
  description: "Our commitment to protecting your privacy and personal data",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-violet-700">
          Privacy Policy
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Our commitment to protecting your privacy and personal data
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <p>
          <strong>Last Updated: May 16, 2025</strong>
        </p>

        <h2>1. Introduction</h2>
        <p>
          Welcome to Quantum Pulse Digital ("we," "our," or "us"). We are committed to protecting your privacy and
          personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
          you visit our website or use our services.
        </p>
        <p>
          Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please
          do not access the site or use our services.
        </p>

        <h2>2. Information We Collect</h2>
        <h3>2.1 Personal Data</h3>
        <p>We may collect personal information that you voluntarily provide to us when you:</p>
        <ul>
          <li>Fill out forms on our website</li>
          <li>Subscribe to our newsletter</li>
          <li>Request information or services</li>
          <li>Participate in surveys or promotions</li>
          <li>Contact us via email, phone, or other communication channels</li>
        </ul>
        <p>The personal information we may collect includes:</p>
        <ul>
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Company name</li>
          <li>Job title</li>
          <li>Information about your business and marketing needs</li>
        </ul>

        <h3>2.2 Automatically Collected Information</h3>
        <p>
          When you visit our website, we may automatically collect certain information about your device and usage
          patterns. This information may include:
        </p>
        <ul>
          <li>IP address</li>
          <li>Browser type and version</li>
          <li>Operating system</li>
          <li>Referring website</li>
          <li>Pages viewed and time spent on pages</li>
          <li>Links clicked</li>
          <li>Date and time of visit</li>
        </ul>

        <h2>3. How We Use Your Information</h2>
        <p>We may use the information we collect for various purposes, including to:</p>
        <ul>
          <li>Provide, operate, and maintain our website and services</li>
          <li>Improve, personalize, and expand our website and services</li>
          <li>Understand and analyze how you use our website</li>
          <li>Develop new products, services, features, and functionality</li>
          <li>Communicate with you about our services, updates, and other information</li>
          <li>Process transactions and send related information</li>
          <li>Send marketing and promotional communications</li>
          <li>Find and prevent fraud</li>
          <li>For compliance with legal obligations</li>
        </ul>

        <h2>4. Sharing Your Information</h2>
        <p>We may share your information with third parties in the following situations:</p>
        <ul>
          <li>
            <strong>Service Providers:</strong> We may share your information with third-party vendors, service
            providers, contractors, or agents who perform services for us or on our behalf.
          </li>
          <li>
            <strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of all or a
            portion of our assets, your information may be transferred as part of that transaction.
          </li>
          <li>
            <strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in
            response to valid requests by public authorities.
          </li>
          <li>
            <strong>With Your Consent:</strong> We may share your information with your consent or as otherwise
            disclosed at the time of collection.
          </li>
        </ul>

        <h2>5. Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect the security of your personal
          information. However, please be aware that no method of transmission over the Internet or electronic storage
          is 100% secure, and we cannot guarantee absolute security.
        </p>

        <h2>6. Your Rights</h2>
        <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
        <ul>
          <li>The right to access the personal information we hold about you</li>
          <li>The right to request correction of inaccurate personal information</li>
          <li>The right to request deletion of your personal information</li>
          <li>The right to object to processing of your personal information</li>
          <li>The right to data portability</li>
          <li>The right to withdraw consent</li>
        </ul>
        <p>
          To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
        </p>

        <h2>7. Cookies and Tracking Technologies</h2>
        <p>
          We use cookies and similar tracking technologies to track activity on our website and hold certain
          information. For more information about our use of cookies, please see our{" "}
          <Link href="/cookie-policy" className="text-purple-600 hover:text-purple-800">
            Cookie Policy
          </Link>
          .
        </p>

        <h2>8. Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites. We have no control over and assume no responsibility
          for the content, privacy policies, or practices of any third-party sites or services.
        </p>

        <h2>9. Children's Privacy</h2>
        <p>
          Our services are not intended for individuals under the age of 16. We do not knowingly collect personal
          information from children under 16. If we become aware that we have collected personal information from a
          child under 16, we will take steps to delete that information.
        </p>

        <h2>10. Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
          Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy
          Policy periodically for any changes.
        </p>

        <h2>11. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at:
          <br />
          <p className="text-purple-600 hover:text-purple-800">
            info@quantumpulsedigital.com
          </p>
        </p>
      </div>
    </main>
  )
}
