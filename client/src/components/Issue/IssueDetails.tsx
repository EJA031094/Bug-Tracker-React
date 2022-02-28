import { Box, Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { IssueModel } from "../../models/IssueModel";
import { GetIssueById } from "../../services/Data";
import { BTLoader } from "../BTLoader";
import { DisplayError } from "../DisplayError";
import Moment from 'moment';
import { IssueComments } from "./IssueComments";
import { PostComment } from "../Comment/PostComment";

export function IssueDetails({ issueId }:{ issueId: string }) {
    const [issue, setIssue] = useState<IssueModel>();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchIssue = async () => {
            const response = await GetIssueById(issueId);
        
            if(response.ok) {
                const jsonResponse: IssueModel = await response.json();
                setIssue(jsonResponse);
            }

            setIsLoading(false);
        }

       fetchIssue();
    }, [issueId]);

    if(isLoading) {
        return (
            <Box sx={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                <BTLoader/>
            </Box>
        );
    }

    if(issue === undefined) {
        return (
            <Box sx={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                <DisplayError message= 'Unable to find Issue that matches that ID.'/>
            </Box>
        );
    }

    return(
        <Card sx={{borderRadius: '0'}}>
            <CardHeader title={<Typography variant='h6'>{ issue.name }</Typography>} disableTypography={ true } className='default-colors' sx={{ padding: '0.50rem' }}/>
            
            <CardContent>
                <Grid container>
                    <Grid item xs={12} sm={3} sx={{textAlign: 'left', fontWeight: 'bold'}}>Creator:</Grid>
                    <Grid item xs={12} sm={9} sx={{textAlign: 'left'}}>{ issue.posterName }</Grid>
                    
                    <Grid item xs={12} sm={3} sx={{textAlign: 'left', fontWeight: 'bold'}}>Created On:</Grid>
                    <Grid item xs={12} sm={9} sx={{textAlign: 'left'}}>{ Moment(issue.createdAt).format('ll') }</Grid>
                    
                    <Grid item xs={12} sm={3} sx={{textAlign: 'left', fontWeight: 'bold'}}>Updated On:</Grid>
                    <Grid item xs={12} sm={9} sx={{textAlign: 'left'}}>{ Moment(issue.updatedAt).format('ll') }</Grid>

                    <Grid sx={{margin: '1rem 0rem'}} container>
                        <Grid item xs={12} sm={3} sx={{textAlign: 'left', fontWeight: 'bold'}}>Description:</Grid>
                        <Grid item xs={12} sm={9} sx={{textAlign: 'left'}}>{ issue.description }</Grid>
                    </Grid>
                </Grid>
            </CardContent>
                            
            <IssueComments issueId={ issueId }/>
            <PostComment issueId={ issueId }/>
        </Card> 
    );
}