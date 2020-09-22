import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";

import Loading from "./components/Loading";
import MovieList from "./components/MovieList";
import useFetchMovies from "./hooks/useFetchMovies";

export default function App() {
  const { loading, movies } = useFetchMovies();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      {loading ? <Loading text="Loading" /> : <MovieList movies={movies} />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 50,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
});
