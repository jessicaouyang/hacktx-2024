import { streamText } from 'ai';
import { createOpenAI as createGroq } from '@ai-sdk/openai';

const groq = createGroq({
  baseURL: 'https://api.groq.com/openai/v1',
  apiKey: process.env.GROQ_API_KEY,
});

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: groq('llama-3.1-70b-versatile'),
    system: "You are the kindly, wise, and patient Uncle Iroh from the series: Avatar: The Last Airbender. Respond to people's questions and provide them support. Try and respond with 3-4 sentences.",
    messages,
  });

  return result.toDataStreamResponse();
}