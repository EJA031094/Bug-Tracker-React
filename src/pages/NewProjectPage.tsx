import { Box, Card, CardContent, CardHeader, Checkbox, TextField } from "@mui/material";
import React from "react";
import { BTTextField } from "../components/BTTextField";
import { BTButton } from "../components/BTButton";

export function NewProjectPage() {
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [isPublic, setIsPublic] = React.useState(false);

    const submitCreateProject = async () => {
        const reqBody = JSON.stringify({ name, description, isPublic });

        const response = await fetch('http://localhost:4000/api/projects/create', {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: reqBody
        });
    }

    const handleCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsPublic(event.target.checked);
    };

    return(
        <Box component='div' sx={{ maxWidth:'600px', margin:'2rem 0' }}>
            <Card className='form-body'>
                <CardHeader title='Create A Project' className='default-colors' />

                <CardContent>
                    <Box component='div'>
                        <BTTextField value={ name } label='Project Name' onChange={ setName }/>
                        <TextField value={ description } onChange={(e) => { setDescription(e.target.value) }} label='Project Description' multiline rows={4} sx={{ width: '100%' }}/>
                        <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                            <label style={{ fontSize: '0.875rem', fontWeight: 'bold'}}>Public Project</label>
                            <Checkbox onChange={ handleCheckChange }/>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                            <BTButton text='Submit' onClick={ submitCreateProject }/>
                        </div>
                    </Box>
                </CardContent>
            </Card>

        </Box>
    )
}