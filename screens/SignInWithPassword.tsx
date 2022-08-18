import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import LoginScreenLayout from "../layouts/LoginScreenLayout";
import { RootStackParamList } from "../navigation/types";
function SignInWithPasswordScreen({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "SignInWithPassword">) {
  return (
    <LoginScreenLayout>
      <Text style={styles.title}>Welcome to karbon</Text>
      <View>
        <Text>Email</Text>
        <TextInput placeholder="Email" />
        <Text>Password</Text>
        <TextInput placeholder="Password" />
      </View>
      <View style={styles.buttonGroup}>
        <Button title="submit" />
        <Button
          title="OTP Login"
          onPress={() => navigation.navigate("SignInWithOTP")}
        />
      </View>
    </LoginScreenLayout>
  );
}

export default SignInWithPasswordScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 24,
    textAlign: "center",
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
