// CountryList.js
import React, { useState, useEffect, memo } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { getAllCountries } from "../../services/api";
import CountryListItem from "../CountryListItem";
import categorizeAndSortCountries from "../../utils/categorizeAndSortCountries";

interface CountryListProps {
  searchKeyword: string;
}

export type Country = {
  name: {
    common: string;
  };
  capital: string;
  cca2: string;
  currencies: {
    [code: string]: {
      name: string;
      symbol: string;
    };
  };
  region: string;
  languages: {
    [code: string]: string;
  };
  population: number;
  flags: {
    png: string;
    svg: string;
  };
};

const CountryList = ({ searchKeyword }: CountryListProps) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const countries = await getAllCountries();
        setCountries(countries);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const filteredCountries = categorizeAndSortCountries(
    countries,
    searchKeyword
  );

  const renderSeparator = (data, index) => {
    if (index === data.length - 1) {
      return null;
    }
    return <View style={styles.separator} />;
  };

  return (
    <FlatList
      data={filteredCountries}
      keyExtractor={(item) => item.letter}
      maxToRenderPerBatch={10}
      windowSize={5}
      removeClippedSubviews={true}
      renderItem={({ item }) => (
        <View>
          <Text style={styles.sectionHeader}>{item.letter}</Text>
          <FlatList
            data={item.countries}
            keyExtractor={(country) => country.name.common}
            renderItem={({ item }) => <CountryListItem item={item} />}
            ItemSeparatorComponent={(data, index) =>
              renderSeparator(data, index)
            }
          />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  sectionHeader: {
    fontSize: 16,
    fontFamily: "Avenir Next",
    marginVertical: 20,
  },
  separator: {
    height: 1,
    backgroundColor: "#eee",
  },
});

export default CountryList;
