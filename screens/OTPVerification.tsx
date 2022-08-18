import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Text, View } from "react-native";
import { RootStackParamList } from "../navigation/types";
export default function OTPVerificationScreen({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "OTPVerification">) {
  return (
    <View>
      <Text>OTP V</Text>
      <Button title="GO BACK" onPress={() => navigation.goBack()} />
    </View>
  );
}
