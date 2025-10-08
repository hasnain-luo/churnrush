
import DauMauRatioCalculator from '@/components/dau-mau-ratio-calculator';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DAU/MAU Ratio Calculator for Product Stickiness',
  description: 'Calculate your DAU/MAU ratio to measure product stickiness, a key predictor of customer churn. See how many monthly users engage on a daily basis.',
};

export default function DauMauRatioPage() {
  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <div className="max-w-xl mx-auto space-y-8">
        <DauMauRatioCalculator />
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">
              About the DAU/MAU Ratio Calculator
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-card-foreground/90">
            <div>
              <h3 className="font-semibold text-lg mb-2">
                What is the DAU/MAU Ratio?
              </h3>
              <p>
                The Daily Active Users to Monthly Active Users (DAU/MAU) ratio
                is a key metric for measuring the &quot;stickiness&quot; of your
                product, which is a leading indicator of customer{' '}
                <strong>churn</strong>. It shows what percentage of your monthly users engage
                with your product on a daily basis. A higher ratio indicates
                that your product is valuable and has become a regular part of
                your users&apos; routine.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                How Stickiness Relates to Churn
              </h3>
              <p>
                Product stickiness is a powerful antidote to customer{' '}
                <strong>churn</strong>. When users are highly engaged and find
                daily value in your product, they are far less likely to{' '}
                <strong>churn</strong>. A low or declining DAU/MAU ratio can be
                an early warning sign that users are losing interest, which
                often precedes an increase in your <strong>churn</strong> rate.
                Tracking this ratio helps you gauge user engagement long
                before they consider canceling.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">How to Use This Tool</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  <strong>Daily Active Users (DAU):</strong> Enter the number
                  of unique users who logged in or performed a key action on a
                  specific day.
                </li>
                <li>
                  <strong>Monthly Active Users (MAU):</strong> Input the number
                  of unique users over the last 30 days.
                </li>
              </ol>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                Benefits of Tracking DAU/MAU
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Measure User Engagement:</strong> Get a clear,
                  quantifiable measure of how compelling your product is.
                </li>
                <li>
                  <strong>Predict Future Churn:</strong> Use it as a leading
                  indicator to identify potential issues before they impact
                  revenue.
                </li>
                <li>
                  <strong>Validate Product Changes:</strong> See if new features
                  or updates increase daily usage and stickiness.
                </li>
                <li>
                  <strong>Benchmark Performance:</strong> Compare your ratio to
                  industry standards (e.g., 20% is often considered good, while
                  50%+ is world-class for consumer apps).
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
