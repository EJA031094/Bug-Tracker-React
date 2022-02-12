import { Box, Card, CardContent, CardHeader } from "@mui/material";
import { ProjectDetails } from "../../components/Project/ProjectDetails";

export function ProjectPage({ projectId }: { projectId: string;}) {
    return(
        <Box component='div' sx={{ maxWidth:'900px', margin:'2rem 0', width: '100%' }}>
            <Card className='form-body'>
                <CardHeader title='Project Details' className='default-colors' />

                <CardContent sx={{display: 'flex', justifyContent: 'center'}}>
                    <ProjectDetails projectId={ projectId }/>
                </CardContent>
            </Card>

        </Box>
    );
}