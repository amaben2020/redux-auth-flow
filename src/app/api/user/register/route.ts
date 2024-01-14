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

    const userInDB = await User.findOne({ email });
    console.log("userInDB", userInDB);

    //@ts-ignore
    if (userInDB?.username === username || userInDB?.email === email) {
      return NextResponse.json(
        {
          message: "user already exists",
        },
        {
          status: 401,
          statusText: "Unauthorized",
        },
      );
    }

    const user = await User.create({
      email,
      password: hashedPassword,
      username,
      role,
    });

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
