import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import UserIcon from '@mui/icons-material/Person';

export function MainAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar className='default-colors'>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        <a className='hover-color' href='/'>Bug Tracker</a>
                    </Typography>

                    <Button className='hover-color' color="inherit" href="/login" sx={{ marginRight: '1rem' }}>Login</Button>

                    <IconButton size="large" edge="start" color="inherit" aria-label="menu">
                        <UserIcon className='hover-color' />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}