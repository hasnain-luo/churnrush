import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TermsOfServicePage() {
  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-3xl">Terms of Service</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-card-foreground/90">
             <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

            <div className="space-y-2">
              <h2 className="font-semibold text-xl">1. Acceptance of Terms</h2>
              <p>
                By accessing and using ChurnRush (the "Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this Service.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="font-semibold text-xl">2. Description of Service</h2>
              <p>
                ChurnRush provides a collection of online calculators related to business metrics, particularly customer churn. These tools are provided for informational and educational purposes only. The results are not financial advice.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="font-semibold text-xl">3. Disclaimer of Warranties</h2>
              <p>
                The Service is provided on an "as is" and "as available" basis. ChurnRush makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="font-semibold text-xl">4. Limitation of Liability</h2>
              <p>
                In no event shall ChurnRush or its owners be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on ChurnRush's website, even if ChurnRush or an authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="font-semibold text-xl">5. Governing Law</h2>
              <p>
                Any claim relating to ChurnRush's website shall be governed by the laws of the website owner's jurisdiction without regard to its conflict of law provisions.
              </p>
            </div>
             <div className="space-y-2">
              <h2 className="font-semibold text-xl">6. Changes to Terms</h2>
              <p>
                ChurnRush may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
