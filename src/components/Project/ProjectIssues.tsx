import { useEffect, useState } from "react";
import { Issue } from "../../models/IssueModel";
import { GetProjectIssues } from "../../services/Data";

export function ProjectIssues({ projectId }: { projectId: string }) {
    const [issues, setIssues] = useState<Issue[]>();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchIssues = async () => {
            const response = await GetProjectIssues(projectId);

            if(response.ok) {
                const jsonResponse: Issue[] = await response.json();
                setIssues(jsonResponse);
            }

            setIsLoading(false);
        }

        fetchIssues();
    });

    return(
        <div></div>
    );
}