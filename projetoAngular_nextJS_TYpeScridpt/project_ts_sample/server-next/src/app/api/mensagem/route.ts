import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ mensagem: 'Olá do servidor Next.js (TypeScript)!' });
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({ recebido: body.texto ?? null });
}
