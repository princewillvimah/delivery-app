import { View, Text ,StyleSheet,Image,TouchableOpacity} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
const DishItem = ({dish}) => {
  const navigation=useNavigation();
  return (
    <TouchableOpacity onPress={()=>navigation.navigate('Dish',{id:dish.id})} style={styles.container}>
    <View style={styles.con}>
      <Text style={styles.name}>{dish.name}</Text>
      <Text style={styles.description} numberOfLines={1}>{dish.description}</Text>
      <Text style={styles.price}>${dish.price}</Text>
    </View>
    <Image source={{uri:dish.image}} style={styles.image}/>
    </TouchableOpacity>
  )
}
const styles=StyleSheet.create({
  container:{
    margin:10,
    borderBottomColor:'lightgrey',
    borderBottomWidth:1,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  con:{
    width:200,
  },
  name:{
   fontWeight:'600',
   fontSize:17,
  },
  description:{
  color:'grey',
  marginVertical:10,
  },
  price:{
   fontSize:16,
  },
  image:{
    width:90,
  aspectRatio:2/2
    
  }
})
export default DishItem;