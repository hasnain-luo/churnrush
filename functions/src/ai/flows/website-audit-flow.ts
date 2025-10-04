'use server';

/**
 * @fileOverview A website audit AI agent for churn reduction.
 *
 * - websiteAuditFlow - A function that handles the website audit process.
 * - WebsiteAuditInput - The input type for the websiteAudit function.
 * - WebsiteAuditOutput - The return type for the websiteAudit function.
 */

import {ai} from '../genkit';
import {z} from 'genkit';

async function fetchTextContent(url: string): Promise<string> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const html = await response.text();
    const noScripts = html.replace(
      /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
      ''
    );
    const noStyles = noScripts.replace(
      /<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi,
      ''
    );
    const plainText = noStyles.replace(/<[^>]+>/g, '');
    return plainText.replace(/\s+/g, ' ').trim();
  } catch (error: any) {
    console.error(`Error fetching URL content for ${url}:`, error);
    throw new Error(`Could not fetch content from URL: ${url}. ${error.message}`);
  }
}

const WebsiteAuditInputSchema = z.object({
  websiteUrl: z.string().url().describe('The URL of the website to audit.'),
});
export type WebsiteAuditInput = z.infer<typeof WebsiteAuditInputSchema>;

const WebsiteAuditOutputSchema = z.object({
  auditSummary: z.string().describe('A summary of the website audit.'),
  personalizedTips: z
    .string()
    .describe('Personalized tips for churn reduction, presented as paragraphs.'),
});
export type WebsiteAuditOutput = z.infer<typeof WebsiteAuditOutputSchema>;

const prompt = ai.definePrompt({
  name: 'websiteAuditPrompt',
  input: {
    schema: z.object({
      websiteUrl: z.string().url(),
      textContent: z.string(),
    }),
  },
  output: {schema: WebsiteAuditOutputSchema},
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
    inputSchema: WebsiteAuditInputSchema,
    outputSchema: WebsiteAuditOutputSchema,
  },
  async input => {
    try {
      const textContent = await fetchTextContent(input.websiteUrl);
      const {output} = await prompt({...input, textContent});
      return output!;
    } catch (error: any) {
      console.error('Error during website audit:', error);
      throw new Error(`Failed to audit website: ${error.message}`);
    }
  }
);
