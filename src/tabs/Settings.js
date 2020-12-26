import * as React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Article4 from "../screens/articles/Article4";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const SettingsStack = createStackNavigator();

export default function Settings() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        options={{
          headerTitleContainerStyle: {
            width: "48%",
          },
          headerTitleStyle: {
            // alignSelf: "left",
            fontFamily: "serif",
            fontWeight: "bold",
            fontSize: 22,
          },
          headerLeft: () => (
            <Ionicons
              name="ios-arrow-back"
              size={24}
              color="black"
              style={{ paddingHorizontal: 18 }}
            />
          ),
          headerRight: () => (
            <View style={{ flexDirection: "row" }}>
              <Feather
                name="headphones"
                size={24}
                color="black"
                style={{ paddingRight: 15 }}
              />
              <Feather 
                name="heart" 
                size={24} 
                color="black" 
                style={{ paddingRight: 15 }} />
              <Feather
                name="share-2"
                size={24}
                color="black"
                style={{ paddingRight: 18 }}
              />
            </View>
          ),
        }}
        name="Cars"
        component={Article4}
        style={{ paddingHorizontal: 18 }}
      />
    </SettingsStack.Navigator>
  );
}
