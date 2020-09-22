import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import Movie from "../model/Movie";
import MovieCard from "./MovieCard";

type Props = {
  movies: Array<Movie>;
};

const MovieList = ({ movies }: Props) => {
  return (
    <ScrollView>
      {movies.map((movie) => {
        return (
          <View key={movie.id} style={styles.cardItem}>
            <MovieCard movie={movie} />
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardItem: {
    marginBottom: 10,
  },
});

export default MovieList;
