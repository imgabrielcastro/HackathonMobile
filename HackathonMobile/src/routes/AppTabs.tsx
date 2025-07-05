import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "../screens/HomePage";
import Icon from "react-native-vector-icons/MaterialIcons";

const Tab = createBottomTabNavigator();

export function AppTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="HomePage"
        component={HomePage}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => <Icon name="home" color={"#666"} size={26} />,
        }}
      />

     {/* <Tab.Screen
        name="ClientsTabs"
        component={HomePage}
        options={{
          tabBarLabel: "Clientes",
          tabBarIcon: () => <Icon name="people" color={"#666"} size={26} />,
        }} 
      /> */}
    </Tab.Navigator>
  );
}
