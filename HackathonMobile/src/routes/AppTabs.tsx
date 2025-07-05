import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Icon from "react-native-vector-icons/MaterialIcons";

const Tab = createBottomTabNavigator();

export function AppTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="ClientsTab"
        component={Home}
        options={{
          tabBarLabel: "Clientes",
          tabBarIcon: () => <Icon name="people" color={"#666"} size={26} />,
        }}
      />

      <Tab.Screen
        name="ClientsTabs"
        component={Home}
        options={{
          tabBarLabel: "Teste",
          tabBarIcon: () => <Icon name="people" color={"#666"} size={26} />,
        }}
      />
    </Tab.Navigator>
  );
}
