import React from "react";
import { View, Image, StyleSheet } from "react-native";

interface CountryFlagProps {
  countrFlagUri: string;
}

const CountryFlag = ({ countrFlagUri }: CountryFlagProps) => {
  return (
    <View>
      <Image
        style={styles.flag}
        source={{
          uri: countrFlagUri,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flag: {
    width: 50,
    height: 40,
    borderRadius: 10,
    alignContent: "center"
  },
});

export default CountryFlag;
