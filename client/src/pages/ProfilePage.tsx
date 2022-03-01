import { Box, Card, CardHeader, CardContent } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BTLoader } from "../components/BTLoader";
import { DisplayError } from "../components/DisplayError";
import { ProfileModel } from "../models/ProfileModel";
import { UserModel } from "../models/UserModel";
import { GetUser, GetUserProfile } from "../services/Data";

export function ProfilePage({ userId }: { userId: string }) {
    const [profile, setProfile] = useState<ProfileModel>();
    const [user, setUser] = useState<UserModel>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const navigate = useNavigate();

    useEffect(() => {
        //no active user
        if(userId === '') {
            return navigate('/login');
        }

        const fetchUser = async () => {
            const response = await GetUser(userId);
        
            if(response.ok) {
                const jsonResponse: UserModel = await response.json();
                setUser(jsonResponse);
            }
        }

        const fetchProfile = async () => {
            const response = await GetUserProfile(userId);
        
            if(response.ok) {
                const jsonResponse: ProfileModel = await response.json();
                setProfile(jsonResponse);
            }
        }

        const startUp = async () => {
            await fetchUser()
            await fetchProfile();
            setIsLoading(false);
        }

        startUp();
    }, [ navigate, userId ]);

    if(isLoading) {
        return (
            <Box className="page-body">
                <BTLoader/>
            </Box>
        );
    }

    if(profile === undefined || user === undefined) {
        return (
            <Box className="page-body">
                <DisplayError message= 'Unable to find a user with that ID.'/>
            </Box>
        );
    }

    return(
        <Box component='div' className="page-body">
            <Card className='form-body'>
                <CardHeader title={`${ user?.username }`} className='default-colors' />

                <CardContent>
                    <Box component='div'>
                        { profile?.hexColor }
                        { profile?.blurb }
                    </Box>
                </CardContent>
            </Card>
        </Box>
    )
}