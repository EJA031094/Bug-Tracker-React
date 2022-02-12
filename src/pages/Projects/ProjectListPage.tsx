import { Box, Card, CardContent, CardHeader } from "@mui/material";
import { ProjectTable } from "../../components/Project/ProjectTable";

export function ProjectListPage() {
    return (
        <Box component='div' sx={{ maxWidth:'1000px', margin:'2rem 0', width: '100%' }}>
            <Card className='form-body'>
                <CardHeader title='Bug Tracker' className='default-colors' />

                <CardContent>
                    <Box component='div'>
                        <ProjectTable />
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}