import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileScreen = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Nombre: Juan Pérez</Text>
            <Text>Email: juan.perez@email.com</Text>
        </View>
    );
};

export default ProfileScreen;