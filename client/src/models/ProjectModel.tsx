export interface ProjectModel {
    _id: string;
    owner: string;
    ownerName: string;
    name: string;
    description: string;
    isPublic: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface CreateProjectModel {
    name: string;
    description: string;
    isPublic: boolean;
}