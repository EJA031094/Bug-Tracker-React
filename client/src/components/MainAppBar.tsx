import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import UserIcon from '@mui/icons-material/Person';
import { useUserContext } from '../services/UserProvider';
import { useNavigate } from 'react-router-dom';

export function MainAppBar() {
    const userContext = useUserContext();
    const navigate = useNavigate();

    const user = userContext?.user;

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static'>
                <Toolbar className='default-colors'>
                    <Typography variant='h5' component='div' sx={{ flexGrow: 1 }}>
                        <a className='hover-color' href='/'>Bug Tracker</a>
                    </Typography>

                    <Button 
                        className='hover-color'
                        color='inherit'
                        onClick={() => { user === undefined ? navigate('/login') : userContext?.logoutUser() }} 
                        sx={{ marginRight: '1rem' }}>

                        { user === undefined ? "Login" : "Logout" }
                    </Button>

                    <IconButton href='/profile/' size='large' edge='start' color='inherit' aria-label='menu'>
                        <UserIcon className='hover-color' />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}