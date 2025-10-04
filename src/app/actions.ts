'use server';

import {z} from 'zod';

// Churn Rate Calculator Action
const churnRateSchema = z.object({
  start: z.coerce.number().int().min(0, 'Must be a positive number'),
  new: z.coerce.number().int().min(0, 'Must be a positive number'),
  end: z.coerce.number().int().min(0, 'Must be a positive number'),
});

export type ChurnRateState = {
  churnRate?: string;
  error?: string;
  formData?: {
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
    return {error: errorMessages};
  }

  const {
    start,
    new: newCustomers,
    end,
  } = validatedFields.data;

  const currentFormData = { start, new: newCustomers, end};

  if (start + newCustomers < end) {
    return {
      error: 'Customers at end cannot be more than start + new.',
      formData: currentFormData,
    };
  }

  const churnRateValue =
    start === 0 ? 0 : ((start + newCustomers - end) / start) * 100;
  const churnRate = churnRateValue.toFixed(2);

  return {churnRate, formData: currentFormData};
}


// Churn Risk Calculator Action
const churnRiskSchema = z.object({
  tenure: z.coerce.number().int().min(0, 'Must be a positive number'),
  usage: z.enum(['daily', 'weekly', 'monthly']),
  satisfaction: z.coerce.number().int().min(1).max(5),
  tickets: z.coerce.number().int().min(0, 'Must be a positive number'),
});

export type ChurnRiskState = {
  riskScore?: {
    level: 'Low' | 'Medium' | 'High';
    score: number;
  };
  error?: string;
  formData?: {
    tenure: number;
    usage: 'daily' | 'weekly' | 'monthly';
    satisfaction: number;
    tickets: number;
  };
};

export async function calculateChurnRiskAction(
  prevState: ChurnRiskState,
  formData: FormData
): Promise<ChurnRiskState> {
  const validatedFields = churnRiskSchema.safeParse(Object.fromEntries(formData));

  if (!validatedFields.success) {
    const errorMessages = Object.values(validatedFields.error.flatten().fieldErrors)
      .flat()
      .join(', ');
    return { error: errorMessages };
  }

  const { tenure, usage, satisfaction, tickets } = validatedFields.data;
  const currentFormData = { tenure, usage, satisfaction, tickets };

  let score = 0;
  // Usage frequency points
  if (usage === 'weekly') score += 15;
  if (usage === 'monthly') score += 30;

  // Satisfaction points (lower is worse)
  score += (5 - satisfaction) * 10;

  // Support tickets points
  score += tickets * 5;

  // Tenure points (newer customers are higher risk)
  if (tenure < 6) score += 15;
  if (tenure < 12) score += 5;

  let level: 'Low' | 'Medium' | 'High';
  if (score >= 50) {
    level = 'High';
  } else if (score >= 25) {
    level = 'Medium';
  } else {
    level = 'Low';
  }

  return { riskScore: { level, score }, formData: currentFormData };
}