import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { NewProjectPage } from './pages/NewProjectPage';
import ProjectPage from './pages/ProjectPage';
import { SignUpPage } from './pages/SignUpPage';
import { useQuery } from './utilities/UseQuery';

export function AppRoutes() {
    //gets url query params
    let query = useQuery();

    return (
        <Routes>
            <Route path='/signup' element={<SignUpPage/>} />
            <Route path='/login' element={<LoginPage/>} />
            <Route path='/' element={<HomePage/>} />
            <Route path='project/create/' element={<NewProjectPage/>}/>
            <Route path='project/' element={<ProjectPage projectId={ query.get('projectId') || '' }/>}/>
        </Routes>
    );
}