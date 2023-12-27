import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";

import SearchInput from "../../components/SearchInput";
import CountryList from "../../components/CountryList";

const Home: React.FC = () => {
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [selectedRegion, setSelectedRegion] = useState(null);

  return (
    <View style={[styles.container]}>
      <SearchInput
        onSearch={setSearchKeyword}
        onSelectRegion={setSelectedRegion}
      />
      <CountryList
        searchKeyword={searchKeyword}
        selectedRegion={selectedRegion}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#ffffff",
  },
});

export default Home;
