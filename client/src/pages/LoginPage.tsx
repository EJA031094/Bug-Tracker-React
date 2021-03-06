import React, { useEffect } from 'react';
import { Card, CardContent, CardActions, CardHeader, Box } from '@mui/material/';
import { useNavigate } from 'react-router-dom';
import { BTTextField } from '../components/BTTextField';
import { BTButton } from '../components/BTButton';
import { ProcessLogin } from '../services/Data';
import { useUserContext } from '../services/UserProvider';
import { UserModel } from '../models/UserModel';

export function LoginPage() {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [inputError, setInputError] = React.useState('');
    const userContext = useUserContext();
    const navigate = useNavigate();

    useEffect(() => {
        //user is already logged in, redirect
        if(userContext?.user !== undefined) {
            navigate('/');
        }
    }, [ navigate, userContext ]);

    const submitLogin = async () => {
        const response = await ProcessLogin(username, password);

        if(response.ok) {
            setInputError('');

            const jsonResponse: UserModel = await response.json();

            //store user in context and localstorage
            userContext?.setUser(jsonResponse);
            localStorage.setItem('userData', JSON.stringify(jsonResponse));

            navigate('/');
        } else {
            setInputError('Invalid login, please try again.');
        }
    }

    return (
        <Box component='div' className="page-body" sx={{ maxWidth: '350px' }}>
            <Card className='form-body'>
                <CardHeader title='Login' className='default-colors'/>

                <CardContent>
                    <Box component='form'>
                        <BTTextField value={ username } label='Username' onChange={ setUsername }/>
                        <BTTextField value={ password } label='Password' onChange={ setPassword }/>

                        <div className='error-wrapper'>
                            <label>{ inputError }</label>
                        </div>
                        
                        <div style={{ margin: '0', fontSize: '0.75rem' }}>
                            <p>Don't have an account?</p>
                            <a href='/signup'>Sign Up Here</a>
                        </div>
                    </Box>
                </CardContent>

                <CardActions sx={{ justifyContent: 'flex-end' }}>
                    <BTButton text='Login' onClick={ submitLogin }/>
                </CardActions>
            </Card>
        </Box>
    );
}