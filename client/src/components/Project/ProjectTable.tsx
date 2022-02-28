import { Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import { useEffect, useState } from "react";
import { ProjectModel } from "../../models/ProjectModel";
import { GetPublicProjects } from "../../services/Data";
import Moment from 'moment';

export function ProjectTable() {
    const [projectList, setProjectList] = useState(new Array<ProjectModel>());

    useEffect(() => {
        const getPublicProjects = async () => {
            const response = await GetPublicProjects();
    
            if(response.ok) {
                const jsonResponse: Array<ProjectModel> = await response.json();
    
                setProjectList(jsonResponse);
            }
        }

        getPublicProjects();
    }, []);

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Owner</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Created On</TableCell>
                    <TableCell>Last Activity</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {projectList.map((project) => (
                    <TableRow key={project._id}>
                        <TableCell>{project.ownerName}</TableCell>
                        <TableCell><a href={'/project?projectId=' + project._id}>{project.name}</a></TableCell>
                        <TableCell>{Moment(project.createdAt).format('ll')}</TableCell>
                        <TableCell>{Moment(project.updatedAt).format('ll')}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}