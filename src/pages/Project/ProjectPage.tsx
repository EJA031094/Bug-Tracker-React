import { Box, Card, CardContent, CardHeader } from "@mui/material";
import { DisplayError } from "../../components/DisplayError";
import { IssueTable } from "../../components/Issue/IssueTable";
import { ProjectDetails } from "../../components/Project/ProjectDetails";

export function ProjectPage({ projectId }: { projectId: string;}) {

    if(projectId === '') {
        return (
            <DisplayError message= 'An error occured. No Project Id was provided.'/>
        );
    }
        
    return(
        <Box component='div' sx={{ maxWidth:'1000px', margin:'2rem 0', width: '100%' }}>
            <Card className='form-body'>
                <CardHeader title='Project Details' className='default-colors' />

                <CardContent sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <ProjectDetails projectId={ projectId }/>
                    <IssueTable projectId={ projectId } />
                </CardContent>
            </Card>
        </Box>
    );
}