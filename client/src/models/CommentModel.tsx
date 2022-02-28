export interface CommentModel {
    _id: string;
    poster: string;
    posterName: string;
    body: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface CreateCommentModel {
    issueId: string;
    body: string;
}