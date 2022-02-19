import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { CommentModel } from "../../models/CommentModel";
import Moment from 'moment';
import { useEffect, useState } from "react";

export function BTComment({ comment }:{ comment:CommentModel }) {
    const [isMobile, setMobile] = useState(window.innerWidth < 600);

    useEffect(() => {
        const updateMedia = () => {
            setMobile(window.innerWidth < 600);
        };

        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    if(isMobile) {
        return(
            <Box component='div' sx={{ display: 'flex', margin: '1rem 0' }}>
                <Grid container sx={{ border:'grey' }}>
                    <Grid container>
                        <Grid item xs={12} sx={{ fontWeight: 'bold', textAlign: 'left', wordBreak: 'break-all' }}>{ comment.posterName }</Grid>
                        <Grid item xs={12} sx={{ borderTop: '1px solid grey', textAlign: 'left', margin: '0.5rem 0'}}>{ comment.body }</Grid>
                    </Grid>
                    <Grid container sx={{borderTop: '1px solid grey', borderBottom: '1px solid grey', margin: '0.5rem 0'}}>
                        <Grid item xs={12} sm={12} sx={{textAlign: 'right'}}> 
                            <span style={{fontWeight: 'bold'}}> Posted On:  </span>{ Moment(comment.createdAt).format('lll') }
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        );
    }

    return(
        <Box component='div' sx={{ display: 'flex', margin: '1rem 0' }}>
            <Grid container sx={{ border:'grey' }}>
                <Grid container>
                    <Grid item sm={3} sx={{ textAlign: 'left', borderRight: '1px solid grey', wordBreak: 'break-all' }}>{ comment.posterName }</Grid>
                    <Grid item sm={9} sx={{ borderRadius: '1rem', borderTop: '2px', paddingLeft:'0.5rem', textAlign: 'left'}}>{ comment.body }</Grid>
                </Grid>
                <Grid container sx={{borderTop: '1px solid grey', borderBottom: '1px solid grey', margin: '0.5rem 0'}}>
                    <Grid item xs={12} sm={12} sx={{textAlign: 'right'}}> 
                        <span style={{fontWeight: 'bold'}}> Posted On:  </span>{ Moment(comment.createdAt).format('lll') }
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}