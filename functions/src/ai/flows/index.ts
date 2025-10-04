import {
  websiteAudit,
  WebsiteAuditInput,
  WebsiteAuditOutput,
} from './website-audit-flow';
import {
  predictChurn,
  ChurnPredictionInput,
  ChurnPredictionOutput,
} from './churn-prediction-flow';
import {
  explainChurnRateWithAI,
  AIDefinitionInput,
  AIDefinitionOutput,
} from './ai-definition-flow';

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { fetchTextContent } from '@/services/url-service';

// Re-exporting the flows and types
export {
  websiteAudit,
  WebsiteAuditInput,
  WebsiteAuditOutput,
  predictChurn,
  ChurnPredictionInput,
  ChurnPredictionOutput,
  explainChurnRateWithAI,
  AIDefinitionInput,
  AIDefinitionOutput,
};

// Re-defining flows to be used with onCallGenkit
const websiteAuditPrompt = ai.definePrompt({
  name: 'websiteAuditPrompt',
  input: {
    schema: z.object({
      websiteUrl: z.string().url(),
      textContent: z.string(),
    }),
  },
  output: { schema: WebsiteAuditOutput.schema },
  prompt: `You are a customer retention expert analyzing websites to reduce churn.

  Analyze the following website content and provide an audit summary and personalized tips for churn reduction.

  Website URL: {{{websiteUrl}}}
  Website Content: {{{textContent}}}

  Your response should contain an "Audit Summary" and "Personalized Tips" section.

  The "Audit Summary" should be a concise overview of the website's strengths and weaknesses in terms of customer retention.

  The "Personalized Tips" should provide actionable recommendations for improving customer retention on the website, with each tip presented as a separate paragraph.
`,
});

export const websiteAuditFlow = ai.defineFlow(
  {
    name: 'websiteAuditFlow',
    inputSchema: WebsiteAuditInput.schema,
    outputSchema: WebsiteAuditOutput.schema,
  },
  async (input) => {
    try {
      const textContent = await fetchTextContent(input.websiteUrl);
      const { output } = await prompt({ ...input, textContent });
      return output!;
    } catch (error: any) {
      console.error('Error during website audit:', error);
      throw new Error(`Failed to audit website: ${error.message}`);
    }
  }
);

const churnPredictionPrompt = ai.definePrompt({
  name: 'churnPredictionPrompt',
  input: { schema: ChurnPredictionInput.schema },
  output: { schema: ChurnPredictionOutput.schema },
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

export const predictChurnFlow = ai.defineFlow(
  {
    name: 'predictChurnFlow',
    inputSchema: ChurnPredictionInput.schema,
    outputSchema: ChurnPredictionOutput.schema,
  },
  async (input) => {
    const { output } = await churnPredictionPrompt(input);
    return output!;
  }
);

const aiDefinitionPrompt = ai.definePrompt({
  name: 'aiDefinitionPrompt',
  input: { schema: AIDefinitionInput.schema },
  output: { schema: AIDefinitionOutput.schema },
  prompt: `You are an expert in customer retention and churn analysis. A user wants to understand churn rate. Provide a concise definition of churn rate and an explanation of related factors.

Context: {{{context}}}

Definition: 
Explanation: `,
});

export const aiDefinitionFlow = ai.defineFlow(
  {
    name: 'aiDefinitionFlow',
    inputSchema: AIDefinitionInput.schema,
    outputSchema: AIDefinitionOutput.schema,
  },
  async (input) => {
    const { output } = await aiDefinitionPrompt(input);
    return output!;
  }
);
