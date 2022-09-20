import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainScreen, SettingsScreen} from '../screens';
import {IC_NEWSPAPER, IC_SETTINGS} from '../assets/svg';
import {Colors} from '../constants';
import {useSelector} from 'react-redux';

const Tab = createBottomTabNavigator();

const DashboardTabs = () => {
    const {darkModeEnabled} = useSelector(state => state.reducer.settings);
    return (
        <>
            <Tab.Navigator
                screenOptions={({route}) => ({
                    tabBarStyle: {
                        backgroundColor: darkModeEnabled
                            ? Colors.BLACK.lightBlack
                            : Colors.WHITE.default,
                    },
                    tabBarActiveTintColor: Colors.LIGHT_BLUE.default,
                    tabBarInactiveTintColor: 'rgba(190,191,191,1)',
                    tabBarIcon: ({focused}) => {
                        if (route.name === 'News') {
                            return (
                                <IC_NEWSPAPER
                                    fill={
                                        focused ? Colors.LIGHT_BLUE.default : 'rgba(190,191,191,1)'
                                    }
                                />
                            );
                        } else {
                            return (
                                <IC_SETTINGS
                                    fill={
                                        focused ? Colors.LIGHT_BLUE.default : 'rgba(190,191,191,1)'
                                    }
                                />
                            );
                        }
                    },
                    tabBarShowLabel: true,
                    headerShown: false,
                })}>
                <Tab.Screen name="News" component={MainScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
        </>
    );
};

export default DashboardTabs;
