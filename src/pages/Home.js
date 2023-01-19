import React, { useState, useEffect } from "react";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import Movielist from "../components/Movielist";
import Input from "../components/Input";

function Home() {
    let url = "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US";

    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        fetch(url).then(res => res.json()).then(data => setPopularMovies(data.results))
    }, [])

    // console.log(popularMovies)

    return (
        <>  

        {/* <Input/> */}
            <div className="poster">
                <Carousel
                    key={1}
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {
                        popularMovies.map((movie, index) => (
                            <Link style={{ textDecoration: "none", color: "white" }} to={`/movie/${movie.id}`}>

                                <div className="posterImage">
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                                </div>
                                <div className="posterImage__overlay">
                                    <div className="posterImage__title">
                                    {movie.title || movie.name}
                                    </div>
                                <div className="posterImage__runtime">
                                    {movie ? movie.release_date : ""}
                                    <span className="posterImage__rating">
                                        {movie ? movie.vote_average : ""}
                                        {"  "}<i className="fas fa-star" />
                                    </span>
                                </div>
                                <div    className="posterImage__description">
                                {
                                    movie ? movie.overview : ""
                                }

                                </div>
                                </div>
                            </Link>
                        ))
                    }
                </Carousel>
                <Movielist /> 
            </div>
        </>
    )
}

export default Home;