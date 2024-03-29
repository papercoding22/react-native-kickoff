import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';
import App from '@/App';

const Tab = createBottomTabNavigator();

const ExampleScreen = ({label}: {label: string}) => {
  return <Text>{label}</Text>;
};

const Settings = () => <ExampleScreen label="Settings" />;

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={App} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
