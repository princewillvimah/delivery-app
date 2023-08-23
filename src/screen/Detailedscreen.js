import { View, Text,StyleSheet ,Image, FlatList} from 'react-native';
import React from 'react';
import restaurant from '../../assets/data/restaurants.json';
import { AntDesign } from '@expo/vector-icons'; 
import DishItem from '../component/DishItem';
import Header from './Header';
import { useNavigation, useRoute } from '@react-navigation/native';
const Detailedscreen = () => {
    const route = useRoute();
    const id =route.params.id;
    const restaurants=restaurant.find(rest=> rest.id=== id);
  return (
    <View style={styles.page}>
    
     <FlatList
     ListHeaderComponent={()=><Header/>}
     data={restaurants.dishes}
     renderItem={({item})=> <DishItem dish={item}/>}
     />
    </View>
  )
}
const styles=StyleSheet.create({
page:{
  
},
image:{
    width:'100%',
    aspectRatio:5/3,
},
title:{
    fontSize:35,
    fontWeight:'600',
    marginVertical:5,
    margin:10,
},
Subtitle:{
  marginVertical:1,
    fontSize:15,
    color:'grey',
    margin:10,
},
iconCon:{
    backgroundColor:'white',
    padding: 10,
    position: 'absolute',
    top:40,
    left:14,
    borderRadius:50,
    alignItems:'center',
    justifyContent:'center',
}


})
export default Detailedscreen;