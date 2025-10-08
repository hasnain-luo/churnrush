
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <div className="max-w-xl mx-auto">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-3xl">Contact Us</CardTitle>
            <p className="text-muted-foreground pt-2">
              Have a question, feedback, or a partnership inquiry? We&apos;d love to hear from you.
            </p>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center text-center space-y-4 pt-4">
            <p className="text-lg">
              The best way to reach us is by email. Please send your message to:
            </p>
            <a 
              href="mailto:hasnainhaji007@gmail.com" 
              className="text-lg font-semibold text-primary hover:underline"
            >
              hasnainhaji007@gmail.com
            </a>
            <Button asChild className="mt-4">
              <a href="mailto:hasnainhaji007@gmail.com">
                <Mail className="mr-2 h-4 w-4" /> Send Email
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
