import { Card, CardContent, CardHeader, Grid, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Project } from "../../models/ProjectModel";
import { GetProjectById } from "../../services/Data";
import { BTLoader } from "../BTLoader";
import { DisplayError } from "../DisplayError";

export function ProjectDetails({ projectId }:{ projectId: string }) {
    const [project, setProject] = useState<Project>();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchProject = async () => {
            const response = await GetProjectById(projectId);
        
            if(response.ok) {
                const jsonResponse: Project = await response.json();
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
            <DisplayError message= 'Unable to find project that matches that ID.'/>
        );
    }

    return (
        <Paper elevation={ 3 } sx={{padding: '0', margin: '0', width: '100%' }}> 
            <Card sx={{borderRadius: '0'}}>
                <CardHeader title={<Typography variant='h6'>{ project.name }</Typography>} disableTypography={ true } className='default-colors' sx={{ padding: '0.50rem' }}/>
                
                <CardContent>
                    <Grid container>
                        <Grid item xs={12} sm={4} sx={{textAlign: 'left'}}>Description:</Grid>
                        <Grid item xs={12} sm={8} sx={{textAlign: 'left'}}>{ project.description }</Grid>
                        
                        <Grid item xs={12} sm={4} sx={{textAlign: 'left'}}>Creator:</Grid>
                        <Grid item xs={12} sm={8} sx={{textAlign: 'left'}}>{ project.owner }</Grid>
                        
                        <Grid item xs={12} sm={4} sx={{textAlign: 'left'}}>Created On:</Grid>
                        <Grid item xs={12} sm={8} sx={{textAlign: 'left'}}>{ project.createdAt }</Grid>
                        
                        <Grid item xs={12} sm={4} sx={{textAlign: 'left'}}>Updated On:</Grid>
                        <Grid item xs={12} sm={8} sx={{textAlign: 'left'}}>{ project.updatedAt }</Grid>
                    </Grid>
                </CardContent>
            </Card>                        
        </Paper>
    );
}