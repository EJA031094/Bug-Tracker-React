import { CreateProjectModel } from "../models/ProjectModel";
import { CreateIssueModel } from "../models/IssueModel";
import { CreateUserModel } from "../models/UserModel";
import { CreateCommentModel } from "../models/CommentModel";

const commonHttpSettings: RequestInit = {
    mode: 'cors',
    credentials: 'include',
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    }
}

export async function ProcessLogout(): Promise<Response> {
    const response = await fetch('http://localhost:4000/api/sessions/logout', {
        ...commonHttpSettings,
        method: 'POST'
    });

    return response;
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

export async function CreateIssue(inputIssue: CreateIssueModel): Promise<Response> {
    console.log(inputIssue);
    const reqBody = JSON.stringify(inputIssue);
    console.log(reqBody);

    const response = await fetch('http://localhost:4000/api/issues/create', {
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

export async function CreateComment(inputComment: CreateCommentModel): Promise<Response> {
    const reqBody = JSON.stringify(inputComment);

    const response = await fetch('http://localhost:4000/api/comments/create', {
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

export async function GetActiveProfile(): Promise<Response> {
    const response = await fetch(`http://localhost:4000/api/users/getActiveProfile`, {
        ...commonHttpSettings,
        method: 'GET'
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

export async function GetIssueById(issueId: string): Promise<Response> {
    const response = await fetch(`http://localhost:4000/api/issues/getById?issueId=${ issueId }`, {
        ...commonHttpSettings,
        method: 'GET'
    });

    return response;
}

export async function GetIssueComments(issueId: string): Promise<Response> {
    const response = await fetch(`http://localhost:4000/api/issues/getIssueComments?issueId=${ issueId }`, {
        ...commonHttpSettings,
        method: 'GET'
    });

    return response;
}

export async function GetProjectIssues(projectId: string): Promise<Response> {
    const response = await fetch(`http://localhost:4000/api/issues/getProjectIssues?projectId=${ projectId }`, {
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