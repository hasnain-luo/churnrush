
import ChurnRiskCalculator from '@/components/churn-risk-calculator';

export default function ChurnRiskPage() {
  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <div className="max-w-xl mx-auto">
        <ChurnRiskCalculator />
      </div>
    </main>
  );
}
