
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
import { calculateClvAction, type ClvState } from '@/app/actions';
import { LoadingButton } from './loading-button';

const initialState: ClvState = {};

export default function ClvCalculator() {
  const [state, formAction] = useActionState(calculateClvAction, initialState);
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
          <CardTitle className="font-headline text-xl">CLV Calculator</CardTitle>
          <CardDescription>
            Calculate the Customer Lifetime Value (CLV).
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="arpm">Average Revenue Per Month ($)</Label>
            <Input id="arpm" name="arpm" placeholder="e.g., 50" required type="number" min="0" step="0.01" defaultValue={state.formData?.arpm} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="margin">Gross Margin (%)</Label>
            <Input id="margin" name="margin" placeholder="e.g., 80" required type="number" min="0" max="100" defaultValue={state.formData?.margin} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="churn">Monthly Churn Rate (%)</Label>
            <Input id="churn" name="churn" placeholder="e.g., 5" required type="number" min="0" max="100" step="0.01" defaultValue={state.formData?.churn} />
          </div>
        </CardContent>
        <CardFooter className="flex-col items-stretch space-y-4">
          <LoadingButton
            type="submit"
            loadingText="Calculating..."
          >
            Calculate CLV
          </LoadingButton>

          {state.clv && (
            <div className="text-center pt-4 w-full">
              <Separator />
              <p className="text-sm text-muted-foreground mt-4">
                Estimated Customer Lifetime Value
              </p>
              <p className="text-5xl font-bold font-headline text-primary">
                {state.clv}
              </p>
            </div>
          )}
        </CardFooter>
      </form>
    </Card>
  );
}
