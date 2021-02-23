import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../HomeScreen/Index';
import Style from './Style'

const StackNav =() => {

  const Stack = createStackNavigator();


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={Style.headerOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
  
};

export default StackNav;