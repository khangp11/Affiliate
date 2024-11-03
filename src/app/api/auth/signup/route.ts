import bcrypt from 'bcrypt';
import UserModel from '@/models/UserModel';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  console.log('POST /api/auth/signup');
  try {
    const { name, email, password, passwordConfirm } = await req.json();
    if (password !== passwordConfirm) {
      return NextResponse.json({ success: false, message: 'Passwords do not match.' }, { status: 400 });
    }

    const existingUser = await UserModel.findByEmail(email);
    if (existingUser) {
      return NextResponse.json({ success: false, message: 'Email already exists.' }, { status: 409 });
    }

    const salt = await bcrypt.genSalt(6);
    const hash = await bcrypt.hash(password, salt);

    const userData = { name, email, hash, salt, isAdmin: false };
    await UserModel.create(userData);

    return NextResponse.json({ success: true, message: 'User registered successfully!' }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, message: 'Internal server error.' }, { status: 500 });
  }
}
