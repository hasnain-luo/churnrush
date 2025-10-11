
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'The ChurnRush blog, featuring insights, tips, and strategies on how to reduce customer churn and grow your subscription business.',
};

const blogPosts = [
    {
        title: 'Customer Retention Management: The Ultimate 2025 Playbook for Sustainable Growth',
        description: 'A complete guide to customer retention strategies, metrics, and programs to drive sustainable growth for your business in 2025 and beyond.',
        href: '/blog/customer-retention-management-playbook',
        date: 'October 2024',
    }
]

export default function BlogPage() {
  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center mb-12">
            <h1 className="font-headline text-4xl font-bold">The ChurnRush Blog</h1>
        </div>
        
        <div className="space-y-8">
            {blogPosts.map((post) => (
                 <Card key={post.href}>
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl">
                            <Link href={post.href} className="hover:text-primary transition-colors">
                                {post.title}
                            </Link>
                        </CardTitle>
                        <p className="text-sm text-muted-foreground pt-1">{post.date}</p>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>{post.description}</CardDescription>
                         <Button asChild variant="link" className="px-0 mt-4">
                            <Link href={post.href}>
                                Read More <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>
    </main>
  );
}
