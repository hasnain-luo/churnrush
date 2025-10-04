
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calculator, UserCheck, Wallet } from 'lucide-react';
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
                  <Link href={tool.href}>
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
