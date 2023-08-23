import { HeaderStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Homescreen from '../screen/Homescreen';
import Detailedscreen from '../screen/Detailedscreen';
import OrderDetails from '../screen/OrderDetails';
import Basket from '../screen/Basket';
import Orderscreen from '../screen/Orderscreen';
import DishDetailScreen from '../screen/DishDetailScreen'
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
        <Stack.Screen name="Resturant" component={BottomTabNav} options={{
          headerShown:false,
        }} />
        <Stack.Screen name="DetailedScreen" component={DishDetailScreen} options={{
            headerShown:false,
        }}/>
          
        </Stack.Navigator>
      );
}


// this is the bottoooommmm tab screenn


const Tab = createMaterialBottomTabNavigator();
const BottomTabNav=()=>{
  return (
    <Tab.Navigator barStyle={{ backgroundColor: 'white',paddingBottom:-3 }}
    activeColor="red"
    inactiveColor="black"
    >
      <Tab.Screen name="Home" component={HomeStackCom}  options={{
        tabBarIcon:({color})=><Feather name="home" size={24} color={color} />
      }}/>
      <Tab.Screen name="orders" component={OrderStackCom}
      options={{
        tabBarIcon:({color})=><FontAwesome name="first-order" size={24} color={color} /> 
      }}/>
      <Tab.Screen name="Profile" component={OrderDetails} options={{
        tabBarBadge:false,
        tabBarIcon:({color})=><AntDesign name="profile" size={24} color={color} /> 
      }} />
    </Tab.Navigator>
  );
}


// this is for my homestack ooo

const HomeStack = createStackNavigator();

const HomeStackCom = () => {
    return (
        <HomeStack.Navigator>
        <HomeStack.Screen name="Resturant" component={Homescreen}  />
        <HomeStack.Screen name="resturarant" component={Detailedscreen} options={{
          headerShown:false,
        }} />
        <HomeStack.Screen name="Dish" component={DishDetailScreen} />
        
        <HomeStack.Screen name="Basket" component={Basket} />
          
        </HomeStack.Navigator>
      );
}

// this is for the OrderStack oooooooo
const OrderStack = createStackNavigator();

const OrderStackCom = () => {
    return (
        <OrderStack.Navigator>
        <OrderStack.Screen name="Orders" component={Orderscreen} />
        
        <OrderStack.Screen name="Order" component={OrderDetails} />
          
        </OrderStack.Navigator>
      );
}


export default Router;