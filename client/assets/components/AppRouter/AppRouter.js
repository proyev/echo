import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Player from '../Player/Player';
import Library from '../Library/Library';

const { Navigator, Screen } = createStackNavigator();

export default function AppRouter() {

  return (
    <NavigationContainer>
      <Navigator
        headerMode='none'
        initialRouteName='Player'
      >
        <Screen
          name='Player'
          component={Player}
          options={{
            gestureDirection: 'vertical-inverted'
          }}
        />
        <Screen
          name='Library'
          component={Library}
          options={{
            gestureDirection: 'vertical'
          }}
        />
      </Navigator>
    </NavigationContainer>

  )


}