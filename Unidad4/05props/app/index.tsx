import { View, Alert, StyleSheet } from 'react-native';
import MyButton from '/app-example/components/MyButtom.js';

export default function App() {
  return (
    <View style={styles.container}>
      <MyButton text="Iniciar" onPress={() => Alert.alert('Iniciar presionado')} />
      <MyButton text="Opciones" onPress={() => Alert.alert('Opciones presionado')} />
      <MyButton text="Créditos" onPress={() => Alert.alert('Créditos presionado')} />
      <MyButton text="Salir" onPress={() => Alert.alert('Salir presionado')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
