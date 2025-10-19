
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'The ChurnRush blog, featuring insights, tips, and strategies on how to reduce customer churn and grow your subscription business.',
};

const blogImage1 = PlaceHolderImages.find(p => p.id === 'blog-post-1');
const blogImage2 = PlaceHolderImages.find(p => p.id === 'blog-post-churn-meaning-1');
const blogImage3 = PlaceHolderImages.find(p => p.id === 'blog-post-saas-churn-1');


const blogPosts = [
    {
        title: 'Customer Retention Management: 2025 Growth Playbook',
        description: 'A complete guide to customer retention strategies, metrics, and programs to drive sustainable growth for your business in 2025 and beyond.',
        href: '/blog/customer-retention-management',
        author: 'Olivia Chen',
        date: 'October 12, 2025',
        readingTime: '12 min read',
        imageUrl: blogImage1?.imageUrl || 'https://picsum.photos/seed/blog1/600/400',
        imageHint: blogImage1?.imageHint || 'growth abstract',
    },
    {
        title: 'Churn Meaning in Business: Calculate Customer Churn Like a Pro',
        description: 'Master churn meaning in business & calculate customer churn accurately with our 2025 guide. Learn churn rate formulas, SaaS calculations & reduction strategies.',
        href: '/blog/churn-meaning-in-business',
        author: 'Olivia Chen',
        date: 'October 17, 2025',
        readingTime: '10 min read',
        imageUrl: blogImage2?.imageUrl || 'https://picsum.photos/seed/blog2/600/400',
        imageHint: blogImage2?.imageHint || 'business analysis',
    },
    {
        title: 'SaaS Churn Reduction 2025: Strategies That Actually Work',
        description: 'From churn identification to retention: Your complete SaaS playbook for reducing subscriber churn and boosting lifetime value.',
        href: '/blog/saas-churn-reduction-strategies',
        author: 'Olivia Chen',
        date: 'October 19, 2025',
        readingTime: '11 min read',
        imageUrl: blogImage3?.imageUrl || 'https://picsum.photos/seed/blog3/600/400',
        imageHint: blogImage3?.imageHint || 'data analysis',
    }
];

export default function BlogPage() {
  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="text-center mb-12">
            <h1 className="font-headline text-4xl font-bold">The ChurnRush Blog</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
                 <Card key={post.href} className="flex flex-col">
                    <CardHeader className="p-0">
                       <Link href={post.href} aria-label={post.title}>
                        <Image 
                            src={post.imageUrl} 
                            alt={post.description}
                            width={600}
                            height={400}
                            className="rounded-t-xl object-cover w-full aspect-[3/2]"
                            data-ai-hint={post.imageHint}
                        />
                       </Link>
                    </CardHeader>
                    <div className="p-6 flex flex-col flex-grow">
                        <CardTitle className="font-headline text-xl lg:text-2xl">
                            <Link href={post.href} className="hover:text-primary transition-colors">
                                {post.title}
                            </Link>
                        </CardTitle>
                        <div className="text-sm text-muted-foreground pt-2 flex items-center gap-2 flex-wrap">
                            <span>{post.author}</span>
                            <span className="hidden sm:inline">&middot;</span>
                            <span>{post.date}</span>
                            <span className="hidden sm:inline">&middot;</span>
                            <span>{post.readingTime}</span>
                        </div>
                        <CardContent className="p-0 pt-4 flex-grow">
                            <CardDescription>{post.description}</CardDescription>
                        </CardContent>
                        <div className="mt-4">
                             <Button asChild variant="link" className="px-0">
                                <Link href={post.href}>
                                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </Card>
            ))}
        </div>
      </div>
    </main>
  );
}
