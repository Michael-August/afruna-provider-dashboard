import { IUserBio } from "./IUser";

export interface IConversation {
    alias: string;
    aliasAvatar: string;
    lastMessage: string;
    recipients: string[];
    unreadMessages: number;
    _id: string;
}

export interface IMessage {
    conversation: string;
    to: IUserBio
    from: IUserBio
    message: string;
    attachment: [];
    seen: string[];
    _id: string;
    createdAt: string;
    updatedAt: string;
  }