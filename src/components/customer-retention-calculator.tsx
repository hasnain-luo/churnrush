
'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import React, { useEffect, useActionState } from 'react';
import { calculateRetentionAction, type RetentionState } from '@/app/actions';
import { LoadingButton } from './loading-button';

const initialState: RetentionState = {};

export default function CustomerRetentionCalculator() {
  const [state, formAction] = useActionState(calculateRetentionAction, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: state.error,
      });
    }
  }, [state, toast]);

  return (
    <Card>
      <form action={formAction}>
        <CardHeader>
          <CardTitle className="font-headline text-xl">Customer Retention Rate Calculator</CardTitle>
          <CardDescription>
            Measure the percentage of customers you have successfully kept over time.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="start">Customers at Start of Period</Label>
            <Input id="start" name="start" placeholder="e.g., 1000" required type="number" min="0" defaultValue={state.formData?.start} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="end">Customers at End of Period</Label>
            <Input id="end" name="end" placeholder="e.g., 950" required type="number" min="0" defaultValue={state.formData?.end} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="new">New Customers Acquired</Label>
            <Input id="new" name="new" placeholder="e.g., 100" required type="number" min="0" defaultValue={state.formData?.new} />
          </div>
        </CardContent>
        <CardFooter className="flex-col items-stretch space-y-4">
          <LoadingButton
            type="submit"
            loadingText="Calculating..."
          >
            Calculate Retention Rate
          </LoadingButton>

          {state.rate && (
            <div className="text-center pt-4 w-full">
              <Separator />
              <p className="text-sm text-muted-foreground mt-4">
                Customer Retention Rate
              </p>
              <p className="text-5xl font-bold font-headline text-primary">
                {state.rate}%
              </p>
            </div>
          )}
        </CardFooter>
      </form>
    </Card>
  );
}
