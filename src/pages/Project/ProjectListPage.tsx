import { Box, Card, CardContent, CardHeader } from "@mui/material";
import { ProjectTable } from "../../components/Project/ProjectTable";

export function ProjectListPage() {
    return (
        <Box component='div' sx={{ maxWidth:'1000px', margin:'2rem 0', width: '100%' }}>
            <Card className='form-body'>
                <CardHeader title='Public Projects' className='default-colors' />

                <CardContent>
                    <Box component='div'>
                        <ProjectTable />
                        <p style={{fontWeight: 'bold'}}>Don't see your project? Ensure it's public.</p>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}