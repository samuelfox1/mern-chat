import db from "../config/connection";
import { Chat, User } from "../models";
import { UserI, MessageI, ChatI } from "../types";

import { chatData, userData } from "./data";

const seedChats = async (seededUsers: UserI[], chatSeedFile: ChatI[]) => {
  const chatSeeds: ChatI[] = chatSeedFile.map(({ chatName }) => {
    const userIds: string[] = [];
    const messages: MessageI[] = [];

    for (let i = 0; i < 5; i++) {
      const date = new Date().toISOString();
      const user: UserI =
        seededUsers[Math.floor(Math.random() * seededUsers.length)];

      if (!userIds.includes(user._id)) userIds.push(user._id);

      messages.push({
        userId: user._id,
        content: `hello from ${user.username} on ${date}`,
        date,
      } as MessageI);
    }

    return {
      chatName,
      users: userIds,
      messages,
    } as ChatI;
  });

  return await Chat.insertMany(chatSeeds);
};

const seedUsers = async (userSeedFile: UserI[]) => {
  await User.deleteMany({});
  return await User.insertMany(userSeedFile);
};

db.once("open", async () => {
  const users = await seedUsers(userData);
  console.log("users seeded:", JSON.stringify(users, null, 2));

  const chats = await seedChats(users, chatData);
  console.log("chats seeded:", JSON.stringify(chats, null, 2));

  console.log("Seeds complete!");
  process.exit(0);
});
