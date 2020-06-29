import React from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import SoundPlayer from "react-native-sound-player";
import sounds from "./sounds.json";
import Share from "react-native-share";
import { readFileRes } from "react-native-fs";
import PopOver, { PopoverPlacement } from "react-native-popover-view";

const onShare = async (title: string, file: string) => {
  try {
    const base64Sound = await readFileRes(`raw/${file}.mp3`, "base64");
    await Share.open({
      url: `data:audio/mpeg;base64,` + base64Sound,
      type: "audio/mp3",
      filename: title,
      failOnCancel: false
    })
  } catch (e) {
    console.error("Failed to load file", e);
  }
};

function SoundButton({ title, file }: { title: string, file: any }) {
  return (
    <PopOver
      from={(sourceRef, showPopover) => (
        <TouchableOpacity
          onPress={() => SoundPlayer.playSoundFile(file, "mp3")}
          onLongPress={showPopover}
          delayLongPress={100}
          style={styles.button}>
          <Text ref={sourceRef} style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
      )}>
      <TouchableOpacity style={styles.popover} onPress={() => onShare(title, file)}>
        <Text>Share...</Text>
      </TouchableOpacity>
    </PopOver>
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
  },
  popover: {
    padding: 10,
  },
});