
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

// CLV Calculator Action
const clvSchema = z.object({
  arpm: z.coerce.number().min(0, 'Must be a positive number'),
  margin: z.coerce.number().min(0, 'Must be a positive number').max(100, 'Cannot exceed 100'),
  churn: z.coerce.number().min(0, 'Must be a positive number').max(100, 'Cannot exceed 100'),
});

export type ClvState = {
  clv?: string;
  error?: string;
  formData?: {
    arpm: number;
    margin: number;
    churn: number;
  };
};

export async function calculateClvAction(
  prevState: ClvState,
  formData: FormData
): Promise<ClvState> {
  const validatedFields = clvSchema.safeParse(Object.fromEntries(formData));

  if (!validatedFields.success) {
    const errorMessages = Object.values(validatedFields.error.flatten().fieldErrors)
      .flat()
      .join(', ');
    return { error: errorMessages };
  }

  const { arpm, margin, churn } = validatedFields.data;
  const currentFormData = { arpm, margin, churn };

  if (churn === 0) {
    return { error: 'Churn rate cannot be zero for this calculation.', formData: currentFormData };
  }

  const monthlyChurnRate = churn / 100;
  const grossMargin = margin / 100;
  
  const customerLifetime = 1 / monthlyChurnRate;
  const clvValue = arpm * customerLifetime * grossMargin;

  const clv = clvValue.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return { clv, formData: currentFormData };
}

// MRR Churn Rate Calculator Action
const mrrChurnSchema = z.object({
  mrrStart: z.coerce.number().min(0, 'Must be a positive number'),
  mrrExpansion: z.coerce.number().min(0, 'Must be a positive number'),
  mrrChurn: z.coerce.number().min(0, 'Must be a positive number'),
});

export type MrrChurnState = {
  rates?: {
    gross: string;
    net: string;
  };
  error?: string;
  formData?: {
    mrrStart: number;
    mrrExpansion: number;
    mrrChurn: number;
  };
};

export async function calculateMrrChurnAction(
  prevState: MrrChurnState,
  formData: FormData
): Promise<MrrChurnState> {
  const validatedFields = mrrChurnSchema.safeParse(Object.fromEntries(formData));

  if (!validatedFields.success) {
    const errorMessages = Object.values(validatedFields.error.flatten().fieldErrors)
      .flat()
      .join(', ');
    return { error: errorMessages };
  }

  const { mrrStart, mrrExpansion, mrrChurn } = validatedFields.data;
  const currentFormData = { mrrStart, mrrExpansion, mrrChurn };

  if (mrrStart === 0) {
    return {
      rates: { gross: '0.00', net: '0.00' },
      formData: currentFormData,
    };
  }

  const grossChurnRate = (mrrChurn / mrrStart) * 100;
  const netChurnRate = ((mrrChurn - mrrExpansion) / mrrStart) * 100;

  return {
    rates: {
      gross: grossChurnRate.toFixed(2),
      net: netChurnRate.toFixed(2),
    },
    formData: currentFormData,
  };
}

// LTV:CAC Ratio Calculator Action
const ltvCacSchema = z.object({
  ltv: z.coerce.number().min(0, 'Must be a positive number'),
  cac: z.coerce.number().min(0, 'Must be a positive number'),
});

export type LtvCacState = {
  ratio?: string;
  error?: string;
  formData?: {
    ltv: number;
    cac: number;
  };
};

export async function calculateLtvCacAction(
  prevState: LtvCacState,
  formData: FormData
): Promise<LtvCacState> {
  const validatedFields = ltvCacSchema.safeParse(Object.fromEntries(formData));

  if (!validatedFields.success) {
    const errorMessages = Object.values(validatedFields.error.flatten().fieldErrors)
      .flat()
      .join(', ');
    return { error: errorMessages };
  }

  const { ltv, cac } = validatedFields.data;
  const currentFormData = { ltv, cac };

  if (cac === 0) {
    return { error: 'Customer Acquisition Cost (CAC) cannot be zero.', formData: currentFormData };
  }

  const ratioValue = ltv / cac;
  const ratio = ratioValue.toFixed(2);

  return { ratio, formData: currentFormData };
}

// Payback Period Calculator Action
const paybackPeriodSchema = z.object({
  cac: z.coerce.number().min(0, 'Must be a positive number'),
  arpm: z.coerce.number().min(0, 'Must be a positive number'),
  margin: z.coerce.number().min(0, 'Must be a positive number').max(100, 'Cannot exceed 100'),
});

export type PaybackPeriodState = {
  period?: string;
  error?: string;
  formData?: {
    cac: number;
    arpm: number;
    margin: number;
  };
};

