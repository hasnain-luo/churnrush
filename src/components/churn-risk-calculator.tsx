
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import React, { useEffect, useState, useActionState } from 'react';
import { assessRiskAction, type ChurnRiskState } from '@/app/actions';
import { LoadingButton } from './loading-button';
import { ReportDisplay } from './report-display';
import { cn } from '@/lib/utils';

const initialState: ChurnRiskState = {};

export default function ChurnRiskCalculator() {
  const [state, formAction] = useActionState(assessRiskAction, initialState);
  const { toast } = useToast();
  const [formKey, setFormKey] = useState(Date.now());

  useEffect(() => {
    if (state.error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: state.error,
      });
    }
    if (state.formKey) {
      setFormKey(state.formKey);
    }
  }, [state, toast]);

  const getProbabilityColor = (prob: number) => {
    if (prob > 0.7) return 'text-destructive';
    if (prob > 0.4) return 'text-yellow-500'; // A generic yellow, as theme doesn't specify risk levels
    return 'text-green-600';
  };

  return (
    <Card>
      <form key={formKey} action={formAction}>
        <CardHeader>
          <CardTitle className="font-headline">
            Individual Churn-Risk Calculator
          </CardTitle>
          <CardDescription>
            Use AI to assess the churn risk for a single customer.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="risk-websiteUrl">Website URL</Label>
            <Input
              id="risk-websiteUrl"
              name="websiteUrl"
              placeholder="https://example.com"
              required
              type="url"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="daysSinceLastActivity">
                Days Since Last Activity
              </Label>
              <Input
                id="daysSinceLastActivity"
                name="daysSinceLastActivity"
                required
                type="number"
                min="0"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="supportTicketsLast30Days">
                Support Tickets (30d)
              </Label>
              <Input
                id="supportTicketsLast30Days"
                name="supportTicketsLast30Days"
                required
                type="number"
                min="0"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="paymentStatus">Payment Status</Label>
            <Select name="paymentStatus" defaultValue="On-Time" required>
              <SelectTrigger id="paymentStatus">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="On-Time">On-Time</SelectItem>
                <SelectItem value="Delayed">Delayed</SelectItem>
                <SelectItem value="Very Late">Very Late</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardFooter className="flex-col items-stretch">
          <LoadingButton type="submit" loadingText="Assessing...">
            Assess Risk
          </LoadingButton>

          {state.result && (
            <div className="text-center pt-6 w-full">
              <Separator />
              <p className="text-sm text-muted-foreground mt-4">
                Predicted Churn Probability
              </p>
              <p
                className={cn(
                  'text-5xl font-bold font-headline',
                  getProbabilityColor(state.result.churnProbability)
                )}
              >
                {(state.result.churnProbability * 100).toFixed(0)}%
              </p>
              <div className="text-left pt-6">
                <ReportDisplay
                  content={`${state.result.reasons}\n\n${state.result.tips}`}
                />
              </div>
            </div>
          )}
        </CardFooter>
      </form>
    </Card>
  );
}
