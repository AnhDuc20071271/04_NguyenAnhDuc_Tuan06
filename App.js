import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import Lap3a from "./screen/Lap3a.js";
import Screen3b from "./screen/Screen3b.js";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="">
        <Stack.Screen name="Lap3a" components={Lap3a} />
        <Stack.Screen name="Screen3b" components={Screen3b} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
