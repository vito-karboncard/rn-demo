import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OTPVerificationScreen from "../screens/OTPVerification";
import SignInWithPasswordScreen from "../screens/SignInWithPassword";
import SignInWithOTPScreen from "../screens/SignWIthOTP";
const Stack = createNativeStackNavigator();

export default function Naviagtion() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="SignInWithPassword"
        component={SignInWithPasswordScreen}
      />
      <Stack.Screen name="SignInWithOTP" component={SignInWithOTPScreen} />
      <Stack.Screen name="OTPVerification" component={OTPVerificationScreen} />
    </Stack.Navigator>
  );
}
