import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainScreen} from '../screens';
import {IC_NEWSPAPER, IC_SETTINGS} from '../assets/svg';

const Tab = createBottomTabNavigator();

const DashboardTabs = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarActiveTintColor: 'rgba(0,157,255,1)',
          tabBarInactiveTintColor: 'rgba(190,191,191,1)',
          tabBarIcon: ({focused}) => {
            if (route.name === 'News') {
              return (
                <IC_NEWSPAPER
                  fill={focused ? 'rgba(0,157,255,1)' : 'rgba(190,191,191,1)'}
                />
              );
            } else {
              return (
                <IC_SETTINGS
                  fill={focused ? 'rgba(0,157,255,1)' : 'rgba(190,191,191,1)'}
                />
              );
            }
          },
          tabBarShowLabel: true,
          headerShown: false,
        })}>
        <Tab.Screen name="News" component={MainScreen} />
        <Tab.Screen name="Settings" component={MainScreen} />
      </Tab.Navigator>
    </>
  );
};

export default DashboardTabs;
