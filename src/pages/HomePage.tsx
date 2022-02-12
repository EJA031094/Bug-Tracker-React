import { Box, Card, CardContent, CardHeader } from "@mui/material";

export function HomePage() {
    return(
        <Box component='div' sx={{ maxWidth:'600px', margin:'2rem 0', width: '100%' }}>
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