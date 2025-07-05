import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ClientesPage from "../screens/Clientes";
import PerfilCliente from "../screens/Clientes/PerfilCliente";
import CarregarPlano from "../screens/Clientes/CarregarPlano";

const Stack = createNativeStackNavigator();

const ClientesStack = () => {
  return (
    <Stack.Navigator initialRouteName="ListaClientes">
      <Stack.Screen
        name="ListaClientes"
        component={ClientesPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PerfilCliente"
        component={PerfilCliente}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="CarregarPlano"
        component={CarregarPlano}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ClientesStack;
