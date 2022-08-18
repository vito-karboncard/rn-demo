import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Naviagtion from "./navigation";

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.appContainer}>
        <Naviagtion />
        <StatusBar style="auto" />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});
