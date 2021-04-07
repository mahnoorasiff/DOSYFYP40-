import * as React from 'react';
import {   StyleSheet, Button, View, Text, ActivityIndicator,
  TouchableOpacity, Image, AsyncStorage, ScrollView} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useState } from 'react';

import LoginScreen from "./components/LoginScreen";
import LoginSignUp from "./components/LoginSignUp";
import SignUp from './components/SignUp';
import Home from './components/homescreen';
import AppContainer from './src/navigations/AppNavigation';



const loginStack= createStackNavigator();
const LoginSignUpStack = () => {
  return (
<loginStack.Navigator initialRouteName="LoginSignUp"
          screenOptions={{
            headerShown: false,
          }}
        >

  <loginStack.Screen
  name="LoginSignUp"
  component={LoginSignUp}
  options={({ navigation }) => ({
    header:()=> null
  })
}
    />
  <loginStack.Screen
  name="LoginScreen"
  component={LoginScreen}
  options={({ navigation }) => ({
    header:()=>null

})
}
    />
  

  <loginStack.Screen
  name="SignUp"
  component={SignUp}
  options={({ navigation }) => ({
    header:()=> null
  })
}
    />

<loginStack.Screen
  name="HomeDrawer"
  component={HomeDrawer}
  options={({ navigation }) => ({
    header:()=> null
  })
}
    />


</loginStack.Navigator>
  )
}



const homestack= createStackNavigator();
const HomescreenStack = () => {
  return (
<homestack.Navigator initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >

  
</homestack.Navigator>
  )
}


const Drawer = createDrawerNavigator();
const HomeDrawer = () =>  {
      return (
        
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={Home}/>
            <Drawer.Screen name="Parent's Assistance"  component={Home}/>        
            <Drawer.Screen name="Assess Child"  component={Home}/>  
            <Drawer.Screen name="Get Fit"  component={AppContainer}/>
            <Drawer.Screen name="Know your object"  component={Home}/>
          </Drawer.Navigator>
      );
      }



      export default function App() {
        return (
    <NavigationContainer>
   <LoginSignUpStack/>
   </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  loadingContainer: {
    marginTop: 80,
    justifyContent: 'center'
  },
  text: {
    color: 'black',
    fontSize: 16
  },
  loadingModelContainer: {
    flexDirection: 'row',
    marginTop: 10
  },
  imageWrapper: {
    width: 280,
    height: 280,
    padding: 10,
    borderColor: '#cf667f',
    borderWidth: 5,
    borderStyle: 'dashed',
    marginTop: 40,
    marginBottom: 10,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    width: 250,
    height: 250,
    position: 'absolute',
    top: 10,
    left: 10,
    bottom: 10,
    right: 10
  },
  predictionWrapper: {
    height: 100,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center'
  },
  transparentText: {
    color: '#ffffff',
    opacity: 0.7
  },
  footer: {
    marginTop: 40
  },
  poweredBy: {
    fontSize: 20,
    color: '#e69e34',
    marginBottom: 6
  },
  tfLogo: {
    width: 125,
    height: 70
  }
});
