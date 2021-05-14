import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import BookDonateScreen from '../Screens/bookDonateScreen'
import BookRequestScreen from '../Screens/bookRequestScreen'
import { createBottomTabNavigator } from 'react-navigation-tabs';

export const AppTabNavigator=createBottomTabNavigator({
    DonateBooks: {
        screen: BookDonateScreen,
        navigationOption: {
            tabBarLabel: "Book Donation"
        }
    },
    BookRequest: {
        screen: BookRequestScreen,
        navigationOption: {
            tabBarLabel: "Book Request"
        }
    }
})