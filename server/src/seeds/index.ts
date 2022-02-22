import db from "../config/connection";
import { User } from "../models";

import { userData } from "./userData";

db.once("open", async () => {
  await User.deleteMany({});

  const users = await User.insertMany(userData);
  console.log("Users seeded!", users);
  process.exit(0);
});
