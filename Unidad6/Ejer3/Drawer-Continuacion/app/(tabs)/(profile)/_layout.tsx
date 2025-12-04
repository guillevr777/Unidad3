import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Ionicons } from "@expo/vector-icons";

// IMPORTA TUS PANTALLAS
import IndexScreen from "./index";
import DetallesScreen from "./detalles";

const Tab = createMaterialTopTabNavigator();

export default function RootLayout() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="index"
        component={IndexScreen}
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" color={color} size={20} />
          ),
        }}
      />

      <Tab.Screen
        name="detalles"
        component={DetallesScreen}
        options={{
          title: "Detalles",
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings" color={color} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
