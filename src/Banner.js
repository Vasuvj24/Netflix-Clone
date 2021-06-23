import React,{useState,useEffect} from 'react'
import axios from './axios'
import requests from './request'
import './Banner.css'
function Banner(props) {
    console.log("inside banner");
    const [movies,setMovies] = useState([]);
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            // console.log(request.data.results);
            //code for getting a random movie
            setMovies(request.data.results[Math.floor(Math.random() * request.data.results.length-1)]);
        }
        fetchData();
        return fetchData();
        }, []);
        console.log(movies); 
        // when you need dots after some character
        function truncate(str,n){
            return str?.length>n ? str.substr(0,n-1) + "..." : str;
        }   
    return (
        //ab agar yha css likhne h templte literal k sath to aise likhte h or style k andar bhe ek object pass krna pdta h as hm style ko bhe as object likhte h
        <div className="banner"
        style={{
            //yha agar movies h to uske backdrop path p jao . ka mtlb yhi h
        backgroundImage:`url( "https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
        backgroundSize:'cover',
        backgroundPosition: 'center center'
        }}
        >
            <div className="banner-contents">
                <h1 className="banner-title">{movies?.title||  movies?.name || movies?.original_name}</h1>
                <div className="banner-buttons">
                    <button className="banner-button">Play</button>
                    <button className="banner-button">My List</button>
                </div>
                <h1 className="banner-description">
                    {truncate(movies?.overview,150)}
                </h1>
            </div>
            <div className="fade-bottom"></div>
        </div>
    )
}

export default Banner
