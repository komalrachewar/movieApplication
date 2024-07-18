import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNavigate } from 'react-router-dom';
import {MENU, MOVIE_URL} from '../constants/constant';
const useStyles = makeStyles()((theme) => ({
  container: {
    marginTop: "70px",
    marginRight: "10px",
  },
  gridItem: {
    padding:"5px",
  },
  iconBtn:{
    textAlign: 'right'
  },
  cardItem: {
    border: "2px solid grey"
  },
  cardContent:{
    margin: "0px",
    padding: "5px"
  },
  imageCurson:{
    cursor: 'pointer',
  },
  btnColorRed:{
    color: "rgb(255, 0, 0)"
  },
  btnColorGray: {
    color: "rgba(0, 0, 0, 0.54)"
  }
}));

type Props = {
  url: string,
  setData: Function,
  data: Object,
  setFavorite: Function,
  favorite: any,
}

const MovieCard = ({url, data, setData, favorite, setFavorite}:Props) => {
  const {classes} = useStyles();
  const navigate = useNavigate();
  const key: keyof typeof MENU = url;

  const handleMovieDetails = (dataItem:object) => {
    navigate('/movieDetails', {state: dataItem});
  }
  const getValueByKey = (key: keyof typeof MENU): String => {
    return MENU[key];
  }

  const handleAddFavourite= (item:any) => {
    let index = favorite.findIndex((e:any) => parseInt(e.id) === parseInt(item.id));
    if(index !== -1) {
        setFavorite((prevFav:any) => prevFav.filter((_:any, i:any) => i !== index))
        setData()
    } else {
      setFavorite([
        ...favorite,
        {
        ...item}
      ])
    }
  }
  console.log(url, MOVIE_URL);
  
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} className={classes.gridItem}>
          <Typography variant="h4">
             {getValueByKey(key)}
          </Typography>
      </Grid>
      {(Object.values(data)).map((item:any) => (
        <Grid item xs={4} className={classes.gridItem}>
          <Card>
            <CardMedia
              image={item.posterurl}
              title={item.title}
              component="img"
              height="250"
              width="120"
              onClick={() => handleMovieDetails(item)}
              className={classes.imageCurson}
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
                <IconButton 
                  aria-label="add to favorites" 
                  className={ favorite.find((e:any) => e.id === item.id) || url === MOVIE_URL[4] ? classes.btnColorRed : classes.btnColorGray} 
                  onClick={() => handleAddFavourite(item)}
                >
                  <FavoriteIcon />
                </IconButton>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {(item.actors || []).join(",")}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
export default MovieCard;