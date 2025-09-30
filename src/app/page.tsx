import ChurnRateCalculator from '@/components/churn-rate-calculator';
import ChurnRiskCalculator from '@/components/churn-risk-calculator';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="py-10 md:py-16">
        <div className="container mx-auto text-center px-4 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline text-white">
            ChurnRush
          </h1>
          <p className="mt-2 text-base md:text-lg text-white/90">
            Your smart churn analysis toolkit.
          </p>
          <Button asChild className="mt-6 bg-white text-foreground hover:bg-white/90">
            <Link href="#">
              How It Works <ArrowRight />
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
          <ChurnRateCalculator />
          <ChurnRiskCalculator />
        </div>
      </main>

      <footer className="py-6 mt-auto">
        <div className="container mx-auto text-center">
          <p className="text-sm text-white/80 space-x-4">
            <Link href="#" className="hover:underline">About</Link>
            <span>|</span>
            <Link href="#" className="hover:underline">Blog</Link>
            <span>|</span>
            <Link href="#" className="hover:underline">Terms of Service</Link>
            <span>|</span>
            <Link href="#" className="hover:underline">Privacy Policy</Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
