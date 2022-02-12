import { useEffect, useState } from "react";
import { Issue } from "../../models/IssueModel";
import { GetProjectIssues } from "../../services/Data";

export function IssueTable({ projectId }: { projectId: string }) {
    const [issueList, setIssueList] = useState(new Array<Issue>());

    const getIssuesByProject = async () => {
        const response = await GetProjectIssues(projectId);

        if(response.ok) {
            const jsonResponse: Array<Issue> = await response.json()
            console.log(jsonResponse);

            setIssueList(jsonResponse);
        }
    }

    useEffect(() => {
        getIssuesByProject();
    }, [projectId]);

    return(
        <div>Hello.</div>
    );
}