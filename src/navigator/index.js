import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import DashboardTabs from './DashboardTabs';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="DashboardTabs" component={DashboardTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
