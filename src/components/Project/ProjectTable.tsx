import { Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import { useEffect, useState } from "react";
import { Project } from "../../models/ProjectModel";
import { GetPublicProjects } from "../../services/Data";


export function ProjectTable() {
    const [projectList, setProjectList] = useState(new Array<Project>());

    const getPublicProjects = async () => {
        const response = await GetPublicProjects();

        if(response.ok) {
            const jsonResponse: Array<Project> = await response.json()
            console.log(jsonResponse);

            setProjectList(jsonResponse);
        }
    }

    useEffect(() => {
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
                        <TableCell>{project.createdAt}</TableCell>
                        <TableCell>{project.updatedAt}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}