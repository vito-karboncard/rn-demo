import React from "react";
import { StyleSheet, View } from "react-native";

function LoginScreenLayout({ children }: { children: React.ReactNode }) {
  return <View style={styles.viewWrapper}>{children}</View>;
}

export default LoginScreenLayout;

const styles = StyleSheet.create({
  viewWrapper: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#fff",
    padding: 16,
  },
});
