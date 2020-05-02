import React  from 'react';
import { StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import SoundPlayer from "react-native-sound-player";
import sounds from "./sounds.json";

function SoundButton({title, file}: { title: string, file: any }) {
  function play() {
    SoundPlayer.playSoundFile(file, "mp3");
  }
  return (
    <TouchableOpacity onPress={() => play()} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

export default () => (
    <ScrollView contentContainerStyle={styles.container}>
      {sounds.map((sound, i) => (
        <SoundButton key={i} title={sound.title} file={sound.file} />
      ))}
    </ScrollView>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start",
    },
    button: {
        flex: 1,
        flexGrow: 0,
        flexBasis: "30%",
        height: 40,
        marginHorizontal: 5,
        marginVertical: 10,
        justifyContent: "center",
        backgroundColor: "#FFD503",
        borderRadius: 3,
    },
    buttonText: {
      color: "#CD1314",
      textAlign: "center",
      fontWeight: "bold",
    }
});