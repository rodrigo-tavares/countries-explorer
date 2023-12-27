import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import CountryDetails from "../screens/CountryDetails";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Countries Explorer 🌎",
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerTitleStyle: {
            color: "#222222",
            fontSize: 20,
            fontFamily: "Avenir Next",
          },
        }}
      />
      <Stack.Screen
        name="CountryDetails"
        component={CountryDetails}
        options={({ route }: any) => ({
          title: route.params.title,
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerTitleStyle: {
            color: "#222222",
            fontSize: 20,
            fontFamily: "Avenir Next",
          },
        })}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
