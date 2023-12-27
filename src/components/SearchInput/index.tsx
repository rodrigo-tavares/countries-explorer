import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const regionData = [
  { label: "All Regions", value: null },
  { label: "Africa", value: "Africa" },
  { label: "Americas", value: "Americas" },
  { label: "Asia", value: "Asia" },
  { label: "Europe", value: "Europe" },
  { label: "Oceania", value: "Oceania" },
];

const SearchInput = ({ onSearch, onSelectRegion }) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [filterVisible, setFilterVisible] = useState(false);

  const handleChangeText = (text: string) => {
    setSearchKeyword(text);
    onSearch(text);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.dropdownItem}
      onPress={() => {
        onSelectRegion(item.value);
        setFilterVisible(false);
      }}
    >
      <Text style={styles.dropdownItemText}>{item.label}</Text>
    </TouchableOpacity>
  );

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

      {filterVisible && (
        <View style={styles.dropdownContainer}>
          <FlatList
            data={regionData}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
          />
        </View>
      )}
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
    zIndex: 1,
  },
  filterContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    position: "absolute",
  },
  dropdownContainer: {
    position: "absolute",
    top: 60,
    right: 0,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    backgroundColor: "#fff",
    zIndex: 1,
  },
  dropdownItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  dropdownItemText: {
    fontSize: 16,
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
