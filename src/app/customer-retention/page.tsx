
import CustomerRetentionCalculator from '@/components/customer-retention-calculator';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customer Retention Rate Calculator',
  description: 'Calculate your customer retention rate, the inverse of churn. Measure the percentage of customers you successfully keep over a specific period.',
};

export default function CustomerRetentionPage() {
  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <div className="max-w-xl mx-auto space-y-8">
        <CustomerRetentionCalculator />

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">
              About the Customer Retention Rate Calculator
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-card-foreground/90">
            <div>
              <h3 className="font-semibold text-lg mb-2">
                What is Customer Retention Rate?
              </h3>
              <p>
                The Customer Retention Rate (CRR) measures the percentage of
                existing customers who remain customers over a specific
                period. It is the direct inverse of the customer{' '}
                <strong>churn</strong> rate. While <strong>churn</strong> focuses on
                how many customers you lose, retention focuses on how many you
                keep. Tracking retention is essential for understanding
                customer loyalty and the long-term viability of a business.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">How to Use This Tool</h3>
              <p>
                To calculate your retention rate, you need to define a time
                period (e.g., a month or a quarter) and provide three key
                numbers:
              </p>
              <ol className="list-decimal list-inside space-y-2 mt-2">
                <li>
                  <strong>Customers at Start of Period:</strong> The total
                  number of customers you had at the beginning of the period.
                </li>
                <li>
                  <strong>Customers at End of Period:</strong> The total number
                  of customers at the end of the period.
                </li>
                <li>
                  <strong>New Customers Acquired:</strong> The number of new
                  customers gained during that same period.
                </li>
              </ol>
              <p className="mt-2 text-sm text-muted-foreground">
                The tool uses the formula:{' '}
                <code className="bg-muted px-1 py-0.5 rounded">
                  ((End - New) / Start) * 100
                </code>
                . This formula isolates the customers who were with you from
                the start and remained at the end, which is the definition of
                retention.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                Why Focus on Retention over Churn?
              </h3>
              <p>
                While mathematically similar, framing your metrics around
                retention instead of <strong>churn</strong> can have a positive
                psychological impact on your team, encouraging a focus on
                delighting and keeping customers rather than just plugging a
                leaky bucket. Benefits include:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>
                  <strong>Increased Profitability:</strong> Retaining customers
                  is significantly cheaper than acquiring new ones.
                </li>
                <li>
                  <strong>Higher Lifetime Value:</strong> Loyal customers tend
                  to spend more over time and are more likely to upgrade.
                </li>
                <li>
                  <strong>Brand Advocacy:</strong> Happy, long-term customers
                  are more likely to become brand advocates and refer others.
                </li>
                <li>
                  <strong>Sustainable Growth:</strong> A high retention rate is
                  the foundation upon which sustainable growth is built.
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
