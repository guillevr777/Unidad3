import React, { useState } from "react";
import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";
import { PersonasViewModel } from "./ViewModel/PersonasViewModel";
import { Persona } from "./Models/Entities/Persona";

export default function PersonasView() {
  const [vm] = useState(new PersonasViewModel());

  const handlePress = (persona: Persona) => {
    vm.personaSeleccionada = persona;
    vm.mostrarPersonaSeleccionada();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Listado de Personas</Text>

      <FlatList
        data={vm.personas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable style={styles.item} onPress={() => handlePress(item)}>
            <Text style={styles.texto}>
              {item.nombre} {item.apellidos}
            </Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  titulo: {
    color: "#fff",
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
  },
  item: {
    backgroundColor: "#4CAF50",
    padding: 12,
    borderRadius: 8,
    marginVertical: 5,
    width: 250,
    alignItems: "center",
  },
  texto: {
    color: "#fff",
    fontSize: 16,
  },
});