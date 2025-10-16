import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import MiBoton from '../app-example/components/MiBoton';

export default function App() {
  return (
    <View style={styles.container}>
      <MiBoton texto="Jugar" onPress={() => Alert.alert('Presionaste Jugar')} />
      <MiBoton texto="Opciones" onPress={() => Alert.alert('Presionaste Opciones')} />
      <MiBoton texto="Créditos" onPress={() => Alert.alert('Presionaste Créditos')} />
      <MiBoton texto="Salir" onPress={() => Alert.alert('Presionaste Salir')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
});
