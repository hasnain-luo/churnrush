
import ClvCalculator from '@/components/clv-calculator';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function ClvPage() {
  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <div className="max-w-xl mx-auto space-y-8">
        <ClvCalculator />

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">
              About the CLV Calculator
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-card-foreground/90">
            <div>
              <h3 className="font-semibold text-lg mb-2">
                What is Customer Lifetime Value (CLV)?
              </h3>
              <p>
                Customer Lifetime Value (CLV or LTV) is a crucial metric that
                predicts the total net profit a business can expect from a
                single customer over the entire duration of their relationship.
                It&apos;s a forward-looking metric that directly contrasts with metrics
                that measure past performance. Understanding your CLV is
                fundamental to building a sustainable business model, as it
                highlights the long-term value of retaining customers versus the
                one-time cost of acquiring them.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                The Link Between CLV and Churn
              </h3>
              <p>
                CLV and customer churn are inversely related. When your{' '}
                <strong>churn</strong> rate is high, your customer lifetime is short,
                which drastically reduces your CLV. Conversely, by focusing on
                strategies that reduce <strong>churn</strong>, you increase the
                average customer lifespan, thereby maximizing their lifetime
                value. This calculator demonstrates that relationship by
                incorporating the monthly <strong>churn</strong> rate directly into the
                CLV formula.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">How to Use This Tool</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  <strong>Average Revenue Per Month ($):</strong> Enter the
                  average amount of revenue you earn from a customer each
                  month.
                </li>
                <li>
                  <strong>Gross Margin (%):</strong> Input your gross margin
                  percentage. This is your revenue minus the cost of goods sold
                  (COGS). For example, if your margin is 80%, enter 80.
                </li>
                <li>
                  <strong>Monthly Churn Rate (%):</strong> Enter your customer{' '}
                  <strong>churn</strong> rate for the month. If your{' '}
                  <strong>churn</strong> rate is 5%, enter 5.
                </li>
              </ol>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                Benefits of Tracking CLV
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Smarter Spending:</strong> Knowing your CLV helps you
                  define a reasonable Customer Acquisition Cost (CAC).
                </li>
                <li>
                  <strong>Identify Best Customers:</strong> Segment customers by
                  CLV to identify your most profitable user personas.
                </li>
                <li>
                  <strong>Measure Impact of Retention:</strong> Quantify the
                  financial benefit of your efforts to reduce customer{' '}
                  <strong>churn</strong>.
                </li>
                <li>
                  <strong>Improve Forecasting:</strong> Use CLV for more accurate
                  long-term revenue projections.
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
