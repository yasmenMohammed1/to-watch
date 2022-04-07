import axios from "axios";
import React, { useState, useEffect } from "react";
import GenerCard from "../components/GenresCards/GenerCard";

const Geners = () => {
  const [geners, setGeners] = useState([]);
  const getGeners = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=e52ef21b96833b97ce76b3663ea32335&language=en-US"
      )
      .then((data) => {
        setGeners(data.data.genres);
        console.log(data.data);
      });
  };

  useEffect(() => {
    getGeners();
    console.log(geners);
  }, []);
  return (
    <>
      <div className="bg-slate-200">
        {geners.map((genre) => {
          return <GenerCard genre={genre} />;
        })}
      </div>
    </>
  );
};

export default Geners;
