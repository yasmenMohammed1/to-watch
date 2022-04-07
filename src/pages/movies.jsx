import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard/movieCard";
import axios from "axios";
const Movies = () => {
  const [movies, getMovies] = useState([]);
  const [offeset, changeOffeset] = useState(1);
  const [page, pageNumber] = useState(1);
  const apiKey = "e52ef21b96833b97ce76b3663ea32335";

  const getMoreMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${offeset}`
      )
      .then((data) => {
        getMovies(data.data.results);
        console.log(movies);
      });
  };
  useEffect(() => {
    getMoreMovies();
  }, []);

  return (
    <div>
      {movies.map((movie) => {
        return <MovieCard movieDetails={movie}></MovieCard>;
      })}
      {
        <div class="container flex justify-center mx-auto">
          <ul class="flex">
            <li>
              <button
                onClick={() => {
                  {
                    if (page < 500) {
                      pageNumber(page - 1);
                      changeOffeset(page);
                      getMoreMovies();
                    }

                    console.log("offeset");
                  }
                }}
                class="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white"
              >
                Prev
              </button>
              {page}
              <button
                class="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white"
                onClick={() => {
                  changeOffeset(page + 1);
                  getMoreMovies();
                  pageNumber(page + 1);
                }}
              >
                Next
              </button>
            </li>
          </ul>
        </div>
      }
    </div>
  );
};
export default Movies;
