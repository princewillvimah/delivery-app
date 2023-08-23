import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, View } from 'react-native';
import Restaurant from '../component/Restaurant';
import restarants from '../../assets/data/restaurants.json';



export default function Homescreen(){
  return (
    <View style={styles.container}>
    
      <FlatList
      data={restarants}
      renderItem={({item})=> <Restaurant restarants={item}/>}
      showsVerticalScrollIndicator={false}
      />
    </View>
  );
}


const styles = StyleSheet.create({

  container:{
    padding:10,
  }
});
