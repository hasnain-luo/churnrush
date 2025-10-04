"use server";

import {onCallGenkit} from "firebase-functions/v2/https";
import {defineSecret} from "firebase-functions/params";
import {
  websiteAudit,
  predictChurn,
  explainChurnRateWithAI,
} from "@/ai/flows";

const geminiApiKey = defineSecret("GEMINI_API_KEY");

export const websiteaudit = onCallGenkit(
  {
    secrets: [geminiApiKey],
    authPolicy: (auth) => {
      if (!auth) {
        return false;
      }
      return true;
    },
  },
  websiteAudit
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
  predictChurn
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
  explainChurnRateWithAI
);
