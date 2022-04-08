import axios from "axios";
import React, { useEffect, useState } from "react";
import SimpleMovieView from "../SimpleMovieView";
import { useHistory } from "react-router-dom";

const GenerCard = (props) => {
  const [moviesBygenere, getGenerMovies] = useState([]);
  const history = useHistory();
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
        <p className="font-sans font-bold text-red-700 break-words text-left">
          {" "}
          {props.genre.name}
        </p>
        {moviesBygenere.slice(0, 10).map((movie) => {
          return <SimpleMovieView movieDetails={movie}></SimpleMovieView>;
        })}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          className="m-auto"
          cursor={"pointer"}
          viewBox="50 3 448 512"
          fill={"#C81C24"}
          onClick={() => {
            history.push(`./genre/${props.genre.id}`);
          }}
        >
          <path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z" />
        </svg>{" "}
      </div>
    </>
  );
};

export default GenerCard;
