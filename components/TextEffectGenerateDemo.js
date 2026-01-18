'use client';

import { TextGenerateEffect } from './ui/text-generate-effect';

const words = `I have close to 30 years experience in driving innovation in Sales, Retail Strategy, Real Estate, and Turnkey Contracting. With an IIM Kozhikode background, I've built impactful businesses, from retail giants to personalized homes. Explore my journey of growth, challenges, and success.`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
