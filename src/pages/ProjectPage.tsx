
export default function ProjectPage(props: { projectId?: string;}) {
    console.log(props.projectId);

    return (
        <div> {props.projectId} </div>
    );
}