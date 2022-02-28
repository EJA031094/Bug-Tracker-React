export interface CreateUserModel {
    email: string;
    username: string;
    password: string;
    passwordConfirmation: string;
}

export interface UserModel {
    _id: string;
    email: string;
    username: string;
    createdAt: string;
    updatedAt: string;
    role: string;
}