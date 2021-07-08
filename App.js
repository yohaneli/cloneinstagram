import React from 'react';
import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Detail from './Components/Detail';
import Feed from './Components/Feed';
import Login from './Components/Login';
import Register from './Components/Register';

const Stack = createStackNavigator();


const App = () => {

  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Register" component={Register} /> 
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Feed" component={Feed} />
          <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>

    </NavigationContainer>
  )
}

export default App
