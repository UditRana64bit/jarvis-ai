import { google } from '@ai-sdk/google'; // Or 'openai'
import { streamText } from 'ai';

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: google('gemini-1.5-flash'), // Requires GOOGLE_GENERATIVE_AI_API_KEY
    system: "You are JARVIS, the highly sophisticated AI assistant created by Udit Rana. You are witty, loyal, and efficient. Keep responses concise.",
    messages,
  });

  return result.toTextStreamResponse();
}