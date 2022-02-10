export interface Issue {
    poster: string;
    body: string;
    isReply: boolean;
    replyId?: string;
    createdAt: Date;
    updatedAt: Date;
}