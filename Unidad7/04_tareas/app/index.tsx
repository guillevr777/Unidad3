import React, { useReducer, useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';

//
// 📌 TYPES
//
interface Task {
  id: number;
  text: string;
  completed: boolean;
}

type State = Task[];

type Action =
  | { type: 'ADD'; payload: { text: string } }
  | { type: 'TOGGLE'; payload: { id: number } }
  | { type: 'REMOVE'; payload: { id: number } };

//
// 📌 INITIAL STATE
//
const initialState: State = [
  { id: 1, text: 'Ejemplo de tarea', completed: false }
];

//
// 📌 REDUCER
//
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload.text,
          completed: false,
        },
      ];

    case 'TOGGLE':
      return state.map(task =>
        task.id === action.payload.id
          ? { ...task, completed: !task.completed }
          : task
      );

    case 'REMOVE':
      return state.filter(task => task.id !== action.payload.id);

    default:
      return state;
  }
}

//
// 📌 COMPONENT
//
export default function TodoApp() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (!text.trim()) return;
    dispatch({ type: 'ADD', payload: { text } });
    setText('');
  };

  return (
    <View style={{ flex: 1, padding: 20, marginTop: 40 }}>
      {/* Input + botón */}
      <TextInput
        placeholder="Nueva tarea..."
        value={text}
        onChangeText={setText}
        style={{
          borderWidth: 1,
          padding: 10,
          marginBottom: 10
        }}
      />
      <Button title="Agregar" onPress={handleAdd} />

      {/* Lista de tareas */}
      <FlatList
        data={state}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 10,
              borderBottomWidth: 1,
              marginTop: 10
            }}
          >
            <Text style={{ textDecorationLine: item.completed ? 'line-through' : 'none' }}>
              {item.text}
            </Text>

            <View style={{ flexDirection: 'row', gap: 10 }}>
              {/* Completar / Deshacer */}
              <TouchableOpacity
                onPress={() => dispatch({ type: 'TOGGLE', payload: { id: item.id } })}
              >
                <Text style={{ color: 'blue' }}>
                  {item.completed ? 'Deshacer' : 'Completar'}
                </Text>
              </TouchableOpacity>

              {/* Eliminar */}
              <TouchableOpacity
                onPress={() => dispatch({ type: 'REMOVE', payload: { id: item.id } })}
              >
                <Text style={{ color: 'red' }}>Eliminar</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}
