import { Box, Card, CardContent } from '@mui/material';
import Loading from 'react-loading';

export function BTLoader() {
    return(
        <Box component='div' sx={{ maxWidth:'400px', margin:'2rem 0', width: '100%' }}>
            <Card className='form-body'>
                <CardContent>
                    <Box component='div' sx={{display: 'flex', justifyContent: 'center', marginBottom: '2.25rem'}}>
                        <Loading type='spin' color='#3385ff'/>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}