import { StyleSheet, Text, View } from "react-native";

const InfoItem = ({ title, value }) => (
  <View style={styles.infoItem}>
    <Text style={styles.infoLabel}>{title}: </Text>
    <Text style={styles.infoText}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
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

export default InfoItem;
