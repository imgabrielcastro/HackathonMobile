import { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Text, TextInput, useTheme } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { AuthStackParamList } from '../../navigation/types';

export default function LoginFormSection({ onLogin, email, onBack }: {
  onLogin: () => void;
  email: string;
  onBack: () => void;
}) {
  const [showPassword, setShowPassword] = useState(false);
  const { colors } = useTheme();
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const handleLogin = () => {
    onLogin();
    navigation.navigate("Home");
  }

  return (
    <View style={styles.loginContainer}>
      <Text
        variant="headlineMedium"
        style={{
          fontWeight: "bold",
          backgroundColor: colors.primary,
          paddingBottom: 20,
          marginBottom: 15,
          textAlign: "center",
        }}
      >
        Boas vindas novamente!
      </Text>

      <View style={{ flexDirection: "row" }}>
        <TextInput
          mode="outlined"
          label="E-mail"
          outlineColor="#d4d4d4"
          activeOutlineColor="#787878"
          style={styles.input}
          value={email}
          editable={false}
        />

        <TouchableOpacity>
          <Text
            style={{ fontWeight: "bold", right: 60, top: 18 }}
            onPress={onBack}
          >
            Trocar
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginBottom: 5, flexDirection: "row" }}>
        <TextInput
          mode="outlined"
          label="Senha"
          outlineColor="#d4d4d4"
          activeOutlineColor="#787878"
          style={styles.input}
          secureTextEntry={!showPassword}
        />

        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          style={{ position: "absolute", right: 20, top: 15, zIndex: 1 }}
        >
          <Icon
            name={showPassword ? "visibility" : "visibility-off"}
            size={25}
            color={colors.background}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text
          variant="labelLarge"
          style={{ color: "#fafafa", fontWeight: "bold" }}
        >
          Entrar
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    zIndex: 10,
    backgroundColor: "#fafafa",
    position: "absolute",
    bottom: 0,
    height: "82%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    width: "100%",
    padding: 24,
  },
  input: {
    backgroundColor: "#fafafa",
    height: 40,
    width: "100%",
    borderRadius: 12,
    marginBottom: 16,
  },
  button: {
    marginTop: 35,
    backgroundColor: "#333",
    borderRadius: 12,
    height: 60,
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
  },
});