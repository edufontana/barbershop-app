import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Home} from '../pages/Home';
import {Search} from '../pages/Search';
import {Appointments} from '../pages/Appointments';
import {Favorites} from '../pages/Favorites';
import {Profile} from '../pages/Profile';
import {CustomTabBar} from '../components/CustomTabBar';

export const MainTab = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen name={'Home'} component={Home} />
      <Tab.Screen name={'Search'} component={Search} />
      <Tab.Screen name={'Appointments'} component={Appointments} />
      <Tab.Screen name={'Favorites'} component={Favorites} />
      <Tab.Screen name={'Profile'} component={Profile} />
    </Tab.Navigator>
  );
};
