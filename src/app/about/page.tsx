
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-3xl">About ChurnRush</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-card-foreground/90 text-lg">
            <p>
              Welcome to ChurnRush, your dedicated partner in the fight against customer churn. Our mission is simple: to empower SaaS businesses, subscription services, and any company with a recurring revenue model with the tools they need to understand, analyze, and ultimately reduce customer churn.
            </p>
            <p>
              We believe that understanding your churn is the first step toward building a more sustainable and profitable business. Customer retention is the bedrock of growth, and our suite of calculators is designed to give you clear, actionable insights into the key metrics that matter most.
            </p>
            <p>
              Whether you're a startup founder trying to find product-market fit or a seasoned manager aiming to optimize your retention strategies, ChurnRush provides the essential analytics to help you make data-driven decisions.
            </p>
            <p>
              This toolkit was built with a passion for helping businesses succeed by focusing on their most valuable asset: their existing customers. Thank you for using ChurnRush.
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
