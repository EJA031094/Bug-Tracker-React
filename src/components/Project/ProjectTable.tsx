import MUIDataTable from 'mui-datatables';
import { useEffect, useState } from "react";
import { Project } from "../../models/ProjectModel";
import { GetPublicProjects } from "../../services/Data";


export function ProjectTable() {
    const [projectList, setProjectList] = useState(new Array<Project>());

    const getPublicProjects = async () => {
        const response = await GetPublicProjects();

        if(response.ok) {
            const jsonResponse: Array<Project> = await response.json()

            setProjectList(jsonResponse);
        }
    }

    useEffect(() => {
        getPublicProjects();
    }, []);

    const columns = ['Owner', 'Name', 'Created On', 'Last Activity'];

    return (
        <MUIDataTable 
            title={'Public Projects'}
            data={projectList}
            columns={columns}
        />
    );
}