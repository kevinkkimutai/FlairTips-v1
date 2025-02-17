import React from 'react'

export const metadata = {
  title: "Privacy-Policy | FlairTips",
  description: "FlairTips description",
  keywords: ["betting", "Tips", "predictions", "todays predictions", "Todays tips", "Todays matches"],
  alternates: {
    canonical: "hhttps://flairtips.com",
    languages: {
      "en-US": "https://flairtips.com/",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Privacy-Policy | FlairTips",
    description:
      "FlairTips Predictions",
    url: "https://flairtips.com",
    type: "website",
    images: [
      {
        url: "https://flairtips.com/favicon.ico",
        width: 1200,
        height: 630,
        alt: "FlairTips",
      },
    ],
  },
  twitter: {
    card: "FlairTips",
    title: "Privacy-Policy | FlairTips",
    site:  "https://flairtips.com",
    description:
      "FlairTips Predictions",
    images: [
      "https://flairtips.com/favicon.ico",
    ],
  },
};
export default function page() {
  return (
    <div className="text-black lg:py-5 max-md:px-0 max-2xl:px-4">
 
      <div className="mx-auto p-8 ">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-700 mb-6">
          Welcome to FlarTips ("we," "our," or "us"). Your privacy is
          important to us, and we are committed to protecting your personal data.
          This Privacy Policy explains how we collect, use, and safeguard your
          information when you use our website and services.
        </p>

        <h2 className="text-2xl font-semibold mb-3">1. Information We Collect</h2>
        <h3 className="text-xl font-medium mb-2">a) Personal Information</h3>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number (if provided)</li>
          <li>Payment details (processed securely through third-party providers)</li>
        </ul>

        <h3 className="text-xl font-medium mb-2">b) Non-Personal Information</h3>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>IP address</li>
          <li>Browser type and version</li>
          <li>Device information</li>
          <li>Usage data (pages visited, time spent, referral source)</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3">2. How We Use Your Information</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>To provide and manage our betting tips and prediction services</li>
          <li>To process transactions and payments securely</li>
          <li>To communicate with you regarding updates, promotions, or support requests</li>
          <li>To improve our website’s functionality and user experience</li>
          <li>To comply with legal obligations and prevent fraud</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3">3. Cookies and Tracking Technologies</h2>
        <p className="text-gray-700 mb-4">
          We use cookies and similar tracking technologies to enhance your browsing experience.
          You can control or disable cookies through your browser settings.
        </p>

        <h2 className="text-2xl font-semibold mb-3">4. Third-Party Services</h2>
        <p className="text-gray-700 mb-4">
          We may share data with third-party services for:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Payment processing</li>
          <li>Analytics (Google Analytics, Facebook Pixel, etc.)</li>
          <li>Advertising and marketing purposes</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3">5. Data Security</h2>
        <p className="text-gray-700 mb-4">
          We implement industry-standard security measures to protect your personal information.
          However, no online transmission is 100% secure, and we cannot guarantee absolute security.
        </p>

        <h2 className="text-2xl font-semibold mb-3">6. Your Rights</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Access and request copies of your personal data</li>
          <li>Request corrections to inaccurate information</li>
          <li>Request deletion of your personal data</li>
          <li>Opt-out of marketing communications</li>
        </ul>
        <p className="text-gray-700 mb-4">
          To exercise these rights, please contact us at **flairtips@gmail.com**.
        </p>

        <h2 className="text-2xl font-semibold mb-3">7. Children’s Privacy</h2>
        <p className="text-gray-700 mb-4">
          Our services are not intended for individuals under the age of 18. We do not knowingly collect
          personal data from minors.
        </p>

        <h2 className="text-2xl font-semibold mb-3">8. Changes to This Privacy Policy</h2>
        <p className="text-gray-700 mb-4">
          We may update this Privacy Policy from time to time. Any changes will be posted on this page
          with an updated effective date.
        </p>

        <h2 className="text-2xl font-semibold mb-3">9. Contact Us</h2>
        <p className="text-gray-700 mb-4">
          If you have any questions or concerns about this Privacy Policy, please contact us at:
        </p>
        <p className="text-gray-700"><strong>Email:</strong> flairtips@gmail.com</p>
        <p className="text-gray-700"><strong>Website:</strong> www.flairtips.com</p>
        <p className="text-gray-700"><strong>Address:</strong> Nairobi, Kenya</p>

        <p className="text-gray-700 mt-6">By using our website, you consent to this Privacy Policy.</p>
      </div>
    </div>
  )
}
