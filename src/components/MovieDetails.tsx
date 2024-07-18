import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
    container: {
      marginTop: "20px",
      marginRight: "10px",
    },
    gridItem: {
        marginLeft:"10px",
        marginRight: "0px",
        paddingRight: "10px"
    },
    gridItem4:{
        marginLeft: "0px",
        paddingLeft: "20px"
    }
    
}));

const MovieDetails = () => {
    const {classes} = useStyles();
    const location = useLocation();
    const navigate = useNavigate();
    const { state } = location;
    const handleBackBtn = () => {
        navigate("/");
    }
    return (
        <>
            <Grid container className={classes.container}>
                <Grid item xs={12} className={classes.gridItem}>
                    <Typography variant="h4" gutterBottom>
                        Movie Details <Button  variant="contained" onClick={handleBackBtn}>Back</Button>
                    </Typography>
                    
                </Grid>
                <Grid item xs={3} className={classes.gridItem}>
                    <img
                        src={state.posterurl}
                        alt={state.title}
                        loading="lazy"
                    />
                </Grid>
                <Grid item xs={8} className={classes.gridItem4}>
                    <Typography variant="h5" gutterBottom>
                        {state.title}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        <b>Actors:</b> {state.actors.join(", ")}
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom>
                        <b>Genres:</b> {state.genres.join(", ")}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        {state.storyline}
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
}

export default MovieDetails;
