import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, Avatar } from "react-native-paper";
import { header } from "../../../../theme/names";
import HStack from "../../../../components/Stacks/HStack";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons/faCalendar";
import { faBell} from "@fortawesome/free-regular-svg-icons";

const HeaderUsuario = () => {
  return (
    <View style={[styles.header, { backgroundColor: header[50] }]}>
      <HStack style={{alignItems: 'center'}}>
        <Text
          variant="headlineMedium"
          style={[styles.title, { color: "#27454B" }]}
        >
          Olá, Maria!
        </Text>
        <FontAwesomeIcon icon={faBell} size={24} color="#27454B" style={{marginTop: 55, left: '40%'}}/>

        <Avatar.Image size={45} source={require('../../../../assets/images/woman.jpeg')} style={{marginTop: 55, left: '43%'}}/>
      </HStack>
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

export default HeaderUsuario;
