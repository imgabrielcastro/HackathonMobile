import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native-animatable";
import { TextInput } from "react-native-paper";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <View
      style={{
        backgroundColor: "#fafafa",
        padding: 10,
      }}
    >
      <TextInput
        mode="outlined"
        placeholder="Pesquisar"
        placeholderTextColor="#757575"
        value={searchQuery}
        onChangeText={setSearchQuery}
        activeOutlineColor={'#E0E0E0'}
        left={<TextInput.Icon icon="magnify" />}
        style={[{ backgroundColor: "#fafafa", borderRadius: 10, borderColor: '#E0E0E0'}]}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
});
