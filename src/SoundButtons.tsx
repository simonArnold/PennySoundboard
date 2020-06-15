import React from 'react';
import { StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import SoundPlayer from "react-native-sound-player";
import sounds from "./sounds.json";
import Share from "react-native-share";

const onShare = async () => {
  try {
    await Share.open({
      url: "file://android/app/src/main/res/raw/achja",
      type: "audio/mp3"
    })
  } catch (e) {
    console.log(e);

  }
  // try {
  //   const result = await Share.share({
  //     url: "android.resource://com.pennysoundboard/raw/achja.mp3",
  //     message: "hey"
  //   });
  //   if (result.action === Share.sharedAction) {
  //     if (result.activityType) {
  //       // shared with activity type of result.activityType
  //     } else {
  //       // shared
  //     }
  //   } else if (result.action === Share.dismissedAction) {
  //     // dismissed
  //   }
  // } catch (error) {
  //   console.log(error.message);
  // }
};

function SoundButton({ title, file }: { title: string, file: any }) {
  function play() {
    SoundPlayer.playSoundFile(file, "mp3");
  }
  return (
    <TouchableOpacity onPress={() => play()} onLongPress={() => onShare()} style={styles.button}>
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