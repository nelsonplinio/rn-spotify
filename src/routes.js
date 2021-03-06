import React from 'react';
import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Search from './pages/Search';
import YourLibery from './pages/YourLibery';
import Player from './pages/Player';

const App = createBottomTabNavigator();
const Stack = createStackNavigator();

function AppRoutes() {
  return (
    <App.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: '#282828',
        },
        activeTintColor: '#fff',
      }}
    >
      <App.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Foundation name="home" size={24} color={color} />
          ),
        }}
      />
      <App.Screen
        name="Search"
        component={Search}
        options={{
          title: 'Busca',
          tabBarIcon: ({ color }) => (
            <Feather name="search" size={24} color={color} />
          ),
        }}
      />
      <App.Screen
        name="YourLibery"
        component={YourLibery}
        options={{
          title: 'Biblioteca',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="library-music"
              size={24}
              color={color}
            />
          ),
        }}
      />
    </App.Navigator>
  );
}

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#191414',
        },
      }}
    >
      <Stack.Screen name="AppRoutes" component={AppRoutes} />
      <Stack.Screen name="Player" component={Player} />
    </Stack.Navigator>
  );
}
