# **App Name**: ChurnRush

## Core Features:

- Churn Rate Calculation: Calculate the churn rate based on provided start, new, and end customer counts using the formula: `(start + new - end) / start * 100`.
- Website Audit Tool: Fetch the content of a website URL, analyze it as a customer retention expert, and provide an Audit Summary and Personalized Tips for churn reduction.
- Individual Churn Risk Prediction: Use a tool to analyze a customer's profile (days since last activity, support tickets, payment status), predict their churn probability, and provide reasons and actionable tips.
- AI-Powered Churn Explanation: Generate a concise AI-powered definition of churn rate and an explanation of related factors when the 'Explain Churn with AI' button is activated.
- Dynamic Report Display: Display AI-generated lists and summaries with bold text and numbered list parsing, using a shared `ReportDisplay` component.
- Responsive Layout and Design: Implement a clean, fully responsive layout with a simple header and footer that adapts to different screen sizes and devices.
- Form Error Handling: Employ `useActionState` for handling form states and display toast notifications to promptly alert the user about potential errors during submission or processing.

## Style Guidelines:

- Primary color: Warm orange-yellow (#FFB347) to convey a sense of energy and focus. (HSL: 34, 100%, 65%)
- Background color: Desaturated orange-yellow (#FAF0E6) as a complementary shade for a modern, clean theme. (HSL: 34, 50%, 95%)
- Accent color: Analogous color shifted toward red-orange (#FF8A5B), brighter and more saturated, for interactive elements. (HSL: 15, 100%, 65%)
- Headline font: 'Space Grotesk' (sans-serif) for the main title and other headers for a techy, contemporary feel; body text: 'Inter' (sans-serif)
- Cards organized in a responsive grid layout.
- Loading spinners to indicate ongoing AI processing, coupled with descriptive loading text displayed on the buttons.
- Minimal set of icons for key functions.