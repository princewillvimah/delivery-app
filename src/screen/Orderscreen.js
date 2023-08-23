import { View, Text,StyleSheet ,FlatList} from 'react-native';
import React from 'react';
import OrderListItem from '../component/OrderListItem';
import orders from '../../assets/data/orders.json';

const Orderscreen = () => {
  return (
    <View style={{width:'100%',paddingTop:10,}}>
     <FlatList data={orders} renderItem={({item})=><OrderListItem order={item}/>}/>
    </View>
  )
}

const styles=StyleSheet.create({

})

export default Orderscreen;