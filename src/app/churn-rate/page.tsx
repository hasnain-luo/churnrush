
import ChurnRateCalculator from '@/components/churn-rate-calculator';

export default function ChurnRatePage() {
  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <div className="max-w-xl mx-auto">
        <ChurnRateCalculator />
      </div>
    </main>
  );
}
