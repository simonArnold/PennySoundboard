import React from 'react';
import { StyleSheet, View } from 'react-native';
import SoundButtons from "./SoundButtons";
import Header from "./Header";

export default function App() {
  return (
    <View style={styles.app}>
      <Header />
      <View style={styles.separator} />
      <SoundButtons />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: 'red',
  },
  container: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: 'space-around',
  },
  separator: {
    height: 1,
    backgroundColor: "white"
  }
});
