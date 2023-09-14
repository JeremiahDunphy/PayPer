import { Text, TextInput, View, Button } from "react-native";
import { SignUpStyles } from "./SignUpStyles";
import { useState } from "react";

export const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
    username: "",
    password: "",
  });

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const inputFields = [
    { name: "firstName", placeholder: "Please Enter Your First Name" },
    { name: "lastName", placeholder: "Please Enter Your Last Name" },
    { name: "email", placeholder: "Please Enter Your Email" },
    { name: "confirmEmail", placeholder: "Please Confirm Your Email" },
    { name: "username", placeholder: "Please Create Your Username" },
    { name: "password", placeholder: "Please Create Your Password" },
  ];

  return (
    <View style={SignUpStyles.container}>
      {inputFields.map((field, index) => (
        <TextInput
          key={index}
          style={SignUpStyles.input}
          placeholder={field.placeholder}
          onChangeText={(value) => handleChange(field.name, value)}
        />
      ))}
      <Button title="Sign Up"></Button>
    </View>
  );
};
