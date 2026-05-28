import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <div className="krince" style={{ minHeight: "100vh", background: "#0a0a0a", color: "#e0e0e0" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "60px 24px" }}>
        <Link
          to="/"
          style={{
            color: "#a78bfa",
            textDecoration: "none",
            fontSize: 14,
            display: "inline-block",
            marginBottom: 32,
          }}
        >
          &larr; Back to Home
        </Link>

        <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 8, color: "#fff" }}>
          Privacy Policy
        </h1>
        <p style={{ color: "#888", marginBottom: 40 }}>
          Last updated: May 28, 2026
        </p>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 12, color: "#fff" }}>
            1. Introduction
          </h2>
          <p style={{ lineHeight: 1.7 }}>
            Welcome to Krince ("we", "our", or "us"). We are committed to protecting your
            personal information and your right to privacy. This Privacy Policy explains how we
            collect, use, disclose, and safeguard your information when you visit our website{" "}
            <strong>krince.in</strong> and use our services.
          </p>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 12, color: "#fff" }}>
            2. Information We Collect
          </h2>
          <p style={{ lineHeight: 1.7, marginBottom: 12 }}>
            We may collect the following types of information:
          </p>
          <ul style={{ lineHeight: 1.9, paddingLeft: 24 }}>
            <li>
              <strong>Personal Information:</strong> Name, email address, phone number, and other
              contact details you provide when reaching out to us.
            </li>
            <li>
              <strong>Usage Data:</strong> Information about how you interact with our website,
              including pages visited, time spent, and referring URLs.
            </li>
            <li>
              <strong>Device Information:</strong> Browser type, operating system, IP address, and
              device identifiers.
            </li>
          </ul>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 12, color: "#fff" }}>
            3. How We Use Your Information
          </h2>
          <ul style={{ lineHeight: 1.9, paddingLeft: 24 }}>
            <li>To provide, operate, and maintain our website and services.</li>
            <li>To communicate with you, including responding to inquiries and sending updates.</li>
            <li>To improve and personalize your experience on our website.</li>
            <li>To analyze usage trends and monitor the effectiveness of our services.</li>
            <li>To comply with legal obligations.</li>
          </ul>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 12, color: "#fff" }}>
            4. Sharing Your Information
          </h2>
          <p style={{ lineHeight: 1.7 }}>
            We do not sell, trade, or rent your personal information to third parties. We may share
            your information with trusted service providers who assist us in operating our website
            and conducting our business, provided they agree to keep your information confidential.
          </p>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 12, color: "#fff" }}>
            5. Data Security
          </h2>
          <p style={{ lineHeight: 1.7 }}>
            We implement appropriate technical and organizational measures to protect your personal
            information against unauthorized access, alteration, disclosure, or destruction. However,
            no method of transmission over the Internet is 100% secure.
          </p>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 12, color: "#fff" }}>
            6. Third-Party Services
          </h2>
          <p style={{ lineHeight: 1.7 }}>
            Our website may contain links to third-party websites or services. We are not
            responsible for the privacy practices of these third parties. We encourage you to review
            their privacy policies.
          </p>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 12, color: "#fff" }}>
            7. Cookies
          </h2>
          <p style={{ lineHeight: 1.7 }}>
            We may use cookies and similar tracking technologies to enhance your browsing experience.
            You can manage your cookie preferences through your browser settings.
          </p>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 12, color: "#fff" }}>
            8. Your Rights
          </h2>
          <p style={{ lineHeight: 1.7 }}>
            You have the right to access, update, or delete your personal information. To exercise
            these rights, please contact us using the information provided below.
          </p>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 12, color: "#fff" }}>
            9. Changes to This Policy
          </h2>
          <p style={{ lineHeight: 1.7 }}>
            We may update this Privacy Policy from time to time. Any changes will be posted on this
            page with an updated "Last updated" date.
          </p>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 12, color: "#fff" }}>
            10. Contact Us
          </h2>
          <p style={{ lineHeight: 1.7 }}>
            If you have any questions about this Privacy Policy, please contact us at:{" "}
            <a href="mailto:contact@krince.in" style={{ color: "#a78bfa" }}>
              contact@krince.in
            </a>
          </p>
        </section>

        <footer style={{ borderTop: "1px solid #222", paddingTop: 24, marginTop: 40, color: "#666", fontSize: 14 }}>
          &copy; {new Date().getFullYear()} Krince. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
