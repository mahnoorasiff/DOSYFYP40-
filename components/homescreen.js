import * as React from 'react';
import { StyleSheet, Button, View, Text,  Image, TouchableOpacity, TextInput} from 'react-native';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from './LoginScreen';
import SignUp from './SignUp';




const Home = ({ navigation }) => {
  
    return (
<View>
        <Text style={{textAlign:"center", }}>
        HOME SCREEN
        </Text>
        
</View>
    )
}



export default Home;