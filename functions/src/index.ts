'use server';

import { onCallGenkit } from 'firebase-functions/v2/https';
import { defineSecret } from 'firebase-functions/params';

// This is a workaround to get the Genkit flows to be included in the build.
// The AI SDK requires that the flows are loaded for it to work.
import '@/ai';

import {
  websiteAuditFlow,
  predictChurnFlow,
  aiDefinitionFlow,
} from '@/ai/flows';

const geminiApiKey = defineSecret('GEMINI_API_KEY');

export const websiteaudit = onCallGenkit(
  {
    secrets: [geminiApiKey],
    authPolicy: (auth) => {
      if (!auth) {
        // You can also throw an HttpsError here.
        return false;
      }
      return true;
    },
  },
  websiteAuditFlow
);

export const predictchurn = onCallGenkit(
  {
    secrets: [geminiApiKey],
    authPolicy: (auth) => {
      if (!auth) {
        return false;
      }
      return true;
    },
  },
  predictChurnFlow
);

export const explainchurnratewithai = onCallGenkit(
  {
    secrets: [geminiApiKey],
    authPolicy: (auth) => {
      if (!auth) {
        return false;
      }
      return true;
    },
  },
  aiDefinitionFlow
);
