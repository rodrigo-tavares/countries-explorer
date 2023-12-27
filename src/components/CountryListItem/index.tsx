import React from "react";

import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";

import CountryFlag from "../CountryFlag";
import Icon from "react-native-vector-icons/AntDesign";
import { Country } from "../CountryList";
import { StackNavigationProp } from "@react-navigation/stack";

interface CountryListItemProps {
  item: Country;
}

const CountryListItem: React.FC<CountryListItemProps> = ({
  item,
}: CountryListItemProps) => {
  if (!item) return null;

  const navigation = useNavigation<StackNavigationProp<any>>();

  const handlePress = () => {
    navigation.navigate("CountryDetails", {
      title: item.name.common,
      country: item,
    });
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.listItem}>
        <CountryFlag countrFlagUri={item.flags.png} />
        <Text style={styles.countryTitle}>{item.name.common}</Text>
        <Icon name="right" size={20} color="#888" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    gap: 10,
    paddingVertical: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  countryTitle: {
    fontSize: 16,
    fontFamily: "Avenir Next",
  },
});

export default CountryListItem;
