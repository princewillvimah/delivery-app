import { View, Text,StyleSheet ,Image, TouchableOpacity} from 'react-native';
import React from 'react';
import restaurant from '../../assets/data/restaurants.json';
import { AntDesign } from '@expo/vector-icons'; 

import DishItem from '../component/DishItem';
import { useNavigation } from '@react-navigation/native';
const Header = () => {
    const restaurants=restaurant[0];
    const navigation=useNavigation();
  return (
    <View style={styles.page}>
      <Image
      source={{uri: restaurants.image}}
      style={styles.image} resizeMode='cover'
      />

      <TouchableOpacity onPress={()=> navigation.goBack()} style={styles.iconCon}>
      <AntDesign name="back" size={24} color="black" />
      </TouchableOpacity>
  
    <View>
      <Text style={styles.title}>{restaurants.name}</Text>
      <Text style={styles.Subtitle}>$ {restaurants.deliveryFee} {restaurants.minDeliveryTime}-{restaurants.maxDeliveryTime} minutes</Text>
    
    <Text style={styles.menu}>Menu</Text>
      </View>
    </View>
  )
}
const styles=StyleSheet.create({
page:{
  
},
menu:{
marginTop:20,
marginHorizontal:10,
letterSpacing:0.7,
fontSize:18,
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
export default Header;