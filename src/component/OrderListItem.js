import { View, Text,StyleSheet, Image ,TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const OrderListItem = ({order}) => {
  const navigation=useNavigation();
  return (
    <TouchableOpacity onPress={()=>navigation.navigate('Order')} style={{flexDirection:'row', margin:10,alignItems:'center'}}>
      <Image source={{uri:order.Restaurant.image}} style={{width:100,height:80,marginRight:5}}/>

      <View>
        <Text style={{fontWeight:'600',fontSize:16}}>{order.Restaurant.name}</Text>
        <Text style={{marginVertical:5}}>3 Items &#8226; $34.60</Text>
        <Text>2days ago &#8226; {order.status}</Text>
      </View>
    </TouchableOpacity>
  )
}
const styles= StyleSheet.create({

})

export default OrderListItem;