import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { useState, useEffect } from "react";
import {getMovies} from '../container/MovieService';
import {MOVIE_URL} from '../constants/constant';
const MovieList = () => {
    const [searchItem, setSearchItem] = useState("");
    const [url, setUrl] = useState(MOVIE_URL[0]);
    const [data, setData] = useState([{}]);
    const[favorite, setFavorite] = useState([]);
    console.log(favorite);
    useEffect(() => {
        const fetchData =async () => {
            const movieData = await getMovies(url, searchItem);
            console.log(typeof [...movieData, ...favorite]);
            
            if(url === MOVIE_URL[4]) {
                setData([
                    ...movieData,
                    ...favorite
                ]);
            } else {
                setData(movieData);
            }
        }
        fetchData();
    }, [url, searchItem, favorite]);
    return (
        <>
            <Navbar setUrl={setUrl} setSearchItem={setSearchItem}/>
            <MovieCard url={url} setData={setData} data={data} favorite={favorite} setFavorite={setFavorite}/>
        </>
    );
}

export default MovieList;
