import { NextResponse } from 'next/server';
import { z } from 'zod';

const users: { email: string; password: string }[] = [];

const RegisterSchema = z.object({
  email: z.string().email({ message: 'Email is required' }),
  password: z.string().min(6, { message: 'Minimum 6 characters required' }),
});

export async function POST(request: Request) {
  const body = await request.json();

  const result = RegisterSchema.safeParse(body);
  console.log(result);

  if (!result.success) {
    return NextResponse.json(result.error.format(), { status: 400 });
  }

  const { email, password } = result.data;

  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return NextResponse.json({ message: 'Email already in use' }, { status: 409 });
  }

  users.push({ email, password });
  return NextResponse.json({ message: 'User registered successfully' }, { status: 201 });
}
