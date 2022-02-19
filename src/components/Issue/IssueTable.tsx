import { Table, TableHead, TableBody, TableRow, TableCell, Card, CardHeader, CardContent, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { IssueModel } from "../../models/IssueModel";
import { GetProjectIssues } from "../../services/Data";
import Moment from "moment";

export function IssueTable({ projectId }: { projectId: string }) {
    Moment.locale('en');
    const [isMobile, setMobile] = useState(window.innerWidth < 650);
    const [issueList, setIssueList] = useState(new Array<IssueModel>());
    
    //fetches issues for the input projectId
    useEffect(() => {
        const getIssuesByProject = async () => {
            const response = await GetProjectIssues(projectId);
    
            if(response.ok) {
                const jsonResponse: Array<IssueModel> = await response.json();
    
                setIssueList(jsonResponse);
            }
        }

        getIssuesByProject();
    }, [projectId]);

    //sets isMobile to swap tables based on screen size
    useEffect(() => {
        const updateMedia = () => {
            setMobile(window.innerWidth < 650);
        };

        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    if(issueList.length === 0) {
        return (
            <div></div>
        );
    }

    if(isMobile){ 
        return (
            <Card sx={{margin: '1rem 0rem'}}>
                <CardHeader title={<Typography variant='h6'>{ 'Project Issues' }</Typography>} disableTypography={ true } className='default-colors' sx={{ padding: '0.50rem' }} />
                <CardContent>
                    <Table sx={{margin: '1rem 0rem'}}>
                        <TableBody>
                            {issueList.map((issue) => (
                                <TableRow key={issue._id}>
                                    <TableCell>
                                        <span style={{fontWeight: 'bold'}}>Poster:</span> { issue.posterName }
                                    </TableCell>
                                    <TableCell sx={{overflowWrap: 'anywhere'}}>
                                        <span style={{fontWeight: 'bold'}}>Name:</span> <a href={'/issue?issueId=' + issue._id}>{ issue.name }</a>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        );
    }

    return(
        <Card sx={{margin: '1rem 0rem'}}>
            <CardHeader title={<Typography variant='h6'>{ 'Project Issues' }</Typography>} disableTypography={ true } className='default-colors' sx={{ padding: '0.50rem' }} />
            <CardContent>
                <Table sx={{margin: '1rem 0rem'}}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Poster</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Created On</TableCell>
                            <TableCell>Last Activity</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {issueList.map((issue) => (
                            <TableRow key={issue._id}>
                                <TableCell>{issue.posterName}</TableCell>
                                <TableCell><a href={'/issue?issueId=' + issue._id}>{issue.name}</a></TableCell>
                                <TableCell>{Moment(issue.createdAt).format('ll')}</TableCell>
                                <TableCell>{Moment(issue.updatedAt).format('ll')}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}