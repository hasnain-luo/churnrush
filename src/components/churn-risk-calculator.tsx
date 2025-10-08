
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
import { calculateChurnRiskAction, type ChurnRiskState } from '@/app/actions';
import { LoadingButton } from './loading-button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { cn } from '@/lib/utils';

const initialState: ChurnRiskState = {};

export default function ChurnRiskCalculator() {
  const [state, formAction] = useFormState(calculateChurnRiskAction, initialState);
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

  const riskColor =
    state.riskScore?.level === 'High'
      ? 'text-destructive'
      : state.riskScore?.level === 'Medium'
      ? 'text-primary'
      : 'text-green-600';

  return (
    <Card>
      <form action={formAction}>
        <CardHeader>
          <CardTitle className="font-headline text-xl">Churn Risk Calculator</CardTitle>
          <CardDescription>
            Calculate an individual customer&apos;s churn risk score.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="tenure">Customer Tenure (Months)</Label>
            <Input id="tenure" name="tenure" placeholder="e.g., 6" required type="number" min="0" defaultValue={state.formData?.tenure} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="usage">Usage Frequency</Label>
            <Select name="usage" required defaultValue={state.formData?.usage || 'weekly'}>
              <SelectTrigger id="usage">
                <SelectValue placeholder="Select usage..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="daily">Daily</SelectItem>
                <SelectItem value="weekly">Weekly</SelectItem>
                <SelectItem value="monthly">Monthly</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="satisfaction">Satisfaction Score (1-5)</Label>
            <Input id="satisfaction" name="satisfaction" placeholder="1 is worst, 5 is best" required type="number" min="1" max="5" defaultValue={state.formData?.satisfaction} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="tickets">Support Tickets (Last 30 Days)</Label>
            <Input id="tickets" name="tickets" placeholder="e.g., 2" required type="number" min="0" defaultValue={state.formData?.tickets} />
          </div>
        </CardContent>
        <CardFooter className="flex-col items-stretch space-y-4">
          <LoadingButton
            type="submit"
            loadingText="Calculating..."
          >
            Calculate Risk
          </LoadingButton>

          {state.riskScore && (
            <div className="text-center pt-4 w-full">
              <Separator />
              <p className="text-sm text-muted-foreground mt-4">
                Calculated Churn Risk
              </p>
              <p className={cn("text-5xl font-bold font-headline", riskColor)}>
                {state.riskScore.level}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Score: {state.riskScore.score}
              </p>
            </div>
          )}
        </CardFooter>
      </form>
    </Card>
  );
}
