import { StyleSheet, Text, View } from "react-native";
import { NavigationIndependentTree } from "@react-navigation/native";
import App from "../App.js"

export default function Page() {
  return (
    <NavigationIndependentTree>
      <App />
    </NavigationIndependentTree>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
