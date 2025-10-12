
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sample Blog Post',
  description: 'This is a sample blog post to be used as a template for future articles.',
};

export default function SamplePostPage() {
  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <article className="max-w-3xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-3xl">Sample Blog Post</CardTitle>
            <p className="text-muted-foreground pt-2">
              Use this file as a template for your future blog posts.
            </p>
          </CardHeader>
          <CardContent className="space-y-6 text-card-foreground/90">
            <h2 className="font-headline text-2xl font-semibold border-b pb-2">How to Add a New Post</h2>
            <ol className="list-decimal list-inside space-y-4">
                <li>
                    <strong>Duplicate the Directory:</strong> In the file explorer, right-click on the <code>/src/app/blog/sample-post</code> directory and select "Duplicate". Rename the new directory to match your new post's URL (e.g., <code>/my-new-article</code>).
                </li>
                <li>
                    <strong>Update Post Content:</strong> Open the <code>page.tsx</code> file inside your new directory. You can now replace the title, description, and content with your own.
                </li>
                <li>
                    <strong>Update the Blog List:</strong> Open <code>/src/app/blog/page.tsx</code>. Find the <code>blogPosts</code> array and add a new object for your article. Make sure the <code>href</code> matches the directory name you created.
                </li>
                 <li>
                    <strong>Add a Preview Image:</strong> Open <code>/src/lib/placeholder-images.json</code>. Add a new image object with a unique <code>id</code>. Then, update the <code>blogPosts</code> array in <code>/src/app/blog/page.tsx</code> to use this new image <code>id</code>.
                </li>
            </ol>
          </CardContent>
        </Card>
      </article>
    </main>
  );
}
