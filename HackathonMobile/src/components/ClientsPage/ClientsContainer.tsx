import { StyleSheet, View, FlatList } from "react-native";
import { useTheme, Text, Card, Avatar } from "react-native-paper";

export default function ClientsContainer() {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.primary }]}>
      <FlatList
        data={[]}
        renderItem={() => null}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={
          <Text style={styles.placeholderText}>
            Edite este componente conforme necessário
          </Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  listContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  placeholderText: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
  },
});