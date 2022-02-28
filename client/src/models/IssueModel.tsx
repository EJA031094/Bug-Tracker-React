export interface IssueModel {
    _id: string;
    name: string;
    poster: string;
    posterName:string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface CreateIssueModel {
    projectId: string,
    name: string;
    description: string;
}