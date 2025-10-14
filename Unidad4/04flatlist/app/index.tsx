import { Text, View, FlatList, StyleSheet} from "react-native";
import Persona from "./Model/Data/RepositorioPersona";

//#region styles
const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    alignItems : 'center'
  },  
  text: {
    fontSize: 18
  }
})
//#endregion

export default function Index() {
  return (
    <FlatList
    data={Persona.getPersonas()}
    keyExtractor={(item) => item.getId().toString()}
    renderItem={({item}) => (
      <View style = {styles.item}>
        <Text style = {styles.text}>{item.getNombre()} {item.getApellido()}</Text>
      </View>
    )}
    />
  )
}