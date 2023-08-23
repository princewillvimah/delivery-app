import { View, Text ,StyleSheet, FlatList} from 'react-native';

import React,{useState} from 'react';
import restaurant from '../../assets/data/restaurants.json';
import BasketDishItem from '../component/BasketDishItem';
 const restarants = restaurant[0];
const Basket = () => {

  return (
    <View style={styles.page}>
      <Text style={styles.name}>{restarants.name}</Text>
      <Text style={styles.description}>{restarants.description}</Text>
      <View style={styles.seperator}/>

     <Text style={{fontWeight:'bold',marginTop:20,fontSize:19,}}> YOUR ITEM</Text>

    <FlatList data={restarants.dishes} renderItem={({item})=> <BasketDishItem bkt={item}/>}/>
      <View style={styles.button}>
      <Text style={styles.text}>Create Order</Text>
      
      </View>
    </View>
  )
}

const styles= StyleSheet.create({
    page:{
        width:'100%',
        paddingVertical:20,
        padding:10,
    },
    quantity:{
      fontSize:25,
    fontWeight:'bold',
    marginHorizontal:20,
    },
    row:{
       flexDirection:'row',
       alignItems:'center',
       marginTop:18,
    },
    name:{
        fontSize:25,
        fontWeight:'700',
        marginVertical:10,
    },
    seperator:{
        height:1,
        backgroundColor:'lightgrey',
        marginVertical:10,
    },
    button:{
        backgroundColor:'black',
        color:'white',
        marginTop:280,
        padding:20,
        alignItems:'center',
    },
    text:{
        color:'white',
        fontWeight:'600',
        fontSize:16,
    },
    con:{
      backgroundColor:'lightgrey',
      paddingHorizontal:5,
      margin:5,
      paddingVertical:2,
      borderRadius:2,
    }
})

export default Basket;