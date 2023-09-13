import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { LoginPage } from "./LoginPage";
import { MainPage } from "./MainPage";
import { SignUp } from "./SignUp";

const Stack = createNativeStackNavigator();

export const MyStack = () => {
  return (
    <Stack.Navigator initialRouteName="LoginPage">
      <Stack.Screen name="LoginPage" component={LoginPage} />
      <Stack.Screen name="MainPage" component={MainPage} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};
