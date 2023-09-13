import React, { useState } from "react";
import {
  View,
  Text,
  TouchableHighlight,
  SafeAreaView,
  TextInput,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import {
  LoginButtonStyles,
  LoginPageStyles,
  LoginUIStyles,
  photoStyles,
} from "./LoginPageStyles";
import { useNavigation } from "@react-navigation/native";

export const LoginPage = () => {
  return (
    <>
      <LoginPageView />
    </>
  );
};

export const LoginPageView = () => {
  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={LoginPageStyles.container}>
          <LoginPageUI />
          <LoginButton />
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

export const LoginPageUI = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Image
        source={require("./assets/PayPer_Logo.jpg")}
        style={photoStyles.banner}
      />

      <SafeAreaView style={LoginUIStyles.inputContainer}>
        <View style={LoginUIStyles.input}>
          <TextInput
            multiline={true}
            style={LoginUIStyles.inputField}
            placeholder="Please enter your Username"
            onChangeText={(text) => setUsername(text)}
            value={username}
          ></TextInput>
        </View>
      </SafeAreaView>
      <SafeAreaView style={LoginUIStyles.inputContainer}>
        <View style={LoginUIStyles.input}>
          <TextInput
            multiline={true}
            style={LoginUIStyles.inputField}
            placeholder="Please enter your Password"
            onChangeText={(text) => setPassword(text)}
            value={password}
          ></TextInput>
        </View>
      </SafeAreaView>
    </>
  );
};

export const LoginButton = ({
  username,
  password,
  onPress,
  title,
}) => {
  const navigation = useNavigation();

  return (
    <>
      <View style={LoginButtonStyles.buttonContainer}>
        <TouchableHighlight
          style={LoginButtonStyles.buttonStyle}
          underlayColor="#e67e22"
          onPress={() => navigation.navigate("MainPage")}
          value={[username, password]}
        >
          <Text style={LoginButtonStyles.text}>Login </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={LoginButtonStyles.buttonStyle}
          underlayColor="#e67e22"
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={LoginButtonStyles.text}>Sign Up</Text>
        </TouchableHighlight>
      </View>
    </>
  );
};
