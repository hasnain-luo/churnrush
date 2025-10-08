
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calculator, UserCheck, Wallet, TrendingDown, Ratio, Clock, Users, UserRoundCheck, Combine } from 'lucide-react';
import Link from 'next/link';

const tools = [
  {
    title: 'Churn Rate Calculator',
    description: 'Calculate your company\'s customer churn rate over a period.',
    href: '/churn-rate',
    icon: <Calculator className="size-8 text-primary" />,
  },
  {
    title: 'CLV Calculator',
    description: 'Calculate the Customer Lifetime Value (CLV).',
    href: '/clv',
    icon: <Wallet className="size-8 text-primary" />,
  },
  {
    title: 'Churn Risk Calculator',
    description: 'Assess an individual customer\'s churn risk score.',
    href: '/churn-risk',
    icon: <UserCheck className="size-8 text-primary" />,
  },
  {
    title: 'MRR Churn Rate',
    description: 'Calculate your Gross and Net Monthly Recurring Revenue churn rates.',
    href: '/mrr-churn',
    icon: <TrendingDown className="size-8 text-primary" />,
  },
  {
    title: 'LTV:CAC Ratio',
    description: 'Calculate the ratio of Customer Lifetime Value to Customer Acquisition Cost.',
    href: '/ltv-cac-ratio',
    icon: <Ratio className="size-8 text-primary" />,
  },
  {
    title: 'Payback Period',
    description: 'Calculate how many months it takes to recover the cost of acquiring a customer.',
    href: '/payback-period',
    icon: <Clock className="size-8 text-primary" />,
  },
  {
    title: 'DAU/MAU Ratio',
    description: 'Calculate the ratio of Daily Active Users to Monthly Active Users to measure product stickiness.',
    href: '/dau-mau-ratio',
    icon: <Users className="size-8 text-primary" />,
  },
  {
    title: 'Customer Retention Rate',
    description: 'Measure the percentage of customers you have successfully kept over time.',
    href: '/customer-retention',
    icon: <UserRoundCheck className="size-8 text-primary" />,
  },
  {
    title: 'Net Revenue Churn',
    description: 'Calculate your Net Dollar Retention (NDR) to measure revenue growth from existing customers.',
    href: '/net-revenue-churn',
    icon: <Combine className="size-8 text-primary" />,
  }
];

export default function Home() {
  return (
    <>
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">
          {tools.map((tool) => (
            <Card key={tool.href} className="flex flex-col h-full">
              <CardHeader className="flex flex-row items-center gap-4">
                {tool.icon}
                <CardTitle className="font-headline text-xl">{tool.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <p className="text-muted-foreground flex-grow">{tool.description}</p>
                <Button asChild className="mt-4 w-full">
                  <Link href={tool.href} target="_blank" rel="noopener noreferrer">
                    Go to Calculator <ArrowRight />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </>
  );
}
