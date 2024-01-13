import User from "@/app/backend/models/auth/User";
import connectDB from "@/utils/connectDB";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const body = await req.json();

    console.log("Body", body);
    await connectDB();

    const saltRounds = 10;

    const hashPassword = bcrypt.hash;
    const user = User.create({
      email: "",
      password: "",
      username: "",
      role: "",
    });
    console.log(user);
  } catch (error) {
    console.log("Error", error);
  }
};
