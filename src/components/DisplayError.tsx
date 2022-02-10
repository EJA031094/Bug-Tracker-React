import { Box, Card, CardContent, CardHeader } from "@mui/material";

interface DisplayErrorProps{
    message: string;
}

export function DisplayError({ message }: DisplayErrorProps) {
    return (
        <Box component='div' sx={{ maxWidth:'400px', margin:'2rem 0', width: '100%' }}>
            <Card className='form-body'>
                <CardHeader title='Error' className='default-colors' />

                <CardContent>
                    <Box component='div'>
                        { message }
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}