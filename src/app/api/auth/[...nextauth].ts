import bcrypt from "bcrypt";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/models/UserModel";
import Email from "next-auth/providers/email";

const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { username, password } = credentials as { username: string; password: string };
        console.log("credentials", credentials);
        const userData: any = await UserModel.findByEmail(username);
        console.log("userData", userData);

        if (userData) {
          const validPassword = await bcrypt.compare(password, userData.hash);
          if (validPassword) {
            return userData;
          }
          return null;
        }
        return null;
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 3 * 60 * 60, // 3 giờ
  },
  jwt: {
    secret: process.env.AUTH_SECRET,
    maxAge: 3 * 60 * 60, // 3 giờ
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = {
          id: user.id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin || false,
          isStaff: user.isStaff || { status: false },
        };
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token.user as any;
      return session;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
  },
  pages: {
    signIn: "/signin",
  },
  theme: {
    colorScheme: "light",
  },
};

export default NextAuth(options);
