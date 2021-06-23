import React,{useState,useEffect} from 'react'
import axios from './axios'
import requests from './request';
import './Row.css'

const baseUrl = "https://image.tmdb.org/t/p/original/";
function Row(props) {
    // now whenever a movies loads we need render it so we use usestate
    //usestate have its two types function and passing a funcn type in ([]) if you want to run it every time state renders then then we pass fucn and if you want to run it once we pass that funccn to a funcn inside usestate
    //it does have its own previous state so we need to update or padd if we are using one usestate but try using multiple states as much as posiible
    const [movies,setMovies] = useState([]);    
    //use effect runs the times whenever the input is changed and we write what to do when it changes in effect
    //we call propmises taht is async but we can call async in useeffect so we use it by making a functiona and then we call func specifically
    useEffect(() => {
        //we made a funcn
        async function fetchData() {
            const request =await axios.get(props.fetchUrl);
            //now we have a varibale from outside so now it has to become a dependecy so you need to write t in input
            setMovies(request.data.results);//we are setting movies here
            // console.log(request.data.results);
        }
        fetchData();
        // we use return for cleanup in useeffect
        return requests;
    }, [props.fetchUrl])
    // console.log(movies);
    return (
        <div className="row">
            {/* as they are objects and when we write variables we write in on=bject format */}
            <h2>{props.title}</h2>
            <div className =  "rowitems">
                 {/* giving a key to it */}
                {movies.map(movie =>(
                    // line is really important i.e below
                    <img key={movie.id} className={`row_img ${props.isLargeRow && "row_imglarge"}`} src={`${baseUrl}${props.isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                ))}
            </div>
        </div>
    )
}

export default Row;