"use server";

import {onCallGenkit} from 'firebase-functions/v2/https';
import {defineSecret} from 'firebase-functions/params';
import {
  websiteAuditFlow,
  predictChurnFlow,
  aiDefinitionFlow,
} from './ai/flows';

const geminiApiKey = defineSecret('GEMINI_API_KEY');

export const websiteaudit = onCallGenkit(
  {
    secrets: [geminiApiKey],
    authPolicy: (auth) => {
      // For now, allow any user. In a real app, you'd check for specific roles.
      // if (!auth) {
      //   return false;
      // }
      return true;
    },
  },
  websiteAuditFlow
);

export const predictchurn = onCallGenkit(
  {
    secrets: [geminiApiKey],
    authPolicy: (auth) => {
      return true;
    },
  },
  predictChurnFlow
);

export const explainchurnratewithai = onCallGenkit(
  {
    secrets: [geminiApiKey],
    authPolicy: (auth) => {
      return true;
    },
  },
  aiDefinitionFlow
);
