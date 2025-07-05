import React from "react";
import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import { useTheme, Text, Card, Avatar } from "react-native-paper";
import mockData from "../../../../data/mockData.json";
import { useNavigation } from "@react-navigation/native";

interface Usuario {
  Id: number;
  Nome: string;
  Sexo: string;
Idade: number;
}

const ClientList = () => {
  const { colors } = useTheme();
  const navigation = useNavigation<any>();
  const usuarios = (mockData as any).usuarios || [];

  if (!usuarios.length) {
    return (
      <View style={styles.container}>
        <Text variant="titleMedium">Nenhum usuário encontrado</Text>
      </View>
    );
  }

  const renderItem = ({item}: {item: Usuario}) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate("PerfilCliente")}>
            <Card style={styles.card}>
                <Card.Content>
                <View style={styles.cardHeader}>
                    <Avatar.Icon size={40} icon="account" />
                    <View style={styles.cardInfo}>
                    <Text variant="titleMedium" style={styles.name}>
                        {item.Nome}
                    </Text>
                    <View style={styles.statusContainer}>
                        <Text variant="bodyMedium" style={[styles.idade]}>
                        {item.Idade} anos,
                        </Text>
                        <Text variant="bodyMedium" style={styles.sexo}>
                        {item.Sexo}
                        </Text>
                    </View>
                    </View>
                </View>
                </Card.Content>
            </Card>
        </TouchableOpacity>
    )

  }

  return (
    <View style={[styles.container, { backgroundColor: colors.primary }]}>
      <FlatList
        data={usuarios}
        renderItem={renderItem}
        keyExtractor={(item) => item.Id.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

export default ClientList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  listContainer: {
    flexGrow: 1,
  },
  card: {
    marginVertical: 8,
    
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  cardInfo: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  statusContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  idade: {
    color: '#757575',
  },
  sexo: {
    color: '#757575',
  },
});
