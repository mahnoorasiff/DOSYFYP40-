import * as React from 'react';
import {   StyleSheet, Button, View, Text, ActivityIndicator,
  TouchableOpacity, Image, AsyncStorage, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const getfit = ({ navigation }) => {
  return (
<View>

<Text style={{marginLeft:"5%", fontWeight:"bold", letterSpacing:1.5, fontSize:20}}>
      FOOD
  </Text>
  <View style={{flexDirection:'row', fontWeight:"bold"}}>
<TouchableOpacity  style={{...styles.card, backgroundColor:"#77DD77"}} activeOpacity={0.6}
onPress={() => navigation.navigate('Meal Planner')}>
<Text style={{ letterSpacing:0.4}}>
    Meal Planner
  </Text>
</TouchableOpacity>
<TouchableOpacity style={{...styles.card, backgroundColor:"#FFF192"}} activeOpacity={0.6} 
onPress={() => navigation.navigate('Categories')}>
<Text style={{ letterSpacing:0.4}}>
    Cook Book 
  </Text>
</TouchableOpacity>
</View>


<Text style={{marginLeft:"5%", fontWeight:"bold", letterSpacing:1.5, fontSize:20}}>
    ACTIVITY
  </Text>
            <View style={{flexDirection:'row'}}>
        <TouchableOpacity style={{...styles.card, backgroundColor:"#6CA0DC"}}  activeOpacity={0.6}>
        <Text style={{ letterSpacing:0.4}}>
        Activity Planner 
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{...styles.card, backgroundColor:"#F57A72"}}  activeOpacity={0.6}>
      <Text style={{ letterSpacing:0.4}}>
        Workout
        </Text>
      </TouchableOpacity>
        </View>

        
<Text style={{marginLeft:"5%", fontWeight:"bold", letterSpacing:1.5, fontSize:20}}>
  CALCULATOR
  </Text> 
        <View style={{flexDirection:'row'}}>
        <TouchableOpacity  style={{...styles.card, backgroundColor:"#E7D5AE"}}  activeOpacity={0.6}
        onPress={() => navigation.navigate('BMI')}>
        <Text style={{ letterSpacing:0.4}}>
        BMI Calculator
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{...styles.card, backgroundColor:"#AC9D8E"}}  activeOpacity={0.6}>
        <Text style={{ letterSpacing:0.4}}>
        Calorie Calculator
        </Text>
      </TouchableOpacity>
        </View>
</View>
  )
}


const styles = StyleSheet.create({
card: {
margin: 10,
justifyContent: 'center',
alignItems: 'center',
flex:1,
height: 155,
backgroundColor:"#A79AFF",
borderColor: '#cccccc',
borderWidth: 0.5,
borderRadius: 18,
shadowColor:'black',
shadowOpacity:0.25,
shadowRadius: 12,
elevation:3,
shadowOffset:{width:0, height:2}
}
})


export default getfit;