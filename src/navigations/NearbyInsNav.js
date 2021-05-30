/* import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer' */

/*
import CitiesList from "../screens/Categories/CitiesList";
import Schoolinfo from "../screens/Recipe/Schoolinfo";
import SchoolNames from "../screens/RecipesList/SchoolNames";
import Schoolmap from "../screens/IngredientsDetails/Schoolmap";
*/

import * as React from 'react';
import { StyleSheet, Button, View, Text, Image, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import CitiesList from "../screens/Categories/CitiesList";
import Schoolinfo from "../screens/Recipe/Schoolinfo";
import SchoolNames from "../screens/RecipesList/SchoolNames";
import Schoolmap from "../screens/IngredientsDetails/Schoolmap";

const instack = createStackNavigator();
const InstScreenStack = ({ route, navigation }) => {
    return (
        <instack.Navigator initialRouteName="CitiesList"
            screenOptions={{
                //headerShown: false,
            }}
        >

            <instack.Screen
                name="Citieslist"
                component={CitiesList}
               
                
            />

            <instack.Screen
                name="SchoolInfo"
                component={Schoolinfo}
                
            />

            <instack.Screen
                name="SchoolNames"
                component={SchoolNames}
              
            />

            <instack.Screen
                name="SchoolMaps"
                component={Schoolmap}
                options={({ navigation }) => ({
                    header: () => null
                })
                }
            />
        </instack.Navigator>


    )
}

export default class NearbyInsNav extends React.Component {
    render() {
        return (
            <InstScreenStack />
        );
    }
}
