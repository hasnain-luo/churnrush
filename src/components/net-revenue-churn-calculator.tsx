
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
import { calculateNetRevenueChurnAction, type NetRevenueChurnState } from '@/app/actions';
import { LoadingButton } from './loading-button';

const initialState: NetRevenueChurnState = {};

export default function NetRevenueChurnCalculator() {
  const [state, formAction] = useActionState(calculateNetRevenueChurnAction, initialState);
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
          <CardTitle className="font-headline text-xl">Net Revenue Churn (NDR) Calculator</CardTitle>
          <CardDescription>
            Calculate your Net Dollar Retention to measure revenue growth from existing customers.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="mrrStart">Starting MRR from Cohort ($)</Label>
            <Input id="mrrStart" name="mrrStart" placeholder="e.g., 50000" required type="number" min="0" defaultValue={state.formData?.mrrStart} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="mrrEnd">Ending MRR from Cohort ($)</Label>
            <Input id="mrrEnd" name="mrrEnd" placeholder="e.g., 55000" required type="number" min="0" defaultValue={state.formData?.mrrEnd} />
          </div>
        </CardContent>
        <CardFooter className="flex-col items-stretch space-y-4">
          <LoadingButton
            type="submit"
            loadingText="Calculating..."
          >
            Calculate Net Revenue Churn
          </LoadingButton>

          {state.rate && (
            <div className="text-center pt-4 w-full">
              <Separator />
              <p className="text-sm text-muted-foreground mt-4">
                Net Dollar Retention (NDR)
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
