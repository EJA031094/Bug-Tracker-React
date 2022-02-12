export interface Project {
    _id: string;
    owner: string;
    ownerName: string;
    name: string;
    description: string;
    isPublic: boolean;
    createdAt: Date;
    updatedAt: Date;
}