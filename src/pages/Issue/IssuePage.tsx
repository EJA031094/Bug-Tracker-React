import { Box, Card, CardHeader, CardContent } from "@mui/material";
import { DisplayError } from "../../components/DisplayError";
import { IssueDetails } from "../../components/Issue/IssueDetails";

export function IssuePage({ issueId }:{ issueId: string }) {
    
    if(issueId === '') {
        return (
            <DisplayError message= 'An error occured. No Issue Id was provided.'/>
        );
    }

    return (
        <Box component='div' sx={{ margin:'2rem 0', maxWidth:'1000px', width: '100%' }}>
            <Card className='form-body'>
                <CardHeader title='Issue Details' className='default-colors' />

                <CardContent sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <IssueDetails issueId={ issueId }/>
                </CardContent>
            </Card>
        </Box>
    );
}