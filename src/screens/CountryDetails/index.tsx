import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { Country } from "../../components/CountryList";
import InfoItem from "../../components/InfoItem";

interface CountryDetailsProps {
  route: {
    params: {
      country: Country;
    };
  };
}

const CountryDetails: React.FC<CountryDetailsProps> = ({ route }) => {
  const { country } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: country.flags.png }}
        style={styles.flag}
        resizeMode="contain"
      />
      <View style={styles.infoContainer}>
        <InfoItem title="Population" value={country.population.toLocaleString()}></InfoItem>
        <InfoItem title="Region" value={country.region}></InfoItem>
        <InfoItem title="Capital" value={country.capital}></InfoItem>

        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Currency:</Text>
          {Object.values(country.currencies).map((currency) => (
            <Text style={styles.infoText} key={currency.name}>
              {currency.name} ({currency.symbol})
            </Text>
          ))}
        </View>

        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Language:</Text>
          <View style={styles.infoLanguage}>
            {Object.values(country.languages).map((language) => (
              <Text style={styles.infoText} key={language}>
                {language}
              </Text>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  flag: {
    width: "100%",
    height: 150,
    marginBottom: 16,
  },
  infoContainer: {
    paddingTop: 16,
  },
  infoLanguage: {
    justifyContent: "space-around",
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  infoLabel: {
    width: 100,
    fontFamily: "Avenir Next",
    fontSize: 16,
  },
  infoText: {
    flex: 1,
    fontFamily: "Avenir Next",
    fontSize: 16,
  },
});

export default CountryDetails;
