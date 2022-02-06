import { CreateProjectModel } from "../models/CreateProjectModel";
import { CreateUserModel } from "../models/CreateUserModel";

const commonHttpSettings: RequestInit = {
    mode: 'cors',
    credentials: 'include',
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    }
}

export async function ProcessLogin(username: string, password: string): Promise<Response> {
    const reqBody = JSON.stringify({ username, password });

    const response = await fetch('http://localhost:4000/api/sessions/create', {
        ...commonHttpSettings,
        method: 'POST',
        body: reqBody
    });

    return response;
}

export async function CreateProject(inputProject: CreateProjectModel): Promise<Response> {
    const reqBody = JSON.stringify(inputProject);

    const response = await fetch('http://localhost:4000/api/projects/create', {
        ...commonHttpSettings,
        method: 'POST',
        body: reqBody
    });

    return response;
}

export async function CreateUser (inputUser: CreateUserModel): Promise<Response> {
    const reqBody = JSON.stringify(inputUser);

    const response = await fetch('http://localhost:4000/api/users/create', {
        ...commonHttpSettings,
        method: 'POST',
        body: reqBody
    });

    return response;
}

export async function GetProjectById(projectId: string): Promise<Response> {
    const response = await fetch(`http://localhost:4000/api/projects/getById?projectId=${ projectId }`, {
        ...commonHttpSettings,
        method: 'GET'
    });

    return response;
}

export async function GetPublicProjects(): Promise<Response> {
    const response = await fetch('http://localhost:4000/api/projects/getPublic', {
        ...commonHttpSettings,
        method: 'GET'
    });

    return response;
}