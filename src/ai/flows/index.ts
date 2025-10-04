// This is a workaround to get the Genkit flows to be included in the build.
// The AI SDK requires that the flows are loaded for it to work.
import './website-audit-flow';
import './ai-definition-flow';
import './churn-prediction-flow';

import {
  websiteAuditFlow,
  WebsiteAuditInput,
  WebsiteAuditOutput,
} from './website-audit-flow';
import {
  predictChurnFlow,
  ChurnPredictionInput,
  ChurnPredictionOutput,
} from './churn-prediction-flow';
import {
  aiDefinitionFlow,
  AIDefinitionInput,
  AIDefinitionOutput,
} from './ai-definition-flow';

export {
  websiteAuditFlow,
  WebsiteAuditInput,
  WebsiteAuditOutput,
  predictChurnFlow,
  ChurnPredictionInput,
  ChurnPredictionOutput,
  aiDefinitionFlow,
  AIDefinitionInput,
  AIDefinitionOutput,
};
