import { Box, Card, CardContent, CardHeader, Checkbox } from "@mui/material";
import React from "react";
import { BTTextField } from "../../components/BTTextField";
import { BTButton } from "../../components/BTButton";
import { CreateProject } from "../../services/Data";
import { useNavigate } from "react-router-dom";

export function CreateProjectPage() {
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [isPublic, setIsPublic] = React.useState(false);
    const navigate = useNavigate();

    const submitCreateProject = async () => {
        const response = await CreateProject({name, description, isPublic});

        if(response.ok) {
            navigate('/', { replace: true })
        }
    }

    const handleCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsPublic(event.target.checked);
    };

    return(
        <Box component='div' className="page-body">
            <Card className='form-body'>
                <CardHeader title='Create A Project' className='default-colors' />

                <CardContent>
                    <Box component='div'>
                        <BTTextField value={ name } label='Project Name' onChange={ setName }/>
                        <BTTextField value={ description } label='Project Description' onChange={ setDescription } rows={4}/>

                        <div className="spaced-flex">
                            <label style={{ fontSize: '0.875rem', fontWeight: 'bold'}}>Public Project</label>
                            <Checkbox onChange={ handleCheckChange }/>
                        </div>
                        
                        <div className="right-flex">
                            <BTButton text='Submit' onClick={ submitCreateProject }/>
                        </div>
                    </Box>
                </CardContent>
            </Card>

        </Box>
    )
}