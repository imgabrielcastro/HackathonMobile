import { Image, StatusBar, TouchableOpacity, View } from "react-native";
import VStack from "../../../components/Stacks/VStack";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { SafeAreaView } from "react-native-safe-area-context";
import { faArrowLeft, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Avatar } from "react-native-paper";
import { Text } from "react-native-paper";
import { header } from "../../../theme/names";
import HStack from "../../../components/Stacks/HStack";
import ButtonClient from "../components/BotaoCliente";
import { useEffect, useState } from "react";
import { EnumButtonPerfilCliente } from "../../../enum/EnumPerfilCliente";
import { SCREEN_WIDTH } from "../../../constants";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";
import { ScrollView } from "react-native-gesture-handler";

const PerfilCliente = () => {
  const navigation = useNavigation<any>();
  const isFocused = useIsFocused();
  const [buttonSelected, setButtonSelected] = useState(
    EnumButtonPerfilCliente.GERAL
  );

  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: { display: "none" },
    });
    return () => {
      navigation.getParent()?.setOptions({
        tabBarStyle: { display: "flex" },
      });
    };
  }, [navigation]);

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: header[50] }}>
        {isFocused && (
          <StatusBar
            animated
            backgroundColor={header[50]}
            barStyle="dark-content"
          />
        )}
        <VStack style={{ backgroundColor: header[50] }}>
          <View style={{ paddingLeft: 20, paddingTop: 8 }}>
            <TouchableOpacity onPress={handleBackPress}>
              <FontAwesomeIcon icon={faArrowLeft} size={24} color="black" />
            </TouchableOpacity>
          </View>

          <VStack style={{ alignItems: "center", rowGap: 8 }}>
            <Avatar.Image
              size={100}
              source={require("../../../../src/assets/images/woman.jpeg")}
            />
            <Text variant="headlineLarge" style={{ fontWeight: "bold" }}>
              Clara Gomes
            </Text>
            <Text variant="titleMedium" style={{ color: "#757575" }}>
              46 anos, Feminino
            </Text>
          </VStack>
        </VStack>

        <VStack style={{ backgroundColor: "#fafafa", padding: 20, flex: 1 }}>
          <HStack
            style={{
              padding: 4,
              backgroundColor: "#eeeeee",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 8,
            }}
          >
            <ButtonClient
              title="Geral"
              selected={buttonSelected}
              setButtonSelected={setButtonSelected}
              tipo={EnumButtonPerfilCliente.GERAL}
            />
            <ButtonClient
              title="Plano"
              selected={buttonSelected}
              setButtonSelected={setButtonSelected}
              tipo={EnumButtonPerfilCliente.PLANO}
            />
            <ButtonClient
              title="Evolução"
              selected={buttonSelected}
              setButtonSelected={setButtonSelected}
              tipo={EnumButtonPerfilCliente.EVOLUCAO}
            />
            <ButtonClient
              title="Histórico"
              selected={buttonSelected}
              setButtonSelected={setButtonSelected}
              tipo={EnumButtonPerfilCliente.HISTORICO}
            />
          </HStack>

          {buttonSelected === EnumButtonPerfilCliente.GERAL && (
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                alignItems: "center",
                paddingBottom: 20,
              }}
              style={{ flex: 1 }}
            >
              <VStack
                style={{
                  backgroundColor: "#fafafa",
                  gap: 12,
                  padding: 10,
                  borderRadius: 10,
                  width: SCREEN_WIDTH * 0.93,
                  borderWidth: 1,
                  borderColor: "#e0e0e0",
                  marginTop: 12,
                }}
              >
                <HStack
                  style={{ justifyContent: "flex-start", alignItems: "center" }}
                >
                  <Text style={{ fontSize: 18 }}>Informações Pessoais</Text>
                </HStack>

                <VStack>
                  <HStack style={{ gap: 12, marginTop: 5 }}>
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      size={24}
                      color="#616161"
                    />
                    <Text style={{ marginTop: 2 }}>clara.gomes@email.com</Text>
                  </HStack>

                  <HStack style={{ gap: 12, marginTop: 10 }}>
                    <FontAwesomeIcon icon={faPhone} size={24} color="#616161" />
                    <Text style={{ marginTop: 2 }}>(48) 99999-9999</Text>
                  </HStack>

                  <HStack style={{ gap: 12, marginTop: 10 }}>
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      size={24}
                      color="#616161"
                    />
                    <Text style={{ marginTop: 2 }}>Criciúma, SC</Text>
                  </HStack>
                </VStack>
              </VStack>

              <VStack
                style={{
                  backgroundColor: "#fafafa",
                  gap: 12,
                  padding: 10,
                  borderRadius: 10,
                  width: SCREEN_WIDTH * 0.93,
                  borderWidth: 1,
                  borderColor: "#e0e0e0",
                  marginTop: 12,
                }}
              >
                <HStack
                  style={{ justifyContent: "flex-start", alignItems: "center" }}
                >
                  <Text style={{ fontSize: 18 }}>Dados Físicos</Text>
                </HStack>

                <VStack>
                  <VStack>
                    <HStack>
                      <Text style={{ marginTop: 2 }}>Altura {"\n"}165 cm </Text>

                      <Text style={{ marginTop: 2, left: "55%" }}>
                        Peso {"\n"}165 cm{" "}
                      </Text>
                    </HStack>

                    <HStack>
                      <Text style={{ marginTop: 10 }}>
                        Peso meta {"\n"}60 kg{" "}
                      </Text>

                      <Text style={{ marginTop: 10, left: "49%" }}>
                        IMC {"\n"}25.7
                      </Text>
                    </HStack>
                  </VStack>
                </VStack>
              </VStack>

              <VStack
                style={{
                  backgroundColor: "#fafafa",
                  gap: 12,
                  padding: 10,
                  borderRadius: 10,
                  width: SCREEN_WIDTH * 0.93,
                  borderWidth: 1,
                  borderColor: "#e0e0e0",
                  marginTop: 12,
                }}
              >
                <HStack
                  style={{ justifyContent: "flex-start", alignItems: "center" }}
                >
                  <Text style={{ fontSize: 18 }}>Preferências Alimentares</Text>
                </HStack>

                <VStack>
                  <VStack style={{ gap: 4 }}>
                    <Text style={{ marginTop: 2, fontSize: 18 }}>
                      Tipo de dieta
                    </Text>
                    <View
                      style={{
                        paddingHorizontal: 8,
                        paddingVertical: 8,
                        borderRadius: 24,
                        backgroundColor: "#e0e0e0",
                        alignSelf: "flex-start",
                      }}
                    >
                      <Text
                        style={{
                          marginTop: 2,
                          fontSize: 14,
                          fontWeight: "bold",
                        }}
                      >
                        Sem preferência
                      </Text>
                    </View>
                  </VStack>

                  <VStack style={{ gap: 4 }}>
                    <Text style={{ marginTop: 10, fontSize: 18 }}>
                      Alergias
                    </Text>
                    <HStack>
                      <Text
                        style={{
                          paddingHorizontal: 8,
                          paddingVertical: 8,
                          borderRadius: 24,
                          backgroundColor: "#FFEBEE",
                          fontWeight: "bold",
                          color: "#D32F2F",
                          alignSelf: "flex-start",
                        }}
                      >
                        Lactose
                      </Text>
                      <Text
                        style={{
                          paddingHorizontal: 8,
                          paddingVertical: 8,
                          borderRadius: 24,
                          backgroundColor: "#FFEBEE",
                          fontWeight: "bold",
                          color: "#D32F2F",
                          alignSelf: "flex-start",
                        }}
                      >
                        Amendoim
                      </Text>
                    </HStack>
                    <VStack>
                      <Text style={{ marginTop: 10, fontSize: 18 }}>
                        Preferências
                      </Text>
                      <View
                        style={{
                          paddingHorizontal: 8,
                          paddingVertical: 8,
                          borderRadius: 24,
                          backgroundColor: "#e0e0e0",
                          alignSelf: "flex-start",
                        }}
                      >
                        <Text
                          style={{
                            marginTop: 2,
                            fontSize: 14,
                            fontWeight: "bold",
                          }}
                        >
                          Sem glúten
                        </Text>
                      </View>
                    </VStack>
                  </VStack>
                </VStack>
              </VStack>

              <VStack
                style={{
                  backgroundColor: "#fafafa",
                  gap: 12,
                  padding: 10,
                  borderRadius: 10,
                  width: SCREEN_WIDTH * 0.93,
                  borderWidth: 1,
                  borderColor: "#e0e0e0",
                  marginTop: 12,
                }}
              >
                <HStack
                  style={{ justifyContent: "flex-start", alignItems: "center" }}
                >
                  <Text style={{ fontSize: 18 }}>Informações médicas</Text>
                </HStack>

                <VStack>
                  <Text style={{ marginTop: 10, fontSize: 18 }}>Condições</Text>
                  <View
                    style={{
                      paddingHorizontal: 8,
                      paddingVertical: 8,
                      borderRadius: 24,
                      backgroundColor: "#e0e0e0",
                      alignSelf: "flex-start",
                    }}
                  >
                    <Text
                      style={{
                        marginTop: 2,
                        fontSize: 14,
                        fontWeight: "bold",
                      }}
                    >
                      Hipotireoidismo
                    </Text>
                  </View>
                </VStack>

                <VStack>
                  <Text style={{ marginTop: 10, fontSize: 18 }}>
                    Medicamentos
                  </Text>
                  <View
                    style={{
                      paddingHorizontal: 8,
                      paddingVertical: 8,
                      borderRadius: 24,
                      backgroundColor: "#e0e0e0",
                      alignSelf: "flex-start",
                    }}
                  >
                    <Text
                      style={{
                        marginTop: 2,
                        fontSize: 14,
                        fontWeight: "bold",
                      }}
                    >
                      Levotiroxina 50mcg
                    </Text>
                  </View>
                </VStack>
              </VStack>
            </ScrollView>
          )}

          {buttonSelected === EnumButtonPerfilCliente.PLANO && (
            <VStack
              style={{ backgroundColor: "#fafafa", padding: 20, flex: 1 }}
            >
              <VStack
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  flex: 1,
                  gap: 18,
                }}
              >
                <Image
                  source={require("../../../assets/images/planoAlimentar.png")}
                />
                <Text style={{ fontSize: 16 }}>
                 Cliente sem plano alimentar
                </Text>
                <TouchableOpacity style={{width: SCREEN_WIDTH * 0.9}}>
                  <Text
                    style={{
                      paddingHorizontal: 8,
                      padding: 20,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 8,
                      backgroundColor: "#27454B",
                      fontWeight: "bold",
                      textAlign: 'center',
                      color: "white",
                      fontSize: 16,
                    }} 

                    onPress={() => navigation.navigate("CarregarPlano")}
                  >
                    +    Gerar plano alimentar
                  </Text>
                </TouchableOpacity>
              </VStack>
            </VStack>
          )}

          {buttonSelected === EnumButtonPerfilCliente.EVOLUCAO && (
            <VStack
              style={{ backgroundColor: "#fafafa", padding: 20, flex: 1 }}
            >
              <Text variant="titleMedium">Evolução</Text>
            </VStack>
          )}
          {buttonSelected === EnumButtonPerfilCliente.HISTORICO && (
            <VStack
              style={{ backgroundColor: "#fafafa", padding: 20, flex: 1 }}
            >
              <Text variant="titleMedium">Histórico</Text>
            </VStack>
          )}
        </VStack>
      </SafeAreaView>
    </>
  );
};

export default PerfilCliente;
