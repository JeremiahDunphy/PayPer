import { React } from "react";
import { View, ActivityIndicator } from "react-native";
import { LoadingPageStyles } from "./Styles.js";

export const LoadingPage = ({ isLoading }) => {
  return (
    <>
      <View style={LoadingPageStyles.container}>
        {isLoading ? <ActivityIndicator /> : null}
      </View>
    </>
  );
};
