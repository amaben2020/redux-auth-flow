import mongoose, { Schema } from "mongoose";

const User = new Schema(
  {
    username: String,
    email: String,
    password: String,
    role: {
      type: String,
      enum: ["student", "teacher", "school"],
    },
  },

  {
    timestamps: true,
  },
);

export default mongoose.models.User || mongoose.model("User", User);
