import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import SoundButtons from "./SoundButtons";

export default function App() {
  return (
    <View style={styles.app}>
      <Text style={styles.heading}>Penny Soundboard</Text>
      <SoundButtons />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  },
  container: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: 'space-around',
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 30,
    paddingVertical: 10,
    backgroundColor: "red",
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  }
});
