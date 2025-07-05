import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { header } from "../../../../theme/names";

const HeaderClientes = () => {
  return (
    <View style={[styles.header, { backgroundColor: header[50] }]}>
        <Text
          variant="headlineMedium"
          style={[styles.title, { color: "#27454B" }]}
        >
          Clientes
        </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: "15%",
    width: "100%",
    padding: 10,
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    alignContent: "flex-start",
    marginTop: 55,
    left: 10,
  },
});
 
export default HeaderClientes;
