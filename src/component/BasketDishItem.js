import { View, Text ,StyleSheet, FlatList} from 'react-native';

import React,{useState} from 'react';


const BasketDishItem =({bkt})=>{
  return(
    <View style={styles.row}>
    <View style={styles.con}>
    <Text>1</Text>
    </View>
    <Text style={{fontWeight:'bold'}}>{bkt.name}</Text>
    <Text style={{marginLeft:'auto'}}> ${bkt.price}</Text>
    </View>
  )
}
const styles= StyleSheet.create({
    page:{
        width:'100%',
        paddingVertical:20,
        padding:10,
    },
  
    row:{
       flexDirection:'row',
       alignItems:'center',
       marginTop:18,
    },
    con:{
      backgroundColor:'lightgrey',
      paddingHorizontal:5,
      margin:5,
      paddingVertical:2,
      borderRadius:2,
    }
})
export default BasketDishItem;