import { Box, Card, CardContent, CardHeader } from "@mui/material";
import { useEffect, useState } from "react";
import { BTButton } from "../../components/BTButton";
import { BTLoader } from "../../components/BTLoader";
import { DisplayError } from "../../components/DisplayError";
import { IssueTable } from "../../components/Issue/IssueTable";
import { ProjectDetails } from "../../components/Project/ProjectDetails";
import { ProjectModel } from "../../models/ProjectModel";
import { GetProjectById } from "../../services/Data";
import { useNavigate } from "react-router-dom";

export function ProjectPage({ projectId }: { projectId: string;}) {
    const [project, setProject] = useState<ProjectModel>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const navigate = useNavigate();

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
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%'}}>
                <DisplayError message= 'Unable to find Project that matches that ID.'/>
            </Box>
        );
    }
        
    return(
        <Box component='div' sx={{ margin:'2rem 0', maxWidth:'1000px', width: '100%' }}>
            <Card className='form-body'>
                <CardHeader title='Project Details' className='default-colors' />

                <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <ProjectDetails project={ project }/>
                    <IssueTable projectId={ projectId }/>
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <BTButton 
                            text='Post Issue' 
                            onClick={ () => { navigate('/issue/create?projectId=' + projectId) }} 
                            sxProp={{ maxWidth: '125px' }}
                        />
                    </div>
                </CardContent>
            </Card>
        </Box>
    );
}