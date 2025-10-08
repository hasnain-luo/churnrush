import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PrivacyPolicyPage() {
  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-3xl">Privacy Policy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-card-foreground/90">
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            
            <p>
              ChurnRush ("we," "us," or "our") operates the ChurnRush website (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
            </p>

            <div className="space-y-2">
              <h2 className="font-semibold text-xl">1. Information Collection and Use</h2>
              <p>
                We do not collect any personally identifiable information from our users. All calculations performed on this website are done on your local device. The data you enter into the calculators is not stored, transmitted, or processed on our servers.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="font-semibold text-xl">2. Cookies and Usage Data</h2>
              <p>
                We may use third-party services like Google AdSense and Google Analytics that use cookies to serve ads based on a user's prior visits to your website or other websites, and to collect information about your use of the website. This data is aggregated and anonymized. Google's use of advertising cookies enables it and its partners to serve ads to your users based on their visit to your sites and/or other sites on the Internet.
              </p>
               <p>
                Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary underline">Ads Settings</a>.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="font-semibold text-xl">3. Links to Other Sites</h2>
              <p>
                Our Service may contain links to other sites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="font-semibold text-xl">4. Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="font-semibold text-xl">5. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us through our contact page.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
