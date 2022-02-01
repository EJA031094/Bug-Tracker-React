import React from 'react';
import { Box, Card, CardActions, CardContent, CardHeader } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { BTTextField } from '../components/BTTextField';
import { ProcessLogin } from './LoginPage';
import { BTButton } from '../components/BTButton';

export function SignUpPage() {
    const navigate = useNavigate();
    const [email, setEmail] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [passwordConfirmation, setPasswordConfirm] = React.useState('');

    const submitSignUp = async () => {
        const reqBody = JSON.stringify({ email, username, password, passwordConfirmation });

        const response = await fetch('http://localhost:4000/api/users/create', {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: reqBody
        });

        if(response.ok) {
            ProcessLogin(username, password);
            navigate('/', { replace: true });
        }
    }

    return (
        <Box component='div' sx={{ maxWidth:'450px', margin:'2rem 0'}}>
            <Card className='form-body'>
                <CardHeader title='Create Account' className='default-colors'/>

                <CardContent>
                    <Box component='form'>
                        <BTTextField value={ email } label='Email' onChange={ setEmail }/>                        
                        <BTTextField value={ username } label='Username' onChange={ setUsername }/>
                        <BTTextField value={ password } label='Password' onChange={ setPassword }/>
                        <BTTextField value={ passwordConfirmation } label='Confirm Password' onChange={ setPasswordConfirm }/>
                    </Box>
                </CardContent>

                <CardActions sx={{ justifyContent: 'flex-end' }}>
                    <BTButton text='Submit' onClick={ submitSignUp }/>
                </CardActions>
            </Card>
        </Box>
    );
}