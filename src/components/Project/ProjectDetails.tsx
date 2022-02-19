import { Box, Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { ProjectModel } from "../../models/ProjectModel";
import { GetProjectById } from "../../services/Data";
import { BTLoader } from "../BTLoader";
import { DisplayError } from "../DisplayError";
import Moment from 'moment';

export function ProjectDetails({ projectId }:{ projectId: string }) {
    const [project, setProject] = useState<ProjectModel>();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchProject = async () => {
            const response = await GetProjectById(projectId);
        
            if(response.ok) {
                const jsonResponse: ProjectModel = await response.json();
                setProject(jsonResponse);
            }

            setIsLoading(false);
        }

       fetchProject();
    }, [projectId]);

    if(isLoading) {
        return (
            <BTLoader/>
        );
    }

    if(project === undefined) {
        return (
            <Box sx={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                <DisplayError message= 'Unable to find Project that matches that ID.'/>
            </Box>
        );
    }

    return (
        <Card sx={{borderRadius: '0'}}>
            <CardHeader title={<Typography variant='h6'>{ project.name }</Typography>} disableTypography={ true } className='default-colors' sx={{ padding: '0.50rem' }}/>
            
            <CardContent>
                <Grid container>
                    <Grid item xs={12} sm={3} sx={{textAlign: 'left', fontWeight: 'bold'}}>Creator:</Grid>
                    <Grid item xs={12} sm={9} sx={{textAlign: 'left'}}>{ project.ownerName }</Grid>
                    
                    <Grid item xs={12} sm={3} sx={{textAlign: 'left', fontWeight: 'bold'}}>Created On:</Grid>
                    <Grid item xs={12} sm={9} sx={{textAlign: 'left'}}>{ Moment(project.createdAt).format('ll') }</Grid>
                    
                    <Grid item xs={12} sm={3} sx={{textAlign: 'left', fontWeight: 'bold'}}>Updated On:</Grid>
                    <Grid item xs={12} sm={9} sx={{textAlign: 'left'}}>{ Moment(project.updatedAt).format('ll') }</Grid>

                    <Grid sx={{margin: '1rem 0rem'}} container>
                        <Grid item xs={12} sm={3} sx={{textAlign: 'left', fontWeight: 'bold'}}>Description:</Grid>
                        <Grid item xs={12} sm={9} sx={{textAlign: 'left'}}>{ project.description }</Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card> 
    );
}