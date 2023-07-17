/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfilePage from './components/ProfilePage';
import Name from './components/Name';
import DataProvider from './components/SharedDataProvide';
import Phone from './components/Phone';
import Email from './components/Email';
import Bio from './components/Bio';
import ProfilePhoto from './components/ProfilePhoto';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <DataProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='ProfilePage' component={ProfilePage} />
          <Stack.Screen name='Name' component={Name} />
          <Stack.Screen name='Phone' component={Phone} />
          <Stack.Screen name='Email' component={Email} />
          <Stack.Screen name='Bio' component={Bio} />
          <Stack.Screen name='ProfilePhoto' component={ProfilePhoto} />
        </Stack.Navigator>
      </NavigationContainer>
    </DataProvider>
  )
};

export default App;

 

 