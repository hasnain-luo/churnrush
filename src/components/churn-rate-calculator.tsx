
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
import React, { useEffect, useState, useActionState } from 'react';
import { calculateChurnAction, type ChurnRateState } from '@/app/actions';
import { LoadingButton } from './loading-button';
import { ReportDisplay } from './report-display';

const initialState: ChurnRateState = {};

export default function ChurnRateCalculator() {
  const [state, formAction] = useActionState(calculateChurnAction, initialState);
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

  return (
    <Card>
      <form key={formKey} action={formAction}>
        <CardHeader>
          <CardTitle className="font-headline">Churn Rate Calculator</CardTitle>
          <CardDescription>
            Calculate your company&apos;s customer churn rate over a period.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="websiteUrl">Website URL</Label>
            <Input
              id="websiteUrl"
              name="websiteUrl"
              placeholder="https://example.com"
              required
              type="url"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="start">Customers at Start</Label>
              <Input id="start" name="start" required type="number" min="0" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new">New Customers</Label>
              <Input id="new" name="new" required type="number" min="0" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="end">Customers at End</Label>
              <Input id="end" name="end" required type="number" min="0" />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex-col items-stretch space-y-4">
          <LoadingButton
            type="submit"
            name="intent"
            value="calculate"
            loadingText="Calculating..."
          >
            Calculate Churn
          </LoadingButton>

          {state.churnRate && (
            <div className="text-center pt-4">
              <Separator />
              <p className="text-sm text-muted-foreground mt-4">
                Calculated Churn Rate
              </p>
              <p className="text-5xl font-bold font-headline text-primary">
                {state.churnRate}%
              </p>

              {!state.auditResult && (
                <div className="mt-6">
                  <LoadingButton
                    type="submit"
                    name="intent"
                    value="audit"
                    variant="secondary"
                    loadingText="Auditing..."
                  >
                    Get Free Website Audit
                  </LoadingButton>
                </div>
              )}
            </div>
          )}
          {state.auditResult && (
            <div className="pt-4">
              <Separator className="mb-6" />
              <ReportDisplay
                content={`${state.auditResult.auditSummary}\n\n${state.auditResult.personalizedTips}`}
              />
            </div>
          )}
        </CardFooter>
      </form>
    </Card>
  );
}
