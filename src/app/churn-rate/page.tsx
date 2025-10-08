
import ChurnRateCalculator from '@/components/churn-rate-calculator';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function ChurnRatePage() {
  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <div className="max-w-xl mx-auto space-y-8">
        <ChurnRateCalculator />

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">
              About the Churn Rate Calculator
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-card-foreground/90">
            <div>
              <h3 className="font-semibold text-lg mb-2">
                What is Customer Churn Rate?
              </h3>
              <p>
                Customer Churn Rate is a critical metric that measures the
                percentage of customers who stop doing business with a company
                over a specific period. It&apos;s the inverse of your retention
                rate and is one of the most important indicators of customer
                satisfaction and business health. A high churn rate can
                negatively impact your revenue and growth.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">How to Use This Tool</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  <strong>Customers at Start of Period:</strong> Enter the total
                  number of customers you had at the beginning of the time frame
                  you want to measure (e.g., the start of the month or quarter).
                </li>
                <li>
                  <strong>New Customers Acquired:</strong> Input the number of
                  new customers you gained during that same period.
                </li>
                <li>
                  <strong>Customers at End of Period:</strong> Enter the total
                  number of customers you had at the very end of the period.
                </li>
              </ol>
              <p className="mt-2 text-sm text-muted-foreground">
                Click the &quot;Calculate Churn&quot; button to see your result. The
                tool uses the standard formula:{' '}
                <code className="bg-muted px-1 py-0.5 rounded">
                  ((Start + New - End) / Start) * 100
                </code>
                .
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                Benefits of Tracking Churn Rate
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Gauge Customer Loyalty:</strong> Understand how well
                  you are retaining your customer base.
                </li>
                <li>
                  <strong>Identify Problems:</strong> A rising churn rate can be an
                  early warning sign of issues with your product, pricing, or
                  customer service.
                </li>
                <li>
                  <strong>Improve Profitability:</strong> It&apos;s almost always
                  cheaper to retain an existing customer than to acquire a new
                  one. Lowering churn directly boosts your bottom line.
                </li>
                <li>
                  <strong>Forecast More Accurately:</strong> Knowing your churn
                  rate helps you make more reliable projections for future
                  revenue and growth.
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
