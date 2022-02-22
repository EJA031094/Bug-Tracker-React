import { CommentModel } from "../../models/CommentModel";
import { Avatar, Card, CardHeader, CardContent, IconButton, Typography, Menu, MenuItem} from '@mui/material/';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Moment from 'moment';
import { useState } from "react";


export function BTComment({ comment }:{ comment:CommentModel }) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Card sx={{border: '1px solid rgba(50, 50, 50, .35)', marginTop: '0.5rem'}}>
            <CardHeader
            avatar={
                <Avatar sx={{ bgcolor: red[500] }}>
                {comment.posterName.charAt(0).toUpperCase()}
                </Avatar>
            }
            action={
                <>
                    <IconButton onClick={ handleClick } aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem>Reply</MenuItem>
                    </Menu>
                </>
            }
            title={comment.posterName}
            subheader={Moment(comment.createdAt).format("YYYY-MM-DD HH:mm:ss")}
            />

            <CardContent>
                <Typography sx={{textAlign: 'left'}} variant="body2" color="text.primary">
                    {comment.body}
                </Typography>
            </CardContent>
        </Card>
    );
}