import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';
import { Seo } from './Seo';

const sections = [
  {
    title: 'Introduction',
    content: (
      <>
        <p>
          Johnson Marketing &amp; Consulting Group (&quot;JMCG,&quot; &quot;we,&quot; &quot;us,&quot; or
          &quot;our&quot;) operates{' '}
          <a
            href="https://www.johnsonmarketingandconsulting.com"
            className="text-[#d89527] hover:underline"
          >
            johnsonmarketingandconsulting.com
          </a>
          . This Privacy Policy explains how we collect, use, disclose, and safeguard information when
          you visit our website or interact with our services.
        </p>
        <p>
          By using our website, you agree to the collection and use of information in accordance with
          this policy. If you do not agree, please do not use our website.
        </p>
      </>
    ),
  },
  {
    title: 'Information We Collect',
    content: (
      <>
        <p>We may collect the following types of information:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Contact information you provide:</strong> When you submit our contact form, book a
            consultation, or use our chat widget, you may provide your name, email address, phone
            number, company name, message content, budget range, and other details you choose to share.
          </li>
          <li>
            <strong>Usage and analytics data:</strong> We collect information about how you use our
            website, such as pages visited, time spent on pages, referring URLs, device type, browser
            type, and general location derived from IP address.
          </li>
          <li>
            <strong>Communications data:</strong> If you contact us through our website, chat widget,
            or scheduling tools, we retain the content of those communications.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'How We Use Your Information',
    content: (
      <>
        <p>We use the information we collect to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Respond to inquiries and provide requested information or services</li>
          <li>Schedule and manage consultations</li>
          <li>Improve our website, marketing, and client experience</li>
          <li>Analyze website traffic and measure the effectiveness of our content</li>
          <li>Communicate with you about our services, where permitted by law</li>
          <li>Protect our website and prevent fraud or abuse</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Third-Party Services',
    content: (
      <>
        <p>
          We use trusted third-party providers to operate parts of our website. These providers may
          process your information on our behalf:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Formspree</strong> — processes contact form submissions
          </li>
          <li>
            <strong>Google Tag Manager and Google Analytics</strong> — help us understand website usage
            and performance
          </li>
          <li>
            <strong>LeadConnector (HighLevel)</strong> — powers our live chat widget and consultation
            booking calendar
          </li>
        </ul>
        <p>
          Each third-party provider has its own privacy practices. We encourage you to review their
          policies. We do not sell your personal information to third parties.
        </p>
      </>
    ),
  },
  {
    title: 'Cookies and Tracking Technologies',
    content: (
      <>
        <p>
          Our website uses cookies, pixels, and similar technologies to remember preferences, analyze
          traffic, and improve performance. These may be set by us or by third-party services such as
          Google Analytics.
        </p>
        <p>
          You can control cookies through your browser settings. Disabling cookies may affect certain
          website features. Where required by law, we will obtain your consent before using non-essential
          cookies.
        </p>
      </>
    ),
  },
  {
    title: 'Data Retention',
    content: (
      <p>
        We retain personal information only as long as necessary to fulfill the purposes described in
        this policy, comply with legal obligations, resolve disputes, and enforce our agreements.
        Contact form submissions and consultation records are typically retained while we maintain an
        active business relationship or as needed for legitimate business purposes.
      </p>
    ),
  },
  {
    title: 'Your Privacy Rights',
    content: (
      <>
        <p>
          Depending on where you live, you may have rights regarding your personal information,
          including the right to:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Request access to the personal information we hold about you</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of your personal information, subject to legal exceptions</li>
          <li>Opt out of certain analytics or marketing communications</li>
        </ul>
        <p>
          To exercise these rights, please contact us using the information below. We will respond
          within a reasonable timeframe as required by applicable law.
        </p>
      </>
    ),
  },
  {
    title: "Children's Privacy",
    content: (
      <p>
        Our website is not directed to children under 13, and we do not knowingly collect personal
        information from children. If you believe we have collected information from a child, please
        contact us and we will take steps to delete it.
      </p>
    ),
  },
  {
    title: 'Changes to This Policy',
    content: (
      <p>
        We may update this Privacy Policy from time to time. When we do, we will revise the &quot;Last
        updated&quot; date at the top of this page. We encourage you to review this page periodically
        for any changes.
      </p>
    ),
  },
  {
    title: 'Contact Us',
    content: (
      <p>
        If you have questions about this Privacy Policy or how we handle your information, please{' '}
        <Link to="/contact" className="text-[#d89527] hover:underline">
          contact us through our website
        </Link>
        .
      </p>
    ),
  },
];

export function PrivacyPolicyPage() {
  return (
    <div>
      <Seo
        title="Privacy Policy | Johnson Marketing and Consulting Group"
        description="Learn how Johnson Marketing and Consulting Group collects, uses, and protects your personal information when you visit our website or contact our team."
      />

      <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-orange-50 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#EFA82F] to-[#d89527] rounded-2xl mb-6">
              <Shield className="text-white" size={28} />
            </div>
            <h1 className="text-4xl md:text-5xl text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              How we collect, use, and protect your information when you visit our website.
            </p>
            <p className="text-sm text-gray-500 mt-4">Last updated: July 6, 2026</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <h2 className="text-2xl text-gray-900 mb-4">{section.title}</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">{section.content}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
