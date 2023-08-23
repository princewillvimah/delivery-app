import { View, Text ,StyleSheet, TouchableOpacity} from 'react-native';

import React,{useState} from 'react';
import restaurant from '../../assets/data/restaurants.json';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
 const dish = restaurant[0].dishes[0];

const DishDetailScreen = () => {
   const navigation= useNavigation();
    const [quantity, setQuantity]=useState(1);

    const GetTotal=()=>{
        return (dish.price* quantity).toFixed(2);
    }
  return (
    <View style={styles.page}>
      <Text style={styles.name}>{dish.name}</Text>
      <Text style={styles.description}>{dish.description}</Text>
      <View style={styles.seperator}/>

      <View style={styles.row}>
      <AntDesign name="minuscircleo" size={60} color="black" onPress={()=> {if (quantity >1){
        setQuantity(quantity-1)
      }}
     }/>
      <Text style={styles.quantity}>{quantity}</Text>
      <AntDesign  name="pluscircleo" size={60} color="black"onPress={()=> setQuantity(quantity+1)}/>
      </View>


      <TouchableOpacity onPress={()=> navigation.navigate('Basket')} style={styles.button}>
      <Text style={styles.text}>Add {quantity} to your shop chart now! ($ {GetTotal()})</Text>
      
      </TouchableOpacity>
    </View>
  )
}

const styles= StyleSheet.create({
    page:{
        width:'100%',
        paddingVertical:30,
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
       justifyContent:'center',
       marginTop:50,
    },
    name:{
        fontSize:30,
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
        marginTop:320,
        padding:20,
        alignItems:'center',
    },
    text:{
        color:'white',
        fontWeight:'600',
        fontSize:16,
    }
})

export default DishDetailScreen;