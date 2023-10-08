import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import SearchForm from "./src/component/searchForm";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  const onSearch = async (data) => {
    console.log(data);
  };
  return (
    <LinearGradient
      colors={["#4c669f", "transparent"]}
      style={styles.container}
    >
      <SafeAreaView>
        <SearchForm onSearch={onSearch} />
      </SafeAreaView>
    </LinearGradient>
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
