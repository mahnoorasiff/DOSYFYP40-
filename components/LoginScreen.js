import * as React from 'react';
import {   StyleSheet, Button, View, Text, ActivityIndicator, Image, TextInput, TouchableOpacity} from 'react-native';
import { useState } from 'react';



const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState({value:''});
    const [password, setPassword] = useState({ value:''})

  
    return (
      <View style={styles.container}>
    <View style={{flexDirection:'row', alignItems:'center',justifyContent:'space-around',height:'40%'}}>
  <Image 
  style={{ marginLeft:"8%",  marginTop:"9%",resizeMode:"contain", width:400 , height:300}}
  source={require('../assets/leaveslogin.png')}/>
  
  <Image 
  style={{ resizeMode:"cover", marginTop:"118%",marginRight:"-90%",  width: 500, height: 700}}
  source={require('../assets/bailainlogin.png')}/>
  </View>
  
  
  <View style={{ marginTop:'-22%', marginLeft:60, zIndex:1, elevation:1}}>
  
  <Text style={{ fontSize:33}}>
  LOGIN
  </Text>
          
          <TextInput
          style={{...styles.textinput, marginTop:18}}
          label="Email"
          returnKeyType="next"
          value={email.value}
          onChangeText={(text) => setEmail({ value: text})}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
          placeholder="Enter Email"
        />


  
        <TextInput
        style={styles.textinput}
          label="Password"
          returnKeyType="done"
          keyboardType="password"
          value={password.value}
          secureTextEntry
          placeholder="Password"
          placeholderTextColor = '#9D9D9D'
          onChangeText={(text) => setPassword({ value: text })}
        />
  
  <Text style={{marginTop:-15, padding:8, fontSize:14, color:"blue"}}>Forgot password?</Text>
  </View>
  
  
  <TouchableOpacity style={{...styles.button, marginTop:460}}
  onPress={() => navigation.replace('HomeDrawer')}>
  <Text style={{alignItems:'center', alignContent:'center'}} >
  LOG IN
  </Text>
  </TouchableOpacity>
  


<Image
style={{  marginTop:"74%", position:'absolute', alignSelf:'flex-end', resizeMode:"contain",
 width: "100%", height: 500}}
source={require('../assets/flowertreelogin.png')}/>
</View>
    )
    }


    const styles = StyleSheet.create({

      container:{
        flex:1,
        backgroundColor: '#e6e6e6'
        
      },


      button: { 
        borderRadius:25,
        padding:"8%",
        width:150,
        height:55,
        textAlign:'center',
        alignSelf:"flex-start",
        alignItems:'center',
        marginLeft:"15%",
        backgroundColor:"#00cc66",
        flex:1,
        position:'absolute',
        elevation:1,
        zIndex:1
      
      },

      textinput:{
        height: 85, 
        borderColor:"#ffff99", 
        borderBottomWidth: 1, 
        width:250, 
        padding:10,
        color:"#83a95c",
        top:"-10%", 

     color: '#112D46', 
    letterSpacing: 0.8, 
    borderBottomColor: '#9D9D9D57', 
    borderBottomWidth: 1,
    paddingVertical: '2%'
      },


    })



  export default LoginScreen;