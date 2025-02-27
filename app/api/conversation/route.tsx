import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';

const config = {
    apiKey: process.env.OPENAI_API_KEY,
};

const openai = new OpenAI(config);

export async function POST(req: Request) {
    try {
        const { userId } = auth();
        const { messages } = await req.json();

        if (!userId) {
            return new NextResponse('Unauthorized', { status: 401 });
        }
        if (!config.apiKey) {
            return new NextResponse('Missing OpenAI key', { status: 500 });
        }
        if (!messages) {
            return new NextResponse('Message are required', { status: 400 });
        }

        // Ask OpenAI for a streaming chat completion given the prompt
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            stream: true,
            messages,
        });
        // Convert the response into a friendly text-stream
        const stream = OpenAIStream(response);
        // Respond with the stream
        return new StreamingTextResponse(stream);
    } catch (error) {
        if (error instanceof OpenAI.APIError) {
            const { name, status, headers, message } = error;
            return NextResponse.json(
                { name, status, headers, message },
                { status }
            );
        }
        throw error;
    }
}
