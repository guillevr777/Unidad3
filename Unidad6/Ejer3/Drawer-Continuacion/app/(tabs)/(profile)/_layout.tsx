import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { createMaterialTopTabNavigator, MaterialTopTabBar } from "@react-navigation/material-top-tabs";
import { Ionicons } from "@expo/vector-icons";

export default function RootLayout() {
  return (
        <MaterialTopTabs
            screenOptions={{
               TopBarActiveTintColor: 'purple',
               TabBarIndicatorStyle: { backgroundColor: 'purple', height: 3 },
                TabBarLabelStyle: { fontWeight: 'bold'}
            }} 
        >   
         <MaterialTopTabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" color={color} size={size} />
                    ),
                }}
            />
            <MaterialTopTabs.Screen
                name="detalles"
                options={{
                    title: 'Detalles',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="settings" color={color} size={size} />
                    ),
                }}
            />
        </MaterialTopTabs>
    );
} 