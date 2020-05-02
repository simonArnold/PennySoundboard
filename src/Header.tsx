import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Header() {
    return (
        <View>
            <Text style={styles.heading}>
                Penny Reeperbahn <Text style={styles.sub}>Soundboard</Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    paddingVertical: 10,
    color: "#FFD503",
    fontWeight: "bold",
    textAlign: "center"
  },
  sub: {
    fontSize: 20
  },
});