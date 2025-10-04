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
