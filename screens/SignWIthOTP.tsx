import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Text, View } from "react-native";
import { RootStackParamList } from "../navigation/types";
export default function SignInWithOTPScreen({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "SignInWithOTP">) {
  return (
    <View>
      <Text>OTP Login</Text>
      <Button
        title="OTP Verify"
        onPress={() => navigation.navigate("OTPVerification")}
      />
      <Button title="go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
