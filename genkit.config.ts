import {defineConfig} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';
import {next} from '@genkit-ai/next';
import { enableFirebaseTelemetry } from '@genkit-ai/firebase';

enableFirebaseTelemetry();

export default defineConfig({
  plugins: [
    googleAI(),
    next({
      // The directory where your Next.js app is located.
      // This is used to find the `src/ai` directory.
      //
      // The default is `.`
      app: '.',
    }),
  ],
  logLevel: 'debug',
  enableTracingAndMetrics: true,
});
