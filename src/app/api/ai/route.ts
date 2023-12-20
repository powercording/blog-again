import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const ai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const prompt = searchParams.get('prompt') as NonNullable<string>;

  const response = await ai.images.generate({
    model: 'dall-e-2',
    n: 2,
    size: '512x512',
    prompt,
  });

  const imageUrls = response.data.map(image => image.url);

  return NextResponse.json({ imageUrls }, { status: 200 });
}
