import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { useTheme, Text, Card, Avatar } from "react-native-paper";

export default function ClientsContainer() {
  return (
    <View style={styles.container}>
      <Text style={styles.placeholderText}>
        Edite este componente conforme necessário
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  placeholderText: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
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
  status: {
    color: '#4CAF50',
  },
  gender: {
    color: '#2196F3',
  },
});