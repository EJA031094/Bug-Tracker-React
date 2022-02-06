import { Project } from "../../models/ProjectModel";
import { GetProjectById } from "../../services/Data";

export function ProjectPage(props: { projectId?: string;}) {

    const fetchProject = async () => {
        if(props.projectId === undefined){
            return null;
        }

        const response = await GetProjectById(props.projectId)

        if(response.ok) {
            const jsonResponse: Project = await response.json()
            console.log('Project fetched.', jsonResponse);
        }
    }

    fetchProject();

    return (
        <div> {props.projectId} </div>
    );
}