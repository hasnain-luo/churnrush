
import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: {
    default: 'ChurnRush: Free Churn & SaaS Metric Calculators',
    template: '%s | ChurnRush',
  },
  description: 'A complete suite of free calculators to analyze customer churn, retention, MRR, LTV, and other essential SaaS metrics for business growth.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={cn('font-body antialiased flex flex-col min-h-screen bg-background')}>
        <header className="py-6">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="flex-1 md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6 text-white" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="bg-background w-3/4">
                  <nav className="flex flex-col gap-6 pt-10">
                    <Link href="/about" className="text-white/80 hover:text-white text-lg">
                      About
                    </Link>
                    <Link href="/blog" className="text-white/80 hover:text-white text-lg">
                      Blog
                    </Link>
                    <Link href="/contact" className="text-white/80 hover:text-white text-lg">
                      Contact
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
            <div className="flex-1 hidden md:flex"></div>
            <div className="flex-1 text-center">
              <Link href="/" className="inline-block">
                <div className="text-4xl md:text-5xl font-bold font-headline text-white drop-shadow-xl transition-all duration-300 hover:drop-shadow-2xl hover:scale-105">
                  ChurnRush
                </div>
              </Link>
            </div>
            <nav className="flex-1 hidden md:flex justify-end gap-6 items-center">
              <Link href="/about" className="text-white/80 hover:text-white hover:underline transition-colors">
                About
              </Link>
              <Link href="/blog" className="text-white/80 hover:text-white hover:underline transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="text-white/80 hover:text-white hover:underline transition-colors">
                Contact
              </Link>
            </nav>
             <div className="flex-1 md:hidden"></div>
          </div>
        </header>

        {children}

        <footer className="py-6 mt-auto">
          <div className="container mx-auto text-center">
            <p className="text-sm text-white/80 space-x-4">
              <Link href="/terms-of-service" className="hover:underline">Terms of Service</Link>
              <span>|</span>
              <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            </p>
          </div>
        </footer>
        <Toaster />
      </body>
    </html>
  );
}
