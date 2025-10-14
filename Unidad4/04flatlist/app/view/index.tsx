import { Text, View, FlatList, StyleSheet} from "react-native";
import IndexVM from "../Model/ViewModel/IndexVM";

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
      data={new IndexVM().getPersonas()}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item}) => (
        <View style={styles.item}>
          <Text style={styles.text}>{item.nombre} {item.apellido}</Text>
        </View>
    )}
    />
  )
}