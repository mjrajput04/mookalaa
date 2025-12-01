export default function TermsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-500/10 to-amber-600/10 border-b border-amber-500/20 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <p className="text-lg text-muted-foreground">Please read these terms carefully</p>
          <p className="text-sm text-muted-foreground mt-2">Last updated: December 2024</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-4xl mx-auto">
        <div className="space-y-8">

          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-amber-600">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              By accessing and using MOOKALAA, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-amber-600">2. Description of Service</h2>
            <p className="text-muted-foreground">
              MOOKALAA is a platform that connects users with arts and cultural events including Jatra, Cinema, Music, 
              Dance, Festivals, Workshops, and Custom Orders from artists worldwide.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-amber-600">3. User Accounts</h2>
            <p className="text-muted-foreground mb-4">To access certain features, you must create an account. You are responsible for:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                Maintaining the confidentiality of your account credentials
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                All activities that occur under your account
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                Providing accurate and complete information
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                Updating your information as necessary
              </li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-amber-600">4. Booking and Payments</h2>
            <p className="text-muted-foreground mb-4">When you book an event through MOOKALAA:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                You agree to pay all applicable fees
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                Payments are processed securely through third-party providers
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                Booking confirmations are subject to event organizer approval
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                Cancellation policies vary by event and organizer
              </li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-amber-600">5. User Conduct</h2>
            <p className="text-muted-foreground mb-4">You agree not to:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                Use the service for any unlawful purpose
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                Interfere with or disrupt the service
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                Upload harmful or malicious content
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                Violate any applicable laws or regulations
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                Infringe on intellectual property rights
              </li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-amber-600">6. Event Organizers</h2>
            <p className="text-muted-foreground mb-4">Event organizers using MOOKALAA agree to:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                Provide accurate event information
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                Honor confirmed bookings
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                Comply with applicable laws and regulations
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                Maintain appropriate insurance coverage
              </li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-amber-600">7. Intellectual Property</h2>
            <p className="text-muted-foreground">
              The MOOKALAA platform, including its content, features, and functionality, is owned by MOOKALAA and is 
              protected by copyright, trademark, and other intellectual property laws.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-amber-600">8. Disclaimers</h2>
            <p className="text-muted-foreground">
              MOOKALAA provides the platform "as is" without warranties of any kind. We do not guarantee the accuracy, 
              completeness, or reliability of any content or services.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-amber-600">9. Limitation of Liability</h2>
            <p className="text-muted-foreground">
              MOOKALAA shall not be liable for any indirect, incidental, special, consequential, or punitive damages 
              resulting from your use of the service.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-amber-600">10. Termination</h2>
            <p className="text-muted-foreground">
              We may terminate or suspend your account and access to the service at our sole discretion, without prior 
              notice, for conduct that we believe violates these Terms.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-amber-600">11. Changes to Terms</h2>
            <p className="text-muted-foreground">
              We reserve the right to modify these terms at any time. We will notify users of any material changes 
              via email or through the platform.
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/10 border border-amber-500/20 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-amber-600">12. Contact Information</h2>
            <p className="text-muted-foreground mb-4">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="space-y-2 text-muted-foreground">
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                Email: legal@mookalaa.com
              </p>
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                Address: MOOKALAA Legal Team
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}