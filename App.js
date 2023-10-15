import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import SearchForm from "./src/component/searchForm";
import { LinearGradient } from "expo-linear-gradient";
import data from "./data.json";
import FlightOptionItem from "./src/component/FlightOptionItem";

const option1 = data[5];

export default function App() {
  const [items, setItems] = [];

  const onSearch = (data) => {
    console.log(data);
    setItems(data);
  };

  return (
    <LinearGradient
      colors={["#4c669f", "transparent"]}
      style={styles.container}
    >
      <SafeAreaView>
        <SearchForm onSearch={onSearch} />
        <FlatList
          data={data}
          renderItem={({ item }) => <FlightOptionItem flight={item} />}
          showsVerticalScrollIndicator={false}
        />
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
