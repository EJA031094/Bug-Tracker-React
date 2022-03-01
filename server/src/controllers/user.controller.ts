import { Request, Response} from 'express';
import { CreateUserInput } from '../models/user.model';
import { createUser, getUserProfile, updateUserProfile } from '../services/user.service';
import { logger } from '../utilities/logger';
import mongoose from 'mongoose';
import { UpdateProfileInput } from '../models/profile.model';

export async function createUserHandler(req: Request<{}, {}, CreateUserInput['body']>, res: Response) {
    try {
        const user = await createUser(req.body);

        return res.status(200).send(user);
    } catch(err: any) {
        logger.error(err);

        return res.status(400).send(err);
    }
}

export async function logoutUserHandler(req: Request, res: Response) {
    try {
        res.clearCookie('access-token-header-payload');
        res.clearCookie('access-token-signature');
        res.clearCookie('refresh-token');

        return res.status(200).send();
    } catch(err: any) {
        logger.error(err);

        return res.status(500).send(err);
    }
}

export async function getUserProfileHandler(req: Request, res: Response) {
    try {
        const userId = new mongoose.Types.ObjectId(req.query.userId?.toString());
        const userProfile = await getUserProfile({ user:  userId});

        return res.status(200).send(userProfile);
    } catch(err: any) {
        logger.error(err);

        return res.status(500).send(err);
    }
}

export async function updateUserProfileHandler(req: Request<{}, {}, UpdateProfileInput['body']>, res: Response) {
    try {
        const userId = new mongoose.Types.ObjectId(req.query.userId?.toString());
        
        const profile = await updateUserProfile(req);

        return res.status(200).send();
    } catch(err: any) {
        logger.error(err);

        return res.status(500).send(err);
    }
}