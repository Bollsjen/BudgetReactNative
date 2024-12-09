/*import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "../app/(tabs)/index";
import TransactionsScreen from '../app/(tabs)/transactions';
import AddTransactionsScreen from '../app/(tabs)/AddTransaction';

const TabNavigator : React.FC<any> = ({state}) => {
    const Stack = createStackNavigator();
    const Tab = createBottomTabNavigator();
  
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Transactions" component={TransactionsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Add Transactions" component={AddTransactionsScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    );
  }

export default TabNavigator
  */