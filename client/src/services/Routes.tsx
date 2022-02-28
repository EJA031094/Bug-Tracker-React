import React from "react";
import { Route, Routes, useLocation } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { CreateIssuePage } from "../pages/Issue/CreateIssuePage";
import { IssuePage } from "../pages/Issue/IssuePage";
import { LoginPage } from '../pages/LoginPage';
import { ProfilePage } from "../pages/ProfilePage";
import { CreateProjectPage } from '../pages/Project/CreateProjectPage';
import { ProjectListPage } from '../pages/Project/ProjectListPage';
import { ProjectPage } from '../pages/Project/ProjectPage';
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
            <Route path='/profile' element={<ProfilePage/>} />
            <Route path='/login' element={<LoginPage/>} />
            <Route path='/' element={<HomePage/>} />
            <Route path='/project/create/' element={<CreateProjectPage/>}/>
            <Route path='/project/list/' element={<ProjectListPage/>}/>
            <Route path='/project/' element={<ProjectPage projectId={ query.get('projectId') || ''}/>}/>
            <Route path='/issue/create/' element={<CreateIssuePage projectId={ query.get('projectId') || ''}/>}/>
            <Route path='/issue/' element={<IssuePage issueId={ query.get('issueId') || ''}/>}/>
        </Routes>
    );
}