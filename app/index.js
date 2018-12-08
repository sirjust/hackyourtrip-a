import React, {Component} from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import AppNavigator from '../config/navigation';
import HomeScreen from "../screens/HomeScreen";

class index extends Component
{
    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });
    }

    render()
    {
        return (
          <AppNavigator/>
        );
    }
}


export default index;