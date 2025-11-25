import React from "react";
import { Tabs } from "expo-router";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function RootLayout() {
  return (
    <Tabs
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: { 
            backgroundColor: '#f0f0f0',
            borderTopColor: '#222',
            height: 60
            }
        }}
    >   
     <Tabs.Screen
            name="index"
            options={{
                title: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="home" color={color} size={size} />
                ),
            }}
        />
        <Tabs.Screen
            name="(profile)/index"
            options={{
                title: 'Perfil',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="person" color={color} size={size} />
                ),
            }}
        />
        <Tabs.Screen
            name="settings"
            options={{
                title: 'Configuracion',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="settings" color={color} size={size} />
                ),
            }}
        />
    </Tabs>
  );
}   