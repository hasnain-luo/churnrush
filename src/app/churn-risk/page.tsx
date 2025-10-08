
import ChurnRiskCalculator from '@/components/churn-risk-calculator';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customer Churn Risk Calculator',
  description: 'Assess an individual customer’s churn risk score based on key metrics like tenure, usage, and satisfaction. Proactively identify at-risk customers.',
};

export default function ChurnRiskPage() {
  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <div className="max-w-xl mx-auto space-y-8">
        <ChurnRiskCalculator />

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">
              About the Churn Risk Calculator
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-card-foreground/90">
            <div>
              <h3 className="font-semibold text-lg mb-2">
                What is Churn Risk Scoring?
              </h3>
              <p>
                Churn risk scoring is a proactive approach to identify which
                customers are most likely to <strong>churn</strong>, or stop using
                your service. Instead of waiting for customers to leave, this
                model uses key behavioral and demographic data to assign a risk
                score. This allows you to intervene with targeted retention
                strategies before it&apos;s too late. It&apos;s a fundamental tool for
                any business serious about reducing its customer{' '}
                <strong>churn</strong> rate.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">How to Use This Tool</h3>
              <p>
                This calculator provides a simplified model for assessing{' '}
                <strong>churn</strong> risk. Input the following data points for an
                individual customer:
              </p>
              <ol className="list-decimal list-inside space-y-2 mt-2">
                <li>
                  <strong>Customer Tenure (Months):</strong> How long has the
                  customer been with you? Newer customers often have a higher{' '}
                  <strong>churn</strong> risk.
                </li>
                <li>
                  <strong>Usage Frequency:</strong> How often do they engage with
                  your product? A drop in usage is a classic leading indicator
                  of <strong>churn</strong>.
                </li>
                <li>
                  <strong>Satisfaction Score (1-5):</strong> What was their
                  rating in the last satisfaction survey? Low scores are a
                  direct signal of dissatisfaction that can lead to{' '}
                  <strong>churn</strong>.
                </li>
                <li>
                  <strong>Support Tickets:</strong> How many support tickets have
                  they filed recently? A high number can indicate either
                  frustration with the product or high engagement.
                </li>
              </ol>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                Benefits of Predicting Customer Churn
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Proactive Intervention:</strong> Engage at-risk
                  customers with special offers, support, or training before
                  they decide to <strong>churn</strong>.
                </li>
                <li>
                  <strong>Efficient Resource Allocation:</strong> Focus your
                  retention budget and team efforts on the customers who are
                  most likely to leave.
                </li>
                <li>
                  <strong>Improve Customer Experience:</strong> Understanding the
                  drivers of <strong>churn</strong> helps you identify and fix
                  common pain points in your product or service.
                </li>
                <li>
                  <strong>Reduce Overall Churn Rate:</strong> By saving
                  individual customers, you directly improve your overall
                  customer <strong>churn</strong> metric and increase revenue.
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
