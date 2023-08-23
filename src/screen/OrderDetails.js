import { View, Text ,StyleSheet,Image ,FlatList} from 'react-native'
import React from 'react'
import order from '../../assets/data/orders.json';
import { AntDesign } from '@expo/vector-icons'; 
import rest from '../../assets/data/restaurants.json';
import OrderListItem from '../component/OrderListItem';
import BasketDishItem from '../component/BasketDishItem';
const orders = order[0];

const OrderDetailsHeader = () => {
  return (
    <View>
    <View style={styles.page}>
    <Image
    source={{uri: orders.Restaurant.image}}
    style={styles.image} resizeMode='cover'
    />

  <View>
    <Text style={styles.title}>{orders.Restaurant.name}</Text>
    <Text style={styles.Subtitle}>{orders.status} &#8226; 2days ago</Text>
  
  <Text style={styles.menu}>Your Orders</Text>
    </View>
  </View>
    </View>
  )
}
const OrderDetails=()=>{
    return(
        
     <FlatList data={rest[0].dishes} ListHeaderComponent={OrderDetailsHeader} renderItem={({item})=> <BasketDishItem bkt={item}/>}/>
    )
}
const styles= StyleSheet.create({
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

export default OrderDetails;