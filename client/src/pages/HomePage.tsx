import { Box, Card, CardContent, CardHeader } from "@mui/material";

export function HomePage() {
    return(
        <Box component='div' className="page-body">
            <Card className='form-body'>
                <CardHeader title='Bug Tracker' className='default-colors' />

                <CardContent>
                    <Box component='div'>
                        <a href="/project/list/">Browse Public Projects</a>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    )
}