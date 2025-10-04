'use server';

/**
 * @fileOverview A flow to generate an AI-powered definition of churn rate and an explanation of related factors.
 *
 * - aiDefinitionFlow - A function that triggers the churn definition flow.
 * - AIDefinitionInput - The input type for the explainChurnRateWithAI function.
 * - AIDefinitionOutput - The return type for the explainChurnRateWithAI function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIDefinitionInputSchema = z.object({
  context: z.string().describe('The context for the AI definition.'),
});
export type AIDefinitionInput = z.infer<typeof AIDefinitionInputSchema>;

const AIDefinitionOutputSchema = z.object({
  definition: z.string().describe('A concise definition of churn rate.'),
  explanation: z
    .string()
    .describe('An explanation of factors related to churn rate.'),
});
export type AIDefinitionOutput = z.infer<typeof AIDefinitionOutputSchema>;

const prompt = ai.definePrompt({
  name: 'aiDefinitionPrompt',
  input: {schema: AIDefinitionInputSchema},
  output: {schema: AIDefinitionOutputSchema},
  prompt: `You are an expert in customer retention and churn analysis. A user wants to understand churn rate. Provide a concise definition of churn rate and an explanation of related factors.

Context: {{{context}}}

Definition: 
Explanation: `,
});

export const aiDefinitionFlow = ai.defineFlow(
  {
    name: 'aiDefinitionFlow',
    inputSchema: AIDefinitionInputSchema,
    outputSchema: AIDefinitionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
