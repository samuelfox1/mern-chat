import { Schema, model } from "mongoose";
import { ChatI } from "../types";

const messageSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
      default: new Date().toISOString(),
    },
  },
  {
    _id: false,
  }
);

const chatSchema = new Schema({
  chatName: {
    type: String,
  },
  messages: [messageSchema],
});

export default model<ChatI>("Chat", chatSchema);
