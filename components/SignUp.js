import * as React from 'react';
import { StyleSheet, Button, View, Text,  Image, TouchableOpacity, TextInput} from 'react-native';
import { useState } from 'react';


const SignUp = ({ navigation }) => {
    const [email, setEmail] = useState({value:''});
    const [username, setUsername] = useState({ value:''})
    const [pass1, setPass1] = useState({ value:''});
    const [pass2, setPass2] = useState({ value:''})

    
    return (
      <View style={styles.container}>
    <View style={styles.top}>
      
      
  <Image 
  style={{ width:260, height:"100%", top:-14,  left:-8}}
  source={require('../assets/signupleft.png')}/>
  <Image 
  style={{marginTop:-5, width:365, height:"800%", resizeMode:"cover", right:30}}
  source={require('../assets/birdie.png')}/>
  </View>


  <View style={styles.mid}>
  <Text style={{ fontSize:33, alignSelf:"flex-start",  left:"15%", top:"-10%"}}>
  Sign Up
  </Text>
  <TextInput
  style={{...styles.textinput, marginTop:10}}
          label="Username"
          returnKeyType="next"
          value={username.value}
          onChangeText={(text) => setUsername({ value: text})}
          autoCapitalize="none"
          placeholderTextColor = '#9D9D9D'
          placeholder="Username"

        />

        <TextInput
          style={styles.textinput}
          label="Email"
          returnKeyType="next"
          value={email.value}
          onChangeText={(text) => setEmail({ value: text})}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
          placeholderTextColor = '#9D9D9D'
          placeholder="Email"
        />
  
        <TextInput
        style={styles.textinput}
        placeholderTextColor = '#9D9D9D'
          label="Password"
          returnKeyType="done"
          value={pass1.value}
          placeholder="Password"
          onChangeText={(text) => setPass1({ value: text })}
        />
  
        <TextInput
        style={styles.textinput}
          label="Re-Password"
          returnKeyType="done"
          value={pass2.value}
          placeholder="Re-enter Password"
          placeholderTextColor = '#9D9D9D'
          onChangeText={(text) => setPass2({ value: text })}
        />

  </View>


  <View style={{ height:"17%", marginTop:-17  }}>
<TouchableOpacity style={{...styles.button}} 
  onPress={() => navigation.navigate('LoginScreen')}>
  <Text >
  Sign Up
  </Text>
  </TouchableOpacity>
  </View>



  <View style={styles.end}>

        

  <Image 
  style={{height:"200%", resizeMode:'stretch' ,right:"5%", width:"110%"}}
  source={require('../assets/lilly.png')}/>
  </View>
  
  </View>


    )
    }

    const styles = StyleSheet.create({

      container:{
        flex:1,
        backgroundColor:'#f2f2f2',
        height:'100%'
        
      },

      top:{
        marginTop:0,
        height:"20%",
        flexDirection:"row",
        alignItems:"stretch",
        justifyContent:"space-around",

      },

      button: {
        borderRadius:25,
        textAlign:"center",
        padding:15,
        width:165,
        height:55,
        textAlign:'center',
        alignSelf:"flex-start",
        alignItems:'center',
        marginLeft:"16%",
        backgroundColor:"#70af85",
        position:'relative',
        zIndex:1,
        elevation:1

        
      },
      link: {
        fontWeight: 'bold',
        color: '#83a95c'
      },

      mid: {
        height:"50%",
        alignItems:"center",
        
      }, 
      textinput:{
        height: 65, 
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
      end:{
        
        height:"20%",
        alignItems:"center",
        justifyContent:"flex-end",
        flex:1
        
      }

        })



    export default SignUp;