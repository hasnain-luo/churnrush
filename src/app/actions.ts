
'use server';

import { z } from 'zod';
import {
  websiteAudit,
  type WebsiteAuditOutput,
} from '@/ai/flows/website-audit-flow';
import {
  predictChurn,
  type ChurnPredictionOutput,
} from '@/ai/flows/churn-prediction-flow';
import {
  explainChurnRateWithAI,
  type AIDefinitionOutput,
} from '@/ai/flows/ai-definition-flow';

// Churn Rate Calculator Action
const churnRateSchema = z.object({
  start: z.coerce.number().int().min(0, 'Must be a positive number'),
  new: z.coerce.number().int().min(0, 'Must be a positive number'),
  end: z.coerce.number().int().min(0, 'Must be a positive number'),
  websiteUrl: z.string().url('Please enter a valid URL'),
  intent: z.enum(['calculate', 'audit']).optional(),
});

export type ChurnRateState = {
  churnRate?: string;
  auditResult?: WebsiteAuditOutput;
  error?: string;
  formData?: {
    websiteUrl: string;
    start: number;
    new: number;
    end: number;
  };
};

export async function calculateChurnAction(
  prevState: ChurnRateState,
  formData: FormData
): Promise<ChurnRateState> {
  const validatedFields = churnRateSchema.safeParse(
    Object.fromEntries(formData)
  );

  if (!validatedFields.success) {
    const errorMessages = Object.values(
      validatedFields.error.flatten().fieldErrors
    )
      .flat()
      .join(', ');
    return { error: errorMessages };
  }

  const {
    start,
    new: newCustomers,
    end,
    websiteUrl,
    intent,
  } = validatedFields.data;
  
  const currentFormData = { websiteUrl, start, new: newCustomers, end };

  if (start + newCustomers < end) {
    return { error: 'Customers at end cannot be more than start + new.', formData: currentFormData };
  }

  const churnRateValue =
    start === 0 ? 0 : ((start + newCustomers - end) / start) * 100;
  const churnRate = churnRateValue.toFixed(2);
  
  const baseState = { churnRate, formData: currentFormData };

  if (intent === 'audit') {
    try {
      const auditResult = await websiteAudit({ websiteUrl });
      return { ...baseState, auditResult };
    } catch (e: any) {
      return { ...baseState, error: `Audit failed: ${e.message}` };
    }
  }

  return baseState;
}

// Churn Risk Action
const churnRiskSchema = z.object({
  websiteUrl: z.string().url('Please enter a valid URL'),
  daysSinceLastActivity: z.coerce
    .number()
    .int()
    .min(0, 'Must be a positive number'),
  supportTicketsLast30Days: z.coerce
    .number()
    .int()
    .min(0, 'Must be a positive number'),
  paymentStatus: z.enum(['On-Time', 'Delayed', 'Very Late']),
});

export type ChurnRiskState = {
  result?: ChurnPredictionOutput;
  error?: string;
  formKey?: number;
};

export async function assessRiskAction(
  prevState: ChurnRiskState,
  formData: FormData
): Promise<ChurnRiskState> {
  const validatedFields = churnRiskSchema.safeParse(
    Object.fromEntries(formData)
  );

  if (!validatedFields.success) {
    const errorMessages = Object.values(
      validatedFields.error.flatten().fieldErrors
    )
      .flat()
      .join(', ');
    return { error: errorMessages };
  }

  try {
    const result = await predictChurn(validatedFields.data);
    return { result, formKey: Date.now() };
  } catch (e: any) {
    return { error: `Risk assessment failed: ${e.message}` };
  }
}

// AI Definition Action
export type AiDefinitionState = {
  result?: AIDefinitionOutput;
  error?: string;
};

export async function explainChurnAction(
  prevState: AiDefinitionState,
  formData: FormData
): Promise<AiDefinitionState> {
  try {
    const result = await explainChurnRateWithAI({
      context: 'A user wants to understand churn rate.',
    });
    return { result };
  } catch (e: any) {
    return { error: `AI explanation failed: ${e.message}` };
  }
}
