// This is a workaround to get the Genkit flows to be included in the build.
// The AI SDK requires that the flows are loaded for it to work.
import "./website-audit-flow";
import "./ai-definition-flow";
import "./churn-prediction-flow";

import {
  websiteAudit,
  WebsiteAuditInput,
  WebsiteAuditOutput,
} from "./website-audit-flow";
import {
  predictChurn,
  ChurnPredictionInput,
  ChurnPredictionOutput,
} from "./churn-prediction-flow";
import {
  explainChurnRateWithAI,
  AIDefinitionInput,
  AIDefinitionOutput,
} from "./ai-definition-flow";

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
