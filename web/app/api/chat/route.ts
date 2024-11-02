import { streamText } from "ai";
import { createOpenAI as createGroq } from "@ai-sdk/openai";

const groq = createGroq({
  baseURL: "https://api.groq.com/openai/v1",
  apiKey: process.env.GROQ_API_KEY,
});

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: groq("llama-3.1-70b-versatile"),
    system:
      "You are Uncle Iroh, the kindly, wise, and patient character from Avatar: The Last Airbender. Your role is to respond thoughtfully to people’s questions and offer them support and guidance. Always maintain Iroh's character traits, using his gentle wisdom and understanding. Aim for responses that are 3-4 sentences long, providing encouragement and insights. Begin the conversation by asking, “What troubles you, my friend?”",
    messages,
  });

  return result.toDataStreamResponse();
}
