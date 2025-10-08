
import LtvCacRatioCalculator from '@/components/ltv-cac-ratio-calculator';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function LtvCacRatioPage() {
  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <div className="max-w-xl mx-auto space-y-8">
        <LtvCacRatioCalculator />
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">
              About the LTV:CAC Ratio Calculator
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-card-foreground/90">
            <div>
              <h3 className="font-semibold text-lg mb-2">
                What is the LTV:CAC Ratio?
              </h3>
              <p>
                The Lifetime Value to Customer Acquisition Cost (LTV:CAC) ratio
                is a critical SaaS metric that compares the value of a
                customer over their lifetime to the cost of acquiring them. It
                answers a fundamental question: Are you spending your money
                wisely to acquire customers who will not <strong>churn</strong>? A healthy ratio is a strong
                indicator of a company&apos;s profitability, scalability, and the
                effectiveness of its marketing and sales engine.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                Why is This Ratio Important for Churn?
              </h3>
              <p>
                Your <strong>churn</strong> rate directly impacts your LTV. If{' '}
                <strong>churn</strong> is high, LTV plummets, and your LTV:CAC
                ratio will suffer. It might mean you are spending too much to
                acquire customers who do not stick around long enough to become
                profitable. Monitoring this ratio helps justify investments in
                retention, as even a small decrease in <strong>churn</strong> can
                significantly improve LTV and the overall health of the ratio.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">How to Use This Tool</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  <strong>Customer Lifetime Value (LTV) ($):</strong> Enter the
                  total predicted revenue from a single customer. You can use
                  our CLV calculator to find this value.
                </li>
                <li>
                  <strong>Customer Acquisition Cost (CAC) ($):</strong> Input
                  your total cost to acquire one new customer (sales and
                  marketing spend / number of new customers).
                </li>
              </ol>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                Interpreting the Result
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Less than 1:1:</strong> You are losing money with
                  every new customer.
                </li>
                <li>
                  <strong>1:1:</strong> You are breaking even on each customer.
                </li>
                <li>
                  <strong>3:1:</strong> Generally considered a healthy and
                  sustainable ratio for most SaaS businesses.
                </li>
                <li>
                  <strong>5:1 or higher:</strong> You have a very strong business
                  model and could likely afford to invest more in acquisition
                  to grow faster.
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
