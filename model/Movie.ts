type Movie = {
  id: number,
  posterPath: string,
  genres: Array<string>,
  title: string,
  releaseDate: Date,
  overview: string,
};

export default Movie;