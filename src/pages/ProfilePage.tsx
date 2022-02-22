import { Box, Card, CardHeader, CardContent } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BTLoader } from "../components/BTLoader";
import { ProfileModel } from "../models/ProfileModel";
import { GetUserProfile } from "../services/Data";
import { useUserContext } from "../services/UserProvider";

export function ProfilePage() {
    const [profile, setProfile] = useState<ProfileModel>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const userContext = useUserContext();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfile = async () => {
            const userId = userContext?.user?._id;

            //no active user
            if(userId === undefined) {
                return navigate('/login');
            }

            const response = await GetUserProfile(userId);
        
            if(response.ok) {
                const jsonResponse: ProfileModel = await response.json();
                setProfile(jsonResponse);
            }

            setIsLoading(false);
        }

       fetchProfile();
    }, []);

    if(isLoading) {
        return (
            <Box sx={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                <BTLoader/>
            </Box>
        );
    }

    return(
        <Box component='div' sx={{ maxWidth:'1000px', margin:'2rem 0', width: '100%' }}>
            <Card className='form-body'>
                <CardHeader title={`${ userContext?.user }`} className='default-colors' />

                <CardContent>
                    <Box component='div'>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    )
}