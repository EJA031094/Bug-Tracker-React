import bcrypt from 'bcrypt';
import config from 'config';
import { omit } from 'lodash';
import { FilterQuery } from 'mongoose';
import { UserModel, UserInput, User } from '../models/user.model';

export async function createUser(inputUser: Omit<UserInput, 'passwordConfirmation'>) {
    try {
        inputUser.password = await hashPassword(inputUser.password);

        return await UserModel.create(inputUser);
    } catch(err: any) {
        throw new Error(err);
    }
}

export async function getUser(query: FilterQuery<User>) {
    try {
        return UserModel.findOne(query);
    } catch(err: any) {
        throw new Error(err);
    }
}

export async function validateUserPassword({ username, password }: {username: string; password: string;}) {
    try {
        const user = await UserModel.findOne({ username });
      
        if (!user) {
            return false;
        }
      
        const isValid = await bcrypt.compare(password, user.password).catch(() => false);
      
        if (!isValid) {
            return false;
        }
    
        return omit(user.toJSON(), 'password');
    } catch(err: any) {
        throw new Error(err);
    }
}

async function hashPassword(password: string): Promise<string> {
    try {
        const salt = await bcrypt.genSalt(config.get<number>('saltWorkFactor'));
        const hash = await bcrypt.hashSync(password, salt);
    
        return hash;
    } catch(err: any) {
        throw new Error(err);
    }
}