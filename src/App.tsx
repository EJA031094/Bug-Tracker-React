import './App.css';
import { Button, Card, CardContent, CardActions, CardHeader, TextField, Typography } from '@mui/material/';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
      <Card className='login-form'>
        <CardHeader title='Bug Tracker Login' sx={{ backgroundColor:'#3385ff', color: '#ffffff'}}>

        </CardHeader>
        <CardContent>
          <TextField id='usernameField' label='Username' variant='outlined' sx={{ width: '100%' , marginBottom: '0.75rem'}}/>
          <TextField id='passwordField' label='Password' variant='outlined' sx={{ width: '100%' }}/>
        </CardContent>
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button variant='contained' size='medium' sx={{margin: '0.75rem 0.75rem'}}>Login</Button>
        </CardActions>
      </Card>
      </header>
    </div>
  );
}

export default App;
