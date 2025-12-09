import { observer } from "mobx-react-lite";
import React, { useRef } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { container } from "../../core/container";
import { TYPES } from "../../core/types";
import { Persona } from "../../domain/entities/Persona";
import { PeopleListVM } from "../viewmodel/indexVM";


// Componente PeopleList
const PeopleList = observer( () => {
    // Crear una referencia que almacenará el VM
    const vmRef = useRef<PeopleListVM | null>(null);

    // Instanciar el VM solo si no existe
    if (vmRef.current === null) {
        vmRef.current = container.get<PeopleListVM>(TYPES.IndexVM);
    }

    // Acceder a la instancia persistente
    const viewModel = vmRef.current;
    
    // Función para renderizar cada elemento de la lista
    const renderItem = ({ item }: { item: Persona }) => {
        // Verificar si el ítem actual es el seleccionado para aplicar estilos
        const isSelected = viewModel.personaSeleccionada && viewModel.personaSeleccionada.id === item.id;
        
        return (
            <Pressable
                // Estilo condicional: aplica 'item' y 'itemSeleccionado' si está seleccionado
                style={({ pressed }) => [
                    styles.item,
                    pressed && styles.itemPresionado, // Efecto al presionar (temporal)
                    isSelected && styles.itemSeleccionado // Estilo permanente si está seleccionado
                ]}
                onPress={() => { viewModel.personaSeleccionada = item; }}
            >
                <View>
                    <Text style={styles.itemNombre}>{item.nombre}</Text>
                    <Text style={styles.itemApellidos}>{item.apellidos}</Text>
                </View>
                {/* Indicador visual de selección */}
                {isSelected && <View style={styles.seleccionIndicator} />}
            </Pressable>
        );
    };


    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.headerTitle}>Listado de Personas</Text>
            
            {/* Contenedor de la persona seleccionada (bonito) */}
            <View style={styles.selectedPersonaBox}>
                <Text style={styles.selectedPersonaLabel}>Seleccionada:</Text>
                <Text style={styles.selectedPersonaName}>
                    {viewModel.personaSeleccionada.nombre} {viewModel.personaSeleccionada.apellidos}
                </Text>
            </View>

            <FlatList
                data={viewModel.personasList}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                ListEmptyComponent={() => (
                    <Text style={styles.textoVacio}>No hay personas registradas</Text>
                )}
            />
        </SafeAreaView>
    );
});

// 🎨 Estilos Bonitos (Modernos y Limpios)
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F0F4F8", // Fondo gris claro moderno
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    headerTitle: {
        fontSize: 26,
        fontWeight: "700",
        color: "#102A43", // Azul oscuro para contraste
        marginBottom: 20,
        textAlign: "center",
    },
    // Estilo para mostrar la persona seleccionada
    selectedPersonaBox: {
        backgroundColor: "#E3F2FD", // Azul claro sutil
        padding: 15,
        borderRadius: 12,
        marginBottom: 20,
        borderLeftWidth: 5,
        borderLeftColor: "#2196F3", // Línea de acento azul
        flexDirection: 'row',
        alignItems: 'center',
    },
    selectedPersonaLabel: {
        fontSize: 14,
        fontWeight: "600",
        color: "#4A6572",
        marginRight: 8,
    },
    selectedPersonaName: {
        fontSize: 16,
        fontWeight: "700",
        color: "#2196F3",
    },
    // Estilo del ítem de la lista
    item: {
        backgroundColor: "#FFFFFF",
        padding: 15,
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // Sombra suave para efecto "flotante"
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    // Estilo al presionar (animación temporal)
    itemPresionado: {
        backgroundColor: "#F8FAFC", // Cambio sutil al tocar
        opacity: 0.8,
    },
    // Estilo permanente del ítem seleccionado
    itemSeleccionado: {
        backgroundColor: "#BBDEFB", // Azul claro más fuerte para indicar selección
        borderWidth: 2,
        borderColor: "#2196F3",
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 5,
    },
    itemNombre: {
        fontSize: 17,
        fontWeight: "600",
        color: "#333",
    },
    itemApellidos: {
        fontSize: 14,
        color: "#666",
        marginTop: 4,
    },
    // Separador con color del fondo
    separator: {
        height: 10,
        backgroundColor: 'transparent',
    },
    // Indicador visual de la selección dentro del ítem
    seleccionIndicator: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: "#2196F3", // Círculo azul como 'check'
    },
    textoVacio: {
        textAlign: "center",
        marginTop: 50,
        fontSize: 16,
        color: "#90A4AE", // Gris azulado
    },
    // Los estilos input y los viejos 'titulo' 'itemText' se eliminaron o reemplazaron para la nueva estética.
});


export default PeopleList;