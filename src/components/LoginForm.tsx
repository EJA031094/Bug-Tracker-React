import { Button, Card, CardContent, CardActions, CardHeader, TextField } from '@mui/material/';

export function LoginForm() {
    return (
      <Card className='login-form'>
        <CardHeader title='Bug Tracker Login' sx={{ backgroundColor:'#3385ff', color: '#ffffff', textAlign: 'center'}}>
  
        </CardHeader>
        <CardContent>
          <TextField id='usernameField' label='Username' variant='outlined' sx={{ width: '100%' , marginBottom: '0.75rem'}}/>
          <TextField id='passwordField' label='Password' variant='outlined' sx={{ width: '100%' }}/>
        </CardContent>
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button variant='contained' size='medium' onClick={ submitLogin } sx={{ margin: '0.75rem 0.75rem' }}> Login </Button>
        </CardActions>
      </Card>
    );
  }

function submitLogin() {

}