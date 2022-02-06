import { Project } from "../../models/ProjectModel";
import { GetPublicProjects } from "../../services/Data";

export function ProjectListPage() {
    const getPublicProjects = async () => {
        const response = await GetPublicProjects();

        if(response.ok) {
            const jsonResponse: Array<Project> = await response.json()
            console.log('Projects fetched.', jsonResponse);
        }
    }

    getPublicProjects();

    return (
        <div>Hello</div>
    );
}