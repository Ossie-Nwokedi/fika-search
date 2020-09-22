import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  name: string;
};

const Genre = ({ name }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.genreText}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 3,
    borderColor: "#EEEEEE",
    borderWidth: 1,
    marginRight: 5,
  },
  genreText: {
    alignSelf: "center",
  },
});

export default Genre;
