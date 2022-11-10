import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "../axios/axios";
import "./Row.css";

function Row({ title, fetchUrl, isLargeRow = false }) {

const [movies, setMovies] = useState([])
  const base_url = "http://image.tmdb.org/t/p/original/";

    useEffect(()=> {
        const fetchData = async () => {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request
        }

        return fetchData ;

    },[fetchUrl]);

  return (
    <div className="row">

      <h2>{title}</h2>

      <div className="row_posters">
        {movies.map((movie) => (
          <img
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name || movie.title}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            key={movie.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
