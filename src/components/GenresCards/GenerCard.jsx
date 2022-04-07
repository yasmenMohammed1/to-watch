import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "../MovieCard/movieCard";
import SimpleMovieView from "../SimpleMovieView";

const GenerCard = (props) => {
  const [moviesBygenere, getGenerMovies] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=e52ef21b96833b97ce76b3663ea32335&with_genres=${props.genre.id}`
      )
      .then((data) => {
        getGenerMovies(data.data.results);
      });
  }, []);
  return (
    <>
      <div class="p-10 grid grid-cols-12 h-60 justify-center  bg-slate-900 ">
        <p className="font-sans font-bold text-red-700"> {props.genre.name}</p>
        {moviesBygenere.slice(0, 10).map((movie) => {
          return <SimpleMovieView movieDetails={movie}></SimpleMovieView>;
        })}
        <button>see more</button>
      </div>
    </>
  );
};

export default GenerCard;
