import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SearchForm from "./src/component/searchForm";

export default function App() {
  const onSearch = async (data) => {
    console.log(data);
  };
  return (
    <View style={styles.container}>
      <SearchForm onSearch={onSearch} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
