import * as React from 'react';
import { StyleSheet, Button, View, Text,  Image, TouchableOpacity, TextInput} from 'react-native';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from './LoginScreen';
import SignUp from './SignUp';




const Home = ({ navigation }) => {
  
    return (
<View style={{backgroundColor:"#FFDAC1", height:"100%"}}>
        <Text style={{textAlign:"center", fontWeight:"bold", fontSize:65}}>
        HOME SCREEN
        </Text>
        
</View>
    )
}



export default Home;