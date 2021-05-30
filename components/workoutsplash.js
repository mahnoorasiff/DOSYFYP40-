import React, { Component } from 'react';
import Constants from 'expo-constants';
import { View, Text, Image, TouchableOpacity, StyleSheet,  Dimensions, Switch,  Platform, ImageBackground } from 'react-native';


class WOSplash extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    }
  }

  render() {
      return (
        <View style={styles.container}>
           <ImageBackground
           style={styles.background}
            source={require("./screenspics/workoutsplash.png")}>
            
<TouchableOpacity style={styles.button} onPress={()=>{
    this.props.navigation.navigate('Workout screen')}}>
<Text style={styles.text}>Get Started</Text>
</TouchableOpacity>
</ImageBackground>
        </View>
      );
    
   
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#96c5c5", //pastel green background
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    
    padding: 0,
    flex:1
    
  },

  background: {
    marginTop:10,
      width:Dimensions.get('window').width+10,
      height:Dimensions.get('window').height,
      justifyContent:"center",
      alignItems:"center"

  },
  
  button:
  {
    marginTop:Dimensions.get('window').height-175,
    marginRight:15,
     height:60,
     letterSpacing:0.4,
     backgroundColor:'#ff7735',
     width:'45%' ,
     borderRadius:35,
     alignItems:'center',
     justifyContent:'center',
     opacity:0.88,
     

  },
  text:
  {
      // fontFamily: 'LatoBold', 
      fontSize: 20, 
      textAlign: 'center' ,
      color:'#fff' 
  }
  
  });

export default WOSplash;