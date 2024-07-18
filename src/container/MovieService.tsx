import axios from "axios";
export const getMovies = async (url ="movies-in-theaters", searchItem="") => {
    const data = await axios.get(`http://localhost:404/${url}`)
    .then(function(response){
        if(!!searchItem) {
            return response.data.filter((e:any) => e.title.toLowerCase().includes(searchItem.toLowerCase()));
        } else {
            return response.data;
        }
    }).catch(function(error){
        return error;
    });
    return data;
} 
