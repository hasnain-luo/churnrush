'use server';

/**
 * @fileOverview A churn prediction AI agent.
 *
 * - predictChurn - A function that handles the churn prediction process.
 * - ChurnPredictionInput - The input type for the predictChurn function.
 * - ChurnPredictionOutput - The return type for the predictChurn function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ChurnPredictionInputSchema = z.object({
  websiteUrl: z.string().describe('The URL of the website.'),
  daysSinceLastActivity: z
    .number()
    .describe('Number of days since the customer last interacted with the service.'),
  supportTicketsLast30Days: z
    .number()
    .describe('Number of support tickets opened by the customer in the last 30 days.'),
  paymentStatus: z.enum(['On-Time', 'Delayed', 'Very Late']).describe('The customer payment status.'),
});

export type ChurnPredictionInput = z.infer<typeof ChurnPredictionInputSchema>;

const ChurnPredictionOutputSchema = z.object({
  churnProbability: z
    .number()
    .min(0)
    .max(1)
    .describe('The predicted probability of churn, as a number between 0 and 1.'),
  reasons: z.string().describe('The reasons for the churn prediction.'),
  tips: z.string().describe('Actionable tips to reduce churn for this customer.'),
});

export type ChurnPredictionOutput = z.infer<typeof ChurnPredictionOutputSchema>;

export async function predictChurn(input: ChurnPredictionInput): Promise<ChurnPredictionOutput> {
  return predictChurnFlow(input);
}

const prompt = ai.definePrompt({
  name: 'churnPredictionPrompt',
  input: {schema: ChurnPredictionInputSchema},
  output: {schema: ChurnPredictionOutputSchema},
  prompt: `You are an expert in customer churn prediction. Analyze the following customer data and predict the likelihood of churn.

Website URL: {{{websiteUrl}}}
Days Since Last Activity: {{{daysSinceLastActivity}}}
Support Tickets (Last 30 Days): {{{supportTicketsLast30Days}}}
Payment Status: {{{paymentStatus}}}

Based on this information, provide:

1.  A churn probability (as a number between 0 and 1).
2.  Reasons for your prediction.
3.  Actionable tips to reduce churn for this customer.

Ensure your response is well-structured and easy to understand.`,
});

const predictChurnFlow = ai.defineFlow(
  {
    name: 'predictChurnFlow',
    inputSchema: ChurnPredictionInputSchema,
    outputSchema: ChurnPredictionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
