
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
import { calculateMrrChurnAction, type MrrChurnState } from '@/app/actions';
import { LoadingButton } from './loading-button';

const initialState: MrrChurnState = {};

export default function MrrChurnCalculator() {
  const [state, formAction] = useActionState(calculateMrrChurnAction, initialState);
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
          <CardTitle className="font-headline text-xl">MRR Churn Rate Calculator</CardTitle>
          <CardDescription>
            Calculate your Gross and Net Monthly Recurring Revenue churn rates.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="mrrStart">MRR at Start of Month ($)</Label>
            <Input id="mrrStart" name="mrrStart" placeholder="e.g., 10000" required type="number" min="0" defaultValue={state.formData?.mrrStart} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="mrrExpansion">Expansion MRR from Upgrades ($)</Label>
            <Input id="mrrExpansion" name="mrrExpansion" placeholder="e.g., 1000" required type="number" min="0" defaultValue={state.formData?.mrrExpansion} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="mrrChurn">Churned MRR from Downgrades & Cancellations ($)</Label>
            <Input id="mrrChurn" name="mrrChurn" placeholder="e.g., 500" required type="number" min="0" defaultValue={state.formData?.mrrChurn} />
          </div>
        </CardContent>
        <CardFooter className="flex-col items-stretch space-y-4">
          <LoadingButton
            type="submit"
            loadingText="Calculating..."
          >
            Calculate MRR Churn
          </LoadingButton>

          {state.rates && (
            <div className="text-center pt-4 w-full">
              <Separator />
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Gross MRR Churn Rate
                  </p>
                  <p className="text-4xl font-bold font-headline text-destructive">
                    {state.rates.gross}%
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Net MRR Churn Rate
                  </p>
                  <p className="text-4xl font-bold font-headline text-primary">
                    {state.rates.net}%
                  </p>
                </div>
              </div>
            </div>
          )}
        </CardFooter>
      </form>
    </Card>
  );
}
