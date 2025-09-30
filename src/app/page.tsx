import AiDefinition from '@/components/ai-definition';
import ChurnRateCalculator from '@/components/churn-rate-calculator';
import ChurnRiskCalculator from '@/components/churn-risk-calculator';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="py-10 md:py-16">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline text-foreground">
            ChurnRush
          </h1>
          <p className="mt-2 text-base md:text-lg text-muted-foreground">
            Your smart churn analysis toolkit.
          </p>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 items-start">
          <ChurnRateCalculator />
          <ChurnRiskCalculator />
          <AiDefinition className="lg:col-span-2 xl:col-span-1" />
        </div>
      </main>

      <footer className="py-6 mt-16">
        <div className="container mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} ChurnRush. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
