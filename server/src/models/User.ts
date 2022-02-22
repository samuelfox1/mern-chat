import { Schema, model } from "mongoose";
import { UserI } from "../types";

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  chats: [
    {
      type: Schema.Types.ObjectId,
      ref: "chat",
    },
  ],
});

export default model<UserI>("User", userSchema);
