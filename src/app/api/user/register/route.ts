import User from "@/app/backend/models/auth/User";
import { zodMessageFormatter } from "@/redux/features/auth/services/helpers/schema";
import connectDB from "@/utils/connectDB";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";
import { registerSchema } from "../../schema/register";
export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    // const { password, email, username, role } = await req.json();

    const { password, email, username, role } = registerSchema.parse(
      await req.json(),
    );

    console.log(password, email, username, role);

    await connectDB();

    const saltRounds = 10;

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const userInDB = await User.findOne({ email });
    console.log("userInDB", userInDB);

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
  } catch (error: any) {
    if (error?.issues.length > 0) {
      return NextResponse.json(
        {
          message: zodMessageFormatter(error),
        },
        {
          status: 404,
          statusText: zodMessageFormatter(error),
        },
      );
    }

    return NextResponse.json(
      {
        message: error,
        error,
      },
      {
        status: 404,
        statusText: error,
      },
    );
  }
};
