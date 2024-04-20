import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Icon } from 'ui-kitten/components';
import Home from '../screens/home';
import Map from '../screens/map';
import Resources from '../screens/resources';
import Schedule from '../screens/schedule';
import Settings from '../screens/settings';

const { Navigator, Screen } = createBottomTabNavigator();

const Navbar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab
      title="Home"
      icon={props => <Icon {...props} name="calendar-outline" />}
    />
    <BottomNavigationTab
      title="Map"
      icon={props => <Icon {...props} name="plus-outline" />}
    />
    <BottomNavigationTab
      title="Resources"
      icon={props => <Icon {...props} name="clock-outline" />}
    />
    <BottomNavigationTab
      title="Schedule"
      icon={props => <Icon {...props} name="edit-2-outline" />}
    />
    <BottomNavigationTab
      title="Settings"
      icon={props => <Icon {...props} name="edit-2-outline" />}
    />
  </BottomNavigation>
);

export const TabNavigator = () => (
  <Navigator tabBar={props => <Navbar {...props} />} screenOptions={{ headerShown: false }}>
    <Screen name="Home" component={Home} />
    <Screen name="Map" component={Map} />
    <Screen name="Resources" component={Resources} />
    <Screen name="Schedule" component={Schedule} />
    <Screen name="Settings" component={Settings} />
  </Navigator>
);

