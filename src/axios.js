import axios from "axios";

const instance = axios.create({
    //since we made a object here 
    baseURL: "https://api.themoviedb.org/3",
});
// it just appends the name like if we write instance.get(gand) = https://api.themoviedb.org/3/gand it just apppends it 
//whenever we have a default import we can rename it i.e we made in row.js
//we can only do it once i.e default
export default instance;