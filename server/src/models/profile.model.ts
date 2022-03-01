import mongoose from 'mongoose';
import { object, string, TypeOf } from 'zod';

export interface Profile {
    user: mongoose.Types.ObjectId;
    hexCode: string;
    blurb: string;
    createdAt: Date;
    updatedAt: Date;
}

const profileSchema = new mongoose.Schema<Profile> (
    {
        user: { type: mongoose.Types.ObjectId, required: true, unique: true },
        blurb : { type: String, default: '', unique: false },
        hexCode: { type: String, default: '#0000FF', unique: false }
    },
    {
        timestamps: true
    }
);

export const ProfileModel = mongoose.model<Profile>('Profile', profileSchema);

//validation for profile update requests
export const updateProfileValidator = object({
    body: object({
        user: string({
            required_error: 'User Id is required.'
        }),
        hexCode: string({
            required_error: 'Profile color is required.'
        }).length(7, 'Valid hex codes must be 7 characters long.'),
        blurb: string().max(350, 'Please limit your blurb to 250 characters.')
    })
});

export type UpdateProfileInput = TypeOf<typeof updateProfileValidator>;