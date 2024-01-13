import User from "@/app/backend/models/auth/User";
import connectDB from "@/utils/connectDB";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
interface User {
  _doc: {
    username: string;
    email: string;
    password: string | undefined;
    role: string;
    createdAt: Date;
    updatedAt: Date;
    _id: string;
  };
}
export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const { password, email } = await req.json();

    await connectDB();

    const user: User["_doc"] | any = await User.findOne({ email }).lean();

    const passwordInDB = user?.password as string;
    const hashedPassword = await bcrypt.compare(password, passwordInDB);

    const token = jwt.sign(
      { username: user?.username, email: user?.email, id: user?._id },
      "shhhhh",
    );

    if (hashedPassword) {
      const updatedUser = {
        ...user,
        token,
      };

      delete updatedUser.password;

      updatedUser.token = token;

      console.log("USER DATA", updatedUser);
      return NextResponse.json({
        message: "login success",
        user: updatedUser,
      });
    }
  } catch (error) {
    console.log("Error", error);
    return NextResponse.json(
      {
        message: "user login fail",
        error,
      },
      {
        status: 401,
        statusText: "user login fail",
      },
    );
  }
};
