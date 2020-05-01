import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import SoundButtons from "./SoundButtons";

export default function App() {
  return (
    <View style={styles.app}>
      <Text style={styles.heading}>Penny Reeperbahn <Text style={styles.headingSub}>Soundboard</Text></Text>
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
  heading: {
    fontSize: 30,
    paddingVertical: 10,
    color: "#FFD503",
    fontWeight: "bold",
    textAlign: "center"
  },
  headingSub: {
    fontSize: 20
  },
  separator: {
    height: 1,
    backgroundColor: "white"
  }
});
