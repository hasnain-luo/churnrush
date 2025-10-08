import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'ChurnRush',
  description: 'Your smart churn analysis toolkit.',
};

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
            <div className="flex-1"></div>
            <div className="flex-1 text-center">
              <Link href="/" className="inline-block">
                <h1 className="text-4xl md:text-5xl font-bold font-headline text-white drop-shadow-xl transition-all duration-300 hover:drop-shadow-2xl hover:scale-105">
                  ChurnRush
                </h1>
              </Link>
            </div>
            <nav className="flex-1 flex justify-end gap-6 items-center">
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
