
import PaybackPeriodCalculator from '@/components/payback-period-calculator';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'CAC Payback Period Calculator',
  description: 'Calculate your Customer Acquisition Cost (CAC) payback period. Find out how many months it takes to recover acquisition costs and see how churn impacts profitability.',
};

export default function PaybackPeriodPage() {
  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <div className="max-w-xl mx-auto space-y-8">
        <PaybackPeriodCalculator />
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">
              About the Payback Period Calculator
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-card-foreground/90">
            <div>
              <h3 className="font-semibold text-lg mb-2">
                What is the CAC Payback Period?
              </h3>
              <p>
                The Customer Acquisition Cost (CAC) Payback Period is the number
                of months it takes for your company to earn back the money it
                spent to acquire a new customer. A shorter payback period means
                you can reinvest your money faster to fuel growth, and it is a
                key metric for understanding the impact of customer{' '}
                <Link href="/churn-rate" className="text-primary font-semibold hover:underline">
                  churn
                </Link>{' '}
                on your cash flow.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">
                How Churn Affects Payback Period
              </h3>
              <p>
                Customer <strong>churn</strong> is a critical factor here. If a
                customer churns before their payback period is over, you have
                lost money on that acquisition. A high{' '}
                <strong>
                  <Link
                    href="/churn-rate"
                    className="text-primary font-semibold hover:underline"
                  >
                    churn rate
                  </Link>
                </strong>{' '}
                means fewer customers stick around long enough to become
                profitable. Therefore, reducing <strong>churn</strong> is
                essential not just for revenue, but for ensuring your
                acquisition strategy is financially viable.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">How to Use This Tool</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  <strong>Customer Acquisition Cost (CAC) ($):</strong> Enter
                  your total cost to acquire one new customer.
                </li>
                <li>
                  <strong>Average Revenue Per Month ($):</strong> Input the
                  average amount a customer pays you each month.
                </li>
                <li>
                  <strong>Gross Margin (%):</strong> Enter your gross margin
                  percentage to account for the cost of servicing the customer.
                </li>
              </ol>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                Benefits of Tracking Payback Period
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Manage Cash Flow:</strong> Understand how long your
                  capital is tied up in new acquisitions.
                </li>
                <li>
                  <strong>Assess Acquisition Channels:</strong> Compare payback
                  periods for different marketing channels to find the most
                  efficient ones.
                </li>
                <li>
                  <strong>Gauge Customer Profitability:</strong> Ensure your
                  pricing and{' '}
                  <strong>
                    <Link
                      href="/ltv-cac-ratio"
                      className="text-primary font-semibold hover:underline"
                    >
                      LTV:CAC ratio
                    </Link>
                  </strong>{' '}
                  allow for profitable customer relationships.
                </li>
                <li>
                  <strong>Highlight the Cost of Churn:</strong> A long payback
                  period makes early-stage <strong>churn</strong> even more
                  damaging to your bottom line.
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
