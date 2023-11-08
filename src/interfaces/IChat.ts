export interface IConversation {
    alias: string;
    aliasAvatar: string;
    lastMessage: string;
    recipients: string[];
    unreadMessages: number;
    _id: string;
}