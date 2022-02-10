import React from "react";
import { Route, Routes, useLocation } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { CreateProjectPage } from '../pages/Projects/CreateProjectPage';
import { ProjectListPage } from '../pages/Projects/ProjectListPage';
import { ProjectPage } from '../pages/Projects/ProjectPage';
import { SignUpPage } from '../pages/SignUpPage';

//gets query params from current url
export function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

export function AppRoutes() {
    //gets url query params
    let query = useQuery();

    return (
        <Routes>
            <Route path='/signup' element={<SignUpPage/>} />
            <Route path='/login' element={<LoginPage/>} />
            <Route path='/' element={<HomePage/>} />
            <Route path='/project/create/' element={<CreateProjectPage/>}/>
            <Route path='/project/list/' element={<ProjectListPage/>}/>
            <Route path='/project/' element={<ProjectPage projectId={ query.get('projectId') || ''}/>}/>
        </Routes>
    );
}