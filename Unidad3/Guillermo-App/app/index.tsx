import { Text, View, Button } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hola mundo!</Text>
      <Button title="Press me" onPress={() => alert("Hello, world!")} /> 
    </View>
  );
}
