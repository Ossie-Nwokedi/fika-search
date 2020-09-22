import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  text: string;
};

const Loading = ({ text }: Props) => {
  const [loadingText, setLoadingString] = useState(text);
  const timerId = useRef(0);

  const tick = () => {
    setLoadingString((loadingString) => {
      return loadingString.length === text.length + 3 ? text : loadingString + ".";
    });
  };

  useEffect(() => {
    timerId.current = window.setInterval(tick, 450);

    return () => {
      window.clearInterval(timerId.current);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.loading}>{loadingText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loading: {
    fontSize: 24,
  },
});

export default Loading;
