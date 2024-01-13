import mongoose, { Schema } from "mongoose";

const User = new Schema(
  {
    username: String,
    email: String,
    password: String,
    role: {
      type: String,
      enum: {
        values: ["student", "teacher", "school"],
        message: "Role is required",
      },
      trim: true,
    },
  },

  {
    timestamps: true,
  },
);

export default mongoose.models.User || mongoose.model("User", User);
