
import NetRevenueChurnCalculator from '@/components/net-revenue-churn-calculator';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Net Revenue Churn Calculator (NDR)',
  description: 'Calculate your Net Dollar Retention (NDR) to see revenue growth from existing customers. A vital metric for understanding compound growth and offsetting churn.',
};

export default function NetRevenueChurnPage() {
  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <div className="max-w-xl mx-auto space-y-8">
        <NetRevenueChurnCalculator />

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">
              About the Net Revenue Churn (NDR) Calculator
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-card-foreground/90">
            <div>
              <h3 className="font-semibold text-lg mb-2">
                What is Net Dollar Retention (NDR)?
              </h3>
              <p>
                Net Dollar Retention (NDR), also known as Net Revenue Churn, is
                a crucial metric that measures the percentage change in revenue
                from a cohort of customers over a period, typically a year. It
                accounts for all revenue changes, including{' '}
                <strong>
                  <Link
                    href="/mrr-churn"
                    className="text-primary font-semibold hover:underline"
                  >
                    churn
                  </Link>
                </strong>{' '}
                (lost revenue) and expansion (upgrades, cross-sells). An NDR
                over 100% indicates that your business is growing from its
                existing customer base alone, a powerful sign of a healthy,
                scalable SaaS company.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                Going Beyond Standard Churn Metrics
              </h3>
              <p>
                While{' '}
                <strong>
                  <Link
                    href="/churn-rate"
                    className="text-primary font-semibold hover:underline"
                  >
                    customer churn
                  </Link>
                </strong>{' '}
                tells you how many customers you lost, NDR tells you the net
                financial impact. For example, you could lose 10 small customers
                but have one large customer double their spending. Your customer{' '}
                <strong>churn</strong> rate would look bad, but your NDR would be
                healthy, showing your business is actually in a strong
                position. It provides a more sophisticated view of customer
                health and revenue momentum.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">How to Use This Tool</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  <strong>Starting MRR from Cohort ($):</strong> Enter the
                  Monthly Recurring Revenue from a specific group of customers
                  at the start of the period (e.g., all customers from January
                  1st last year).
                </li>
                <li>
                  <strong>Ending MRR from Cohort ($):</strong> Input the current
                  MRR from that exact same group of customers today, accounting
                  for all upgrades, downgrades, and cancellations. Do not
                  include any new customers acquired during the period.
                </li>
              </ol>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                Benefits of Tracking NDR
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Gauge Product Value:</strong> A high NDR proves that
                  customers are finding increasing value in your product over
                  time.
                </li>
                <li>
                  <strong>Measure Upsell Success:</strong> It directly quantifies
                  the success of your expansion revenue strategies.
                </li>
                <li>
                  <strong>Attract Investors:</strong> NDR is a key metric that
                  SaaS investors look for as a sign of a strong, efficient
                  business model.
                </li>
                <li>
                  <strong>Compound Growth:</strong> An NDR over 100% creates
                  compound revenue growth, making your business more resilient
                  to fluctuations in new customer acquisition.
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
