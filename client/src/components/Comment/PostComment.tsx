import { Box } from "@mui/material";
import { useState } from "react";
import { CreateComment } from "../../services/Data";
import { BTButton } from "../BTButton";
import { BTTextField } from "../BTTextField";

export function PostComment({ issueId }:{ issueId:string }) {
    const [commentBody, setCommentBody] = useState('');
    const [hidden, setHidden] = useState(true);

    const postComment = async () => {
        const response = await CreateComment({ issueId, body: commentBody});

        if(response.ok) {
            console.log('Posted comment to issue: ' + issueId);
            swapHidden();
        }
    }

    const swapHidden = () => {
        setHidden(!hidden);
    }

    if(hidden) {
        return(
            <Box component='div' sx={{ display: 'flex', justifyContent: 'right', width: '100%' }}>
                <BTButton text='Post Comment' onClick={ swapHidden }/>
            </Box>
        );
    }

    return(
        <Box component='div' sx={{ marginTop: '1rem 0rem' }}>
            <BTTextField label='Enter your comment.' value={commentBody} onChange={setCommentBody} rows={4}/>
            <Box component='div' sx={{ display: 'flex', justifyContent: 'right', width: '100%' }}>
                <BTButton text='Submit' onClick={ postComment }/>
                <BTButton text='Cancel' onClick={ swapHidden }/>
            </Box>
        </Box>
    );
}