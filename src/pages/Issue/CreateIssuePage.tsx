import { Box, Card, CardHeader, CardContent } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BTButton } from "../../components/BTButton";
import { BTTextField } from "../../components/BTTextField";
import { DisplayError } from "../../components/DisplayError";
import { CreateIssue } from "../../services/Data";

export function CreateIssuePage({ projectId }: { projectId: string;}) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();


    const submitCreateIssue = async () => {
        const response = await CreateIssue({projectId, name, description});

        if(response.ok) {
            navigate('/project?projectId=' + projectId, { replace: true })
        }
    }

    if(projectId === '') {
        return (
            <DisplayError message='An error occured. No Project Id was provided.'/>
        );
    }

    return(
        <Box component='div' sx={{ maxWidth:'1000px', margin:'2rem 0' }}>
            <Card className='form-body'>
                <CardHeader title={'Create An Issue'} className='default-colors' />

                <CardContent>
                    <Box component='div'>
                        <BTTextField value={ name } label='Issue Name' onChange={ setName }/>
                        <BTTextField value={ description } label='Issue Description' onChange={ setDescription } rows={4}/>
                        
                        <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                            <BTButton text='Submit' onClick={ submitCreateIssue }/>
                        </div>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}