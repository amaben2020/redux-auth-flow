import User from "@/app/backend/models/auth/User";
import connectDB from "@/utils/connectDB";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";
export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const body = await req.json();

    console.log("Body", body);
    await connectDB();

    const saltRounds = 10;

    const hashedPassword = bcrypt.hash(body.password, saltRounds);
    const user = User.create({
      email: "",
      password: hashedPassword,
      username: "",
      role: "",
    });
    console.log(user);

    return NextResponse.json({
      message: "user create success",
      user,
    });
  } catch (error) {
    console.log("Error", error);
    return NextResponse.json({
      message: "user create fail",
      error,
    });
  }
};
