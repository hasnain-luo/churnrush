
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
import React, { useEffect } from 'react';
import { useFormState } from 'react-dom';
import { calculatePaybackPeriodAction, type PaybackPeriodState } from '@/app/actions';
import { LoadingButton } from './loading-button';

const initialState: PaybackPeriodState = {};

export default function PaybackPeriodCalculator() {
  const [state, formAction] = useFormState(calculatePaybackPeriodAction, initialState);
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
          <CardTitle className="font-headline text-xl">Payback Period Calculator</CardTitle>
          <CardDescription>
            Calculate how many months it takes to recover customer acquisition costs.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="cac">Customer Acquisition Cost (CAC) ($)</Label>
            <Input id="cac" name="cac" placeholder="e.g., 500" required type="number" min="0" defaultValue={state.formData?.cac} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="arpm">Average Revenue Per Month ($)</Label>
            <Input id="arpm" name="arpm" placeholder="e.g., 50" required type="number" min="0" step="0.01" defaultValue={state.formData?.arpm} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="margin">Gross Margin (%)</Label>
            <Input id="margin" name="margin" placeholder="e.g., 80" required type="number" min="0" max="100" defaultValue={state.formData?.margin} />
          </div>
        </CardContent>
        <CardFooter className="flex-col items-stretch space-y-4">
          <LoadingButton
            type="submit"
            loadingText="Calculating..."
          >
            Calculate Payback Period
          </LoadingButton>

          {state.period && (
            <div className="text-center pt-4 w-full">
              <Separator />
              <p className="text-sm text-muted-foreground mt-4">
                CAC Payback Period
              </p>
              <p className="text-5xl font-bold font-headline text-primary">
                {state.period}
                <span className="text-2xl text-muted-foreground"> months</span>
              </p>
            </div>
          )}
        </CardFooter>
      </form>
    </Card>
  );
}
