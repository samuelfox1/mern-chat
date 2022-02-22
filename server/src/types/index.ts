export interface UserI {
  _id?: string;
  username: string;
  chats?: [string];
}

export interface MessageI {
  userId: string;
  content: string;
  date: string;
}

export interface ChatI {
  _id?: string;
  chatName: string;
  users?: [string];
  messages?: [MessageI];
}
