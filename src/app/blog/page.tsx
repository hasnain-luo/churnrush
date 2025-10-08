
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'The ChurnRush blog, featuring insights, tips, and strategies on how to reduce customer churn and grow your subscription business.',
};

export default function BlogPage() {
  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-3xl">Blog</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-card-foreground/90 text-lg">
            <p>
              Welcome to the ChurnRush blog! Here we'll be sharing insights, tips, and strategies on how to reduce customer churn and grow your business.
            </p>
            <p>
              Check back soon for our first post!
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