export async function calculatePaybackPeriodAction(
  prevState: PaybackPeriodState,
  formData: FormData
): Promise<PaybackPeriodState> {
  const validatedFields = paybackPeriodSchema.safeParse(Object.fromEntries(formData));

  if (!validatedFields.success) {
    const errorMessages = Object.values(validatedFields.error.flatten().fieldErrors)
      .flat()
      .join(', ');
    return { error: errorMessages };
  }

  const { cac, arpm, margin } = validatedFields.data;
  const currentFormData = { cac, arpm, margin };
  
  const grossMarginPerMonth = arpm * (margin / 100);

  if (grossMarginPerMonth === 0) {
    return { error: 'Monthly gross margin cannot be zero.', formData: currentFormData };
  }
  
  const periodValue = cac / grossMarginPerMonth;
  const period = periodValue.toFixed(1);

  return { period, formData: currentFormData };
}

// DAU/MAU Ratio Calculator Action
const dauMauSchema = z.object({
  dau: z.coerce.number().int().min(0, 'Must be a positive integer'),
  mau: z.coerce.number().int().min(0, 'Must be a positive integer'),
});

export type DauMauState = {
  ratio?: string;
  error?: string;
  formData?: {
    dau: number;
    mau: number;
  };
};

export async function calculateDauMauAction(
  prevState: DauMauState,
  formData: FormData
): Promise<DauMauState> {
  const validatedFields = dauMauSchema.safeParse(Object.fromEntries(formData));

  if (!validatedFields.success) {
    const errorMessages = Object.values(validatedFields.error.flatten().fieldErrors)
      .flat()
      .join(', ');
    return { error: errorMessages };
  }

  const { dau, mau } = validatedFields.data;
  const currentFormData = { dau, mau };

  if (mau === 0) {
    return { error: 'Monthly Active Users (MAU) cannot be zero.', formData: currentFormData };
  }
  if (dau > mau) {
    return { error: 'Daily Active Users (DAU) cannot be greater than Monthly Active Users (MAU).', formData: currentFormData };
  }
  
  const ratioValue = (dau / mau) * 100;
  const ratio = ratioValue.toFixed(2);

  return { ratio, formData: currentFormData };
}

// Customer Retention Rate Calculator Action
const retentionSchema = z.object({
  start: z.coerce.number().int().min(0, 'Must be a positive integer'),
  new: z.coerce.number().int().min(0, 'Must be a positive integer'),
  end: z.coerce.number().int().min(0, 'Must be a positive integer'),
});

export type RetentionState = {
  rate?: string;
  error?: string;
  formData?: {
    start: number;
    new: number;
    end: number;
  };
};

export async function calculateRetentionAction(
  prevState: RetentionState,
  formData: FormData
): Promise<RetentionState> {
  const validatedFields = retentionSchema.safeParse(Object.fromEntries(formData));

  if (!validatedFields.success) {
    const errorMessages = Object.values(validatedFields.error.flatten().fieldErrors)
      .flat()
      .join(', ');
    return { error: errorMessages };
  }

  const { start, new: newCustomers, end } = validatedFields.data;
  const currentFormData = { start, new: newCustomers, end };

  if (end < newCustomers) {
    return { error: 'Ending customers cannot be less than new customers.', formData: currentFormData };
  }

  if (start === 0) {
     return { rate: '0.00', formData: currentFormData };
  }

  const retainedCustomers = end - newCustomers;
  const rateValue = (retainedCustomers / start) * 100;
  const rate = rateValue.toFixed(2);

  return { rate, formData: currentFormData };
}

// Net Revenue Churn Calculator Action
const netRevenueChurnSchema = z.object({
  mrrStart: z.coerce.number().min(0, 'Must be a positive number'),
  mrrEnd: z.coerce.number().min(0, 'Must be a positive number'),
});

export type NetRevenueChurnState = {
  rate?: string;
  error?: string;
  formData?: {
    mrrStart: number;
    mrrEnd: number;
  };
};

export async function calculateNetRevenueChurnAction(
  prevState: NetRevenueChurnState,
  formData: FormData
): Promise<NetRevenueChurnState> {
  const validatedFields = netRevenueChurnSchema.safeParse(Object.fromEntries(formData));

  if (!validatedFields.success) {
    const errorMessages = Object.values(validatedFields.error.flatten().fieldErrors)
      .flat()
      .join(', ');
    return { error: errorMessages };
  }

  const { mrrStart, mrrEnd } = validatedFields.data;
  const currentFormData = { mrrStart, mrrEnd };

  if (mrrStart === 0) {
    return { error: 'Starting MRR cannot be zero.', formData: currentFormData };
  }

  const ndr = (mrrEnd / mrrStart) * 100;
  const rate = ndr.toFixed(2);

  return { rate, formData: currentFormData };
}
