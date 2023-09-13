import { StatusBar } from "expo-status-bar";
import { LoadingPage } from "./LoadingPage";
import { MyStack } from "./Navigation";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingPage isLoading={isLoading} />
      ) : (
        <>
          <NavigationContainer>
            <MyStack />
            <StatusBar style="auto" />
          </NavigationContainer>
        </>
      )}
    </>
  );
}
