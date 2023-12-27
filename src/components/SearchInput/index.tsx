import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const SearchInput = ({ onSearch }) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [filterVisible, setFilterVisible] = useState(false);

  const handleChangeText = (text: string) => {
    setSearchKeyword(text);
    onSearch(text);
  };

  const renderFilter = () => {
    <View style={styles.filterContainer}>
      <Text>Americas</Text>
      <Text>Europe</Text>
      <Text>Asia</Text>
      <Text>Africa</Text>
      <Text>Oceania</Text>
    </View>;
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Icon name="search1" size={20} color="#888" style={styles.searchIcon} />
        <TextInput
          placeholder="Search countries"
          style={styles.input}
          value={searchKeyword}
          onChangeText={handleChangeText}
          underlineColorAndroid="transparent"
        />
      </View>

      <TouchableOpacity onPress={() => setFilterVisible(!filterVisible)}>
        <Icon name="filter" size={20} color="#888" style={styles.filterIcon} />
      </TouchableOpacity>
      <>{filterVisible ? renderFilter() : null}</>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    paddingBottom: 10,
    position: "relative",
  },
  filterContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    position: "absolute",
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e2e2e2",
    borderRadius: 10,
    paddingVertical: 12,
    paddingLeft: 0,
  },
  searchIcon: {
    marginLeft: 10,
  },
  filterIcon: {
    marginLeft: 10,
    padding: 10,
    borderRadius: 10,
    borderColor: "#ddd",
    borderWidth: 1,
  },
  input: {
    flex: 1,
    paddingHorizontal: 8,
    fontSize: 16,
    marginHorizontal: 8,
    textAlign: "center",
  },
});

export default SearchInput;
