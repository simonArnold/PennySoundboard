import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import SoundPlayer from "react-native-sound-player";

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
    <View style={styles.container}>
        <SoundButton title="Was macht das?" file={"was_macht_das"} />
        <SoundButton title="Optimal" file={"optimal"} />
        <SoundButton title="Zappzarapp Anzeige" file={"zappzarapp_anzeige"} />
        <SoundButton title="Penner" file={"penner"} />
        <SoundButton title="Kapitän" file={"captain_mit_patent"} />
    </View>
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
        alignItems: "center",
        backgroundColor: "lightgrey",
        borderRadius: 3,
    },
    buttonText: {
        textAlign: "center",
        fontWeight: "bold",
    }
});