import { Request, Response} from 'express';
import { CreateUserInput } from '../models/user.model';
import { createUser, getUser, getUserProfile, updateUserProfile } from '../services/user.service';
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

export async function getUserProfileHandler(req: Request<{}, {}, {}, { userId: string }>, res: Response) {
    try {
        const userIdObj = new mongoose.Types.ObjectId(req.query.userId);
        const userProfile = await getUserProfile({ user:  userIdObj });

        if(userProfile === null) {
            return res.status(404).send('User profile not found.');
        }

        return res.status(200).send(userProfile);
    } catch(err: any) {
        logger.error(err);

        return res.status(500).send(err);
    }
}

export async function getUserHandler(req: Request<{}, {}, {}, { userId: string }>, res: Response) {
    try {
        const userIdObj = new mongoose.Types.ObjectId(req.query.userId);
        const user = await getUser({ user:  userIdObj });

        if(user === null) {
            return res.status(404).send('User not found.');
        }

        return res.status(200).send(user);
    } catch(err: any) {
        logger.error(err);

        return res.status(500).send(err);
    }
}

export async function updateUserProfileHandler(req: Request<{}, {}, UpdateProfileInput['body']>, res: Response) {
    try {
        const profile = await updateUserProfile(req);

        return res.status(200).send(profile);
    } catch(err: any) {
        logger.error(err);

        return res.status(500).send(err);
    }
}