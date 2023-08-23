import { View, Text ,StyleSheet,Image, TouchableOpacity} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';


const Restaurant= ({restarants})=>{
  const navigation=useNavigation();
    return(
      <TouchableOpacity onPress={()=> navigation.navigate('resturarant',{id:restarants.id})} style={styles.ResturantContainer}>
        <Image source={{uri:restarants.image}}
        style={styles.image}
        />

        <View style={styles.row}>
        <View>
        <Text style={styles.Title}>{restarants.name}</Text>
        <Text style={styles.Subtitle}>$ {restarants.deliveryFee} {restarants.minDeliveryTime}-{restarants.maxDeliveryTime} minutes</Text>
        
        </View>

        <View style={styles.rating}>
        <Text>{restarants.rating}</Text>
        </View>

        </View>
       
       
      </TouchableOpacity>
    
    )
  }

const styles= StyleSheet.create({
   
      image:{
      width:'100%',
      aspectRatio: 5/3,
      marginBottom:5,
      },
      ResturantContainer:{
        width:'100%',
        marginVertical:10,
      },
      Title:{
      fontSize: 18,
      fontWeight:'500',
      marginVertical:5,
      },
      Subtitle:{
       color:'grey'
      },
      row:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
      },
      rating:{
        backgroundColor:'lightgrey',
        width:30,
        height:30,
        alignItems:'center',
        borderRadius:20,
        justifyContent:'center'
      }
})

export default Restaurant;