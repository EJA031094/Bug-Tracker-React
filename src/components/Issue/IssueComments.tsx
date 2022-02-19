import { Card, CardContent, CardHeader, Typography, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { CommentModel } from "../../models/CommentModel";
import { GetIssueComments } from "../../services/Data";
import { BTLoader } from "../BTLoader";
import { BTComment } from "../Comment/BTComment";
import Moment from 'moment';

export function IssueComments({ issueId }:{ issueId:string }) {
    Moment.locale('en');
    const [commentList, setCommentList] = useState(new Array<CommentModel>());
    const [isLoading, setIsLoading] = useState<boolean>(true);
    
    //fetches comments for input issueId
    useEffect(() => {
        const getIssueComments = async () => {
            const response = await GetIssueComments(issueId);
    
            if(response.ok) {
                const jsonResponse: Array<CommentModel> = await response.json();
    
                setCommentList(jsonResponse);
                setIsLoading(false);
            }
        }

        getIssueComments();
    }, [issueId]);

    if(isLoading) {
        return (
            <Box sx={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                <BTLoader/>
            </Box>
        );
    }

    return(
        <Card sx={{margin: '1rem 0rem', borderRadius: '0'}}>
            <CardHeader title={<Typography variant='h6'>{ 'Issue Comments' }</Typography>} disableTypography={ true } className='default-colors' sx={{ padding: '0.50rem' }} />
            <CardContent>
                {commentList.map((comment: CommentModel) => (
                    <BTComment key={ comment._id } comment={comment}/>
                ))}
            </CardContent>
        </Card>
    );
}