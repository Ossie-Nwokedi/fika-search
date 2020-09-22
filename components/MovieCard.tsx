import React from "react";
import { View, Text, StyleSheet, Platform, Image, ScrollView } from "react-native";

import Movie from "../model/Movie";
import Genre from "./Genre";

type Props = {
  movie: Movie;
};

const MovieCard = ({ movie }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title} numberOfLines={2}>
          {movie.title}
        </Text>
        <Text style={styles.date}>{movie.releaseDate.toDateString()}</Text>
      </View>

      <View style={styles.seperator} />

      <View style={styles.detailContainer}>
        <Image
          style={styles.image}
          source={{
            uri: movie.posterPath,
          }}
        />

        <View style={styles.details}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.genres}>
            {movie.genres.map((genre) => (
              <Genre key={genre} name={genre} />
            ))}
          </ScrollView>
          <Text numberOfLines={5}>{movie.overview}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#fff",
    width: "100%",
    minHeight: 250,
    borderWidth: 1,
    borderColor: "#DDDDDD",
    ...Platform.select({
      ios: {
        // Note: I have no idea how this will look on iOS as was
        // testing via Expo on an android device
        shadowColor: "#CCCCCC",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  header: {
    marginBottom: 10,
  },
  image: {
    width: 120,
  },
  detailContainer: {
    flex: 1,
    flexDirection: "row",
  },
  details: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 25,
  },
  date: {
    fontSize: 14,
  },
  genres: {
    flexGrow: 0,
    flexDirection: "row",
    marginBottom: 10,
    height: 40,
    width: "100%",
    overflow: "hidden",
  },
  seperator: {
    backgroundColor: "#DDDDDD",
    height: 1,
    marginBottom: 10,
  },
});

export default MovieCard;
