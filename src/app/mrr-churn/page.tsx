
import MrrChurnCalculator from '@/components/mrr-churn-calculator';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MRR Churn Rate Calculator (Gross & Net)',
  description: 'Calculate your Gross and Net Monthly Recurring Revenue (MRR) churn rates. Quantify the financial impact of customer churn and expansion revenue.',
};

export default function MrrChurnPage() {
  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <div className="max-w-xl mx-auto space-y-8">
        <MrrChurnCalculator />
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">
              About the MRR Churn Rate Calculator
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-card-foreground/90">
            <div>
              <h3 className="font-semibold text-lg mb-2">
                What is MRR Churn Rate?
              </h3>
              <p>
                Monthly Recurring Revenue (MRR) Churn is a vital metric for
                SaaS and subscription businesses, measuring the revenue lost
                due to customer cancellations and downgrades. Unlike customer
                churn, which only tracks the number of lost customers, MRR{' '}
                <strong>churn</strong> quantifies the financial impact. This
                calculator provides both Gross and Net MRR Churn rates to give
                you a complete picture of your revenue momentum.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">How to Use This Tool</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  <strong>MRR at Start of Month ($):</strong> Enter your total
                  Monthly Recurring Revenue at the beginning of the month.
                </li>
                <li>
                  <strong>Expansion MRR from Upgrades ($):</strong> Input the
                  additional MRR gained from existing customers who upgraded
                  their plans.
                </li>
                <li>
                  <strong>Churned MRR ($):</strong> Enter the total MRR lost
                  from customers who canceled or downgraded their plans during
                  the month.
                </li>
              </ol>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">
                Understanding the Results
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Gross MRR Churn Rate:</strong> This shows the total
                  percentage of revenue lost before accounting for any
                  expansion. It's a raw measure of the negative impact of{' '}
                  <strong>churn</strong>.
                </li>
                <li>
                  <strong>Net MRR Churn Rate:</strong> This shows the revenue
                  lost after factoring in expansion MRR from existing
                  customers. A negative Net MRR <strong>Churn</strong> Rate (often
                  called Net Negative Churn) is the gold standard for SaaS, as
                  it means your revenue is growing even without acquiring new
                  customers.
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
