
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
import { calculateLtvCacAction, type LtvCacState } from '@/app/actions';
import { LoadingButton } from './loading-button';

const initialState: LtvCacState = {};

export default function LtvCacRatioCalculator() {
  const [state, formAction] = useFormState(calculateLtvCacAction, initialState);
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
          <CardTitle className="font-headline text-xl">LTV:CAC Ratio Calculator</CardTitle>
          <CardDescription>
            Calculate the ratio of Customer Lifetime Value to Customer Acquisition Cost.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="ltv">Customer Lifetime Value (LTV) ($)</Label>
            <Input id="ltv" name="ltv" placeholder="e.g., 3000" required type="number" min="0" defaultValue={state.formData?.ltv} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cac">Customer Acquisition Cost (CAC) ($)</Label>
            <Input id="cac" name="cac" placeholder="e.g., 1000" required type="number" min="0" defaultValue={state.formData?.cac} />
          </div>
        </CardContent>
        <CardFooter className="flex-col items-stretch space-y-4">
          <LoadingButton
            type="submit"
            loadingText="Calculating..."
          >
            Calculate LTV:CAC Ratio
          </LoadingButton>

          {state.ratio && (
            <div className="text-center pt-4 w-full">
              <Separator />
              <p className="text-sm text-muted-foreground mt-4">
                LTV to CAC Ratio
              </p>
              <p className="text-5xl font-bold font-headline text-primary">
                {state.ratio} : 1
              </p>
            </div>
          )}
        </CardFooter>
      </form>
    </Card>
  );
}
