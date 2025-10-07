import { Background } from "@react-navigation/elements";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.text}>Header</Text>
      </View>
      <View style={styles.Background}>
        <Text style={styles.text}>Background</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.text}>Footer</Text>
      </View>
      <View style={styles.rigth}>
        <Text style={styles.text}>Right</Text>
      </View>
      <View style={styles.left}>
        <Text style={styles.text}>Left</Text>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: '#ffffff',
  },
  header: {
    height: "5%",
    fontSize: 100,
    alignItems: 'center',
    backgroundColor: '#ff0000ff',
  },
  Background: {
    height: "80%",
    alignItems: "center",
    backgroundColor: "#444141ff",
  },
  footer: {
    height: "5%",
    fontSize: 100,
    alignItems: 'center',
    backgroundColor: '#00ff00ff',
  },
  rigth: {
    flexDirection: 'row-reverse',
    fontSize: 100,
    alignItems: 'center',
    backgroundColor: '#0000ffff',
  },
  left: {
    flexDirection: 'row',
    fontSize: 100,
    alignItems: 'center',
    backgroundColor: '#ffff00ff',
  },
});