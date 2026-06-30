// Import and initialize Vercel Speed Insights
import { injectSpeedInsights } from './node_modules/@vercel/speed-insights/dist/index.mjs';

// Initialize Speed Insights when the page loads
if (typeof window !== 'undefined') {
  injectSpeedInsights({
    debug: false,
  });
}
