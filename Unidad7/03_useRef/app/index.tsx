import React, { useRef, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Animated } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function ScrollWithFab() {
  const scrollRef = useRef<FlatList>(null);
  const [showButton, setShowButton] = useState(false);

  // Lista larga con 100 elementos
  const data = Array.from({ length: 100 }, (_, i) => `Elemento ${i + 1}`);

  const handleScroll = (event: any) => {
    const y = event.nativeEvent.contentOffset.y;
    setShowButton(y > 300);
  };

  const scrollToTop = () => {
    scrollRef.current?.scrollToOffset({ offset: 0, animated: true });
  };

  return (
    <View style={{ flex: 1 }}>
      {/* FLATLIST */}
      <FlatList
        ref={scrollRef}
        data={data}
        keyExtractor={(item) => item}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 20,
              borderBottomWidth: 1,
            }}
          >
            <Text>{item}</Text>
          </View>
        )}
      />

      {/* FAB */}
      {showButton && (
        <TouchableOpacity
          onPress={scrollToTop}
          style={{
            position: "absolute",
            bottom: 30,
            right: 20,
            backgroundColor: "#333",
            padding: 15,
            borderRadius: 40,
            elevation: 6,
          }}
        >
          <Ionicons name="arrow-up" size={24} color="white" />
        </TouchableOpacity>
      )}
    </View>
  );
}
