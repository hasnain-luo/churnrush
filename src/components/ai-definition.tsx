
'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useFormState } from 'react-dom';
import { explainChurnAction, type AiDefinitionState } from '@/app/actions';
import { useEffect } from 'react';
import { LoadingButton } from './loading-button';
import { cn } from '@/lib/utils';
import { ReportDisplay } from './report-display';

const initialState: AiDefinitionState = {};

export default function AiDefinition({ className }: { className?: string }) {
  const [state, formAction] = useFormState(explainChurnAction, initialState);
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
    <Card className={cn('flex flex-col', className)}>
      <CardHeader>
        <CardTitle className="font-headline">Want to learn more?</CardTitle>
        <CardDescription>
          Confused about churn? Get a simple, AI-powered explanation.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        {state.result ? (
          <ReportDisplay
            content={`${state.result.definition}\n\n${state.result.explanation}`}
          />
        ) : (
          <form action={formAction}>
            <LoadingButton
              type="submit"
              variant="secondary"
              className="w-full"
              loadingText="Explaining..."
            >
              Explain Churn with AI
            </LoadingButton>
          </form>
        )}
      </CardContent>
    </Card>
  );
}
