import NextAuth from "next-auth";
import { User as DBUser } from "@/types/User";

declare module "next-auth" {
  interface User extends DBUser {
    id: number;
    isAdmin?: boolean;
    isStaff?: { status: boolean };
  }

  interface Session {
    user: User;
  }
}
