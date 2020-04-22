import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import Detail from './pages/Detail';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          title: 'Calcio',
          headerStyle: { backgroundColor: '#1E7A0E' },
          headerTintColor: '#FFF',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 24,
          },
        }}
      >
        <Stack.Screen
          name='Calcio'
          component={Main}
          options={{
            title: 'Calcio',
          }}
        />

        <Stack.Screen
          name='Category'
          component={Detail}
          options={({ route }) => ({
            title: `TORNEIO ${route.params.info.category}`,
            headerBackTitleVisible: false,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
