import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ImagenConTitulo from '../app-example/components/ImgaenConTitulo.js';

export default function App() {
  const imagenes = [
    { uri: 'https://images.unsplash.com/photo-1617764188354-9bf4806be0aa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9udGElQzMlQjFhJTIwZGUlMjBoaWVsb3xlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000', titulo: 'Montañas Nevadas' },
    { uri: 'https://lonelyplanetes.cdnstatics2.com/cdn/ff/GW40qmQyaQiq87nsjxGM8ATKsOqzXQi6FfwvNYmLr_g/1726123973/public/styles/1536x864_scale_crop/public/blog/PolinesiaFrancesa_playaRangiroa_GettyRF_524891702_Vpommeyrol_Getty%20Images_0.jpg?itok=Apc-6vs2', titulo: 'Playa Tropical' },
    { uri: 'https://www.conmishijos.com/assets/posts/2000/2366-el-bosque-encantado-cuentos-cortos-para-ninos.jpg', titulo: 'Bosque Encantado' },
    { uri: 'https://static.vecteezy.com/system/resources/previews/047/356/117/non_2x/golden-hour-a-desert-landscape-basks-in-tranquility-photo.jpeg', titulo: 'Desierto Dorado' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {imagenes.map((item, index) => (
        <ImagenConTitulo key={index} imagen={item.uri} titulo={item.titulo} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
  },
});
