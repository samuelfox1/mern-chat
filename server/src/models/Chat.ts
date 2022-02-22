import { Schema, model } from "mongoose";

const chatSchema = new Schema({
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  ],
  content: {
    type: String,
  },
});

export default model("Chat", chatSchema);
