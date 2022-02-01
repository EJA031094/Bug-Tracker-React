import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import UserIcon from '@mui/icons-material/Person';

export function MainAppBar() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar className='default-colors'>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Bug Tracker
            </Typography>

            <Button color="inherit" href="/login" sx={{ marginRight: '1rem' }}>Login</Button>

            <IconButton size="large" edge="start" color="inherit" aria-label="menu">
              <UserIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }