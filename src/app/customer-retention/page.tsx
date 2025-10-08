
import CustomerRetentionCalculator from '@/components/customer-retention-calculator';

export default function CustomerRetentionPage() {
  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <div className="max-w-xl mx-auto">
        <CustomerRetentionCalculator />
      </div>
    </main>
  );
}
