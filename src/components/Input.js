import React, {useState, useEffect} from "react";
import "./Input.css"

function Input(){

    const [movieName, setMovieName]=useState("");
    const [movielist, setMovieList]=useState([]);

    function handleChange(event){
        setMovieName(event.target.value)
    }

    function handleClick(){
        console.log(movieName)
        getData()
        console.log(movielist)
    }

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&query=${movieName}page=1&include_adult=false`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
    }
    

    return (
        <>

        <input onChange={handleChange}id="search" type="text" placeholder='Search for movie' value={movieName}>
        </input>
        <button type="button" onClick={handleClick}>Search</button>

        </>
    )
}

export default Input;