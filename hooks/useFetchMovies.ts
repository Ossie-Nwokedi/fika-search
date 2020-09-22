import { useEffect, useState } from "react";

import Movie from "../model/Movie";

const genreURL: string = "https://api.themoviedb.org/3/genre/movie/list?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US";
const moviesURL: string = "https://api.themoviedb.org/3/movie/now_playing?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US&page=1";
const postURLBase: string = "https://image.tmdb.org/t/p/w500";

type Genre = {
  id: number;
  name: string;
};

/**
 * Fetch genres and now playing movies
 */
const useFetchMovies = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const genreResponse = await fetch(genreURL);
    const genres = (await genreResponse.json()).genres;

    const movieResponse = await fetch(moviesURL);
    const movieList = await movieResponse.json();

    const m = movieList.results.map((movieItem: any) => {
      const theGenres = movieItem.genre_ids
        .map((id: number) => (
          genres.find((genre: Genre) => id === genre.id).name
        ));
      
      const movie: Movie = {
        id: movieItem.id,
        overview: movieItem.overview,
        title: movieItem.title,
        releaseDate: new Date(movieItem.release_date),
        posterPath: `${postURLBase}${movieItem.poster_path}`,
        genres: theGenres,
      };

      return movie;
    });

    setLoading(false);
    setMovies(m);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return { loading, movies };
};

export default useFetchMovies;
