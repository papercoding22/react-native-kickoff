import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BottomTabNavigator from './BottomTabNavigator';
import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const RootStack = createNativeStackNavigator();

function ModalScreen() {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30}}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}

/**
 * Root navigator of the app.
 *
 * @returns {React.ReactElement} Root navigator.
 */
function AppNavigator() {
  return (
    <RootStack.Navigator>
      <RootStack.Group screenOptions={{headerShown: false}}>
        <RootStack.Screen name="Root" component={BottomTabNavigator} />
      </RootStack.Group>
      <RootStack.Group screenOptions={{presentation: 'modal'}}>
        <RootStack.Screen name="MyModal" component={ModalScreen} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
}

export default AppNavigator;
