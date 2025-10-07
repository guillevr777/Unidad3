import { Text, View, Image, StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  card: {
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 16,
    margin: 36,
    borderColor: "#000",
    borderWidth: 6,
  },
});

export default function Index() {
  return (
    <View style={Styles.card}>
      <Image
        source={{
          uri: "https://m.media-amazon.com/images/S/pv-target-images/794ae47d1869a4787e2895ff409e58376e356702c79c38e9dbdf30cfb0dd6d8a._SX1080_FMjpg_.jpg",
        }}
        style={{ width: 164, height: 164, borderRadius: 9999 }}
      />
      <Text>MALAPALA</Text>
    </View>
  );
}
