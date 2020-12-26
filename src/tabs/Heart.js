import * as React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Article2 from "../screens/articles//Article2";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const HeartStack = createStackNavigator();

export default function Heart() {
  return (
    <HeartStack.Navigator>
      <HeartStack.Screen
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
        name="Slack For Friends"
        component={Article2}
      />
    </HeartStack.Navigator>
  );
}
