import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Calculator } from 'lucide-react';

export const metadata: Metadata = {
  title: 'ChurnRush',
  description: 'Your smart churn analysis toolkit.',
};

const navLinks = [
  { href: '/churn-rate', label: 'Churn Rate' },
  { href: '/clv', label: 'CLV' },
  { href: '/churn-risk', label: 'Churn Risk' },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={cn('font-body antialiased flex flex-col min-h-screen')}>
        <header className="py-6">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
              <h1 className="text-2xl md:text-3xl font-bold font-headline text-white">
                ChurnRush
              </h1>
            </Link>
            <nav className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => (
                <Button key={link.href} variant="ghost" asChild className="text-white/90 hover:bg-white/10 hover:text-white">
                  <Link href={link.href}>{link.label}</Link>
                </Button>
              ))}
            </nav>
            <nav className="md:hidden">
                <Button variant="ghost" size="icon" className="text-white/90 hover:bg-white/10 hover:text-white">
                    <Calculator />
                </Button>
            </nav>
          </div>
        </header>

        {children}

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
        <Toaster />
      </body>
    </html>
  );
}
