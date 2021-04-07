import * as React from 'react';
import {   StyleSheet, Button, View, Text, ActivityIndicator, Image, ScrollView} from 'react-native';
import { FlatList, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useLinkProps } from '@react-navigation/native';



const LoginSignUp = ({ navigation }) => {
    return (
      
    <View>
      <View style={{ height:"50%"}} >
  <Image 
  style={{   resizeMode:'cover', width:"100%", height:820 }}
  source={require('../assets/collage.png')}/>
  </View>

<TouchableOpacity style={{...styles.button, position:'absolute', marginTop:420, backgroundColor:"#83a95c"}} 
  
  onPress={()=>navigation.navigate('LoginScreen')} activeOpacity={0.5}>
  <Text >Login with Email</Text>
  </TouchableOpacity>

<TouchableOpacity style={{...styles.button, position:'absolute', marginTop:480,  backgroundColor:"#83a95c"}} 

>
<Text >Login with Gmail</Text>
  </TouchableOpacity>

<TouchableOpacity style={{...styles.button, position:'absolute', marginTop:540, backgroundColor:"#83a95c"}}>
<Text style={{textAlign:'center'}} >Login with Facebook


</Text>
</TouchableOpacity>
  
<View style={{flexDirection:'row',height:"20%", marginTop:260}}>
  <Text style={{ height:200 , fontSize:14, marginStart:120}}>
  New Member? 
  </Text>
  <TouchableOpacity onPress={() => navigation.replace('SignUp')}>
          <Text style={styles.link}> Sign Up</Text>
  </TouchableOpacity>
  </View>
  </View>
  
    )
    }


    const styles = StyleSheet.create({

      button: {
        borderRadius:15,
        textAlign:"center",
        padding:15,
        width:250,
        height:50,
        alignContent:'center',
        alignItems:'center',
        marginRight:60,
        marginLeft:60,
        marginBottom:8
      },
      link: {
        fontWeight: 'bold',
        color: '#83a95c'
      },
      
        })


  export default LoginSignUp;