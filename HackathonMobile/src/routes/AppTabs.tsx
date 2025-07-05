import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "../screens/Home";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons/faCalendar";
import { faComments } from "@fortawesome/free-regular-svg-icons";
import AgendaPage from "../screens/Agenda";
import ChatPage from "../screens/Chat";
import ClientesPage from "../screens/Clientes";
import ClientesStack from "./ClientesStack";

const Tab = createBottomTabNavigator();

import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const AppTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        const routeName = getFocusedRouteNameFromRoute(route) ?? '';
        return {
          headerShown: false,
          tabBarLabelStyle: { fontWeight: 'bold', fontSize: 12 },
          tabBarStyle: [
            route.name === 'Clientes' && routeName === 'PerfilCliente'
              ? { display: 'none' }
              : {},
          ],
        };
      }}
    >
      <Tab.Screen
        name="Inico"
        component={HomePage}
        options={{
          tabBarLabel: "Início",
          tabBarIcon: () => <FontAwesomeIcon icon={faHome} size={20} color={"#27454B"}/>,
        }}
      />

      <Tab.Screen
        name="Clientes"
        component={ClientesStack}
        options={{
          tabBarLabel: "Clientes",
          tabBarIcon: () => <FontAwesomeIcon icon={faUsers} size={20} />,
        }}
      />
      <Tab.Screen
        name="Agenda"
        component={AgendaPage}
        options={{
          tabBarLabel: "Agenda",
          tabBarIcon: () => <FontAwesomeIcon icon={faCalendar} size={20} />,
        }}
      />

      <Tab.Screen
        name="Chat"
        component={ChatPage}
        options={{
          tabBarLabel: "Chat",
          tabBarIcon: () => <FontAwesomeIcon icon={faComments} size={28} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default AppTabs;
