import { Box, Card, CardHeader, CardContent } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BTLoader } from "../components/BTLoader";
import { ProfileModel } from "../models/ProfileModel";
import { GetActiveProfile } from "../services/Data";

export function ProfilePage() {
    const [profile, setProfile] = useState<ProfileModel>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchIssue = async () => {
            const response = await GetActiveProfile();
        
            if(response.ok) {
                const jsonResponse: ProfileModel = await response.json();
                setProfile(jsonResponse);
            }

            setIsLoading(false);
        }

       fetchIssue();
    }, []);

    if(isLoading) {
        return (
            <Box sx={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                <BTLoader/>
            </Box>
        );
    }

    if(profile === undefined) {
        navigate('/login', { replace: true });
    }

    return(
        <Box component='div' sx={{ maxWidth:'1000px', margin:'2rem 0', width: '100%' }}>
            <Card className='form-body'>
                <CardHeader title='Bug Tracker' className='default-colors' />

                <CardContent>
                    <Box component='div'>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    )
}