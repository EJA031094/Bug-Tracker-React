import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { SignUpPage } from './pages/SignUpPage';

export function AppRoutes() {
    return (
        <Routes>
            <Route path='/signup' element={<SignUpPage/>} />
            <Route path='/login' element={<LoginPage/>} />
            <Route path='/' element={<HomePage/>} />
        </Routes>
    );
}