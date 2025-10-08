
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
import { calculateDauMauAction, type DauMauState } from '@/app/actions';
import { LoadingButton } from './loading-button';

const initialState: DauMauState = {};

export default function DauMauRatioCalculator() {
  const [state, formAction] = useActionState(calculateDauMauAction, initialState);
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
          <CardTitle className="font-headline text-xl">DAU/MAU Ratio Calculator</CardTitle>
          <CardDescription>
            Calculate the ratio of Daily Active Users to Monthly Active Users.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="dau">Daily Active Users (DAU)</Label>
            <Input id="dau" name="dau" placeholder="e.g., 1500" required type="number" min="0" defaultValue={state.formData?.dau} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="mau">Monthly Active Users (MAU)</Label>
            <Input id="mau" name="mau" placeholder="e.g., 10000" required type="number" min="0" defaultValue={state.formData?.mau} />
          </div>
        </CardContent>
        <CardFooter className="flex-col items-stretch space-y-4">
          <LoadingButton
            type="submit"
            loadingText="Calculating..."
          >
            Calculate DAU/MAU Ratio
          </LoadingButton>

          {state.ratio && (
            <div className="text-center pt-4 w-full">
              <Separator />
              <p className="text-sm text-muted-foreground mt-4">
                DAU/MAU Ratio (Stickiness)
              </p>
              <p className="text-5xl font-bold font-headline text-primary">
                {state.ratio}%
              </p>
            </div>
          )}
        </CardFooter>
      </form>
    </Card>
  );
}
