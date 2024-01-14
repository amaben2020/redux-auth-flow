import User from "@/app/backend/models/auth/User";
import connectDB from "@/utils/connectDB";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";
export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const { password, email, username, role } = await req.json();

    console.log(password, email, username, role);

    await connectDB();

    const saltRounds = 10;

    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const user = await User.create({
      email,
      password: hashedPassword,
      username,
      role,
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
