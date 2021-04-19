import * as React from 'react';
import { useEffect, useState } from 'react';
import {
  StyleSheet, Button, View, Text, ActivityIndicator,
  TouchableOpacity, Image, FlatList
} from 'react-native';
import {AsyncStorage} from '@react-native-async-storage/async-storage'

import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { RecipeCard } from '../src/AppStyles';

const mealplanner = ({ route, navigation }) => {
  const [selected, setselected] = useState('false')
  const [pressedid, setpressedid] = useState('')
  const [img, setimg] = useState('')

  //useeffect function is updated on each render
  React.useEffect(() => {
    if (route.params?.url) {
      // Post updated, do something with `route.params.post`
      console.log("xxxxx", route.params?.url)
      setselected(true)
      setimg(route.params.url)
      getData()
    }  
  }, [route.params?.url]);


 console.log("outside", selected)

  var d = new Date();
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  var tday = weekday[d.getDay()];
  const getnext=(v)=>{
    var x=0;
    if(v>=7){
      x=v-7;
      return weekday[x];
    }
    else{
      return weekday[v]
    }
  
  }
  
  const DATA = [
    //Day1
    {
      day: tday,
      id2:1,
      id: 3,
      name: "Breakfast",
      img: img
    },

    {
      day:" ",
      id2:2,
      id: 1,
      name: "Lunch",
      img: "x"
    },

    {
      day: "",
      id2:3,
      id: 1,
      name: "Dinner",
      img: "x"
    },

    {
      day:"",
      id2:4,
      id: 4,
      name: "Deserts",
      img: ""
    },

    {
      day:"",
      id2:5,
      id: 2,
      name: "snacks",
      img: ""
    },

    {
      day:"",
      id2:6,
      id: 0,
      name: "More",
      img: ""
    },

    //DAY2
    {
      day: getnext(d.getDay()+1),
      id: 3,
      id2:7,
      
      name: "Breakfast",
      img: ""
    },

    {
      day:"",
      id2:8,
      id: 1,
      name: "Lunch",
      img: ""
    },

    {
      day:"",
      id2:9,
      id: 1,
      name: "Dinner",
      img: ""
    },

    {
      day:"",
      id2:10,
      id: 4,
      name: "Deserts",
      img: ""
    },

    {
      day:"",
      id2:11,
      id: 2,
      name: "snacks",
      img: ""
    },

    {
      day:"",
      id: 0,
      id2:12,
      name: "More",
      img: ""
    },


    //DAY3
    {
      day: getnext(d.getDay()+2),
      id: 3,
      id2:13,
      
      name: "Breakfast",
      img: ""
    },

    {
      day:"",
      id: 1,
      id2:14,
      name: "Lunch",
      img: ""
    },

    {
      day:"",
      id: 1,
      id2:15,
      name: "Dinner",
      img: ""
    },

    {
      day:"",
      id: 4,
      id2:16,
      name: "Deserts",
      img: ""
    },

    {
      day:"",
      id: 2,
      id2:17,
      name: "snacks",
      img: ""
    },

    {
      day:"",
      id: 0,
      id2:18,
      name: "More",
      img: ""
    },


    //DAY4
    {
      day: getnext(d.getDay()+3),
      id: 3,
      id2:19,
      
      name: "Breakfast",
      img: ""
    },

    {
      day:"",
      id: 1,
      id2:20,
      name: "Lunch",
      img: " " 
    },

    {
      day:"",
      id: 1,
      id2:21,
      name: "Dinner",
      img: " " 
    },

    {
      day:"",
      id: 4,
      id2:22,
      name: "Deserts",
      img: ""
    },

    {
      day:"",
      id: 2,
      id2:23,
      name: "snacks",
      img: ""
    },

    {
      day:"",
      id: 0,
      id2:24,
      name: "More",
      img: ""
    },


    //DAY5
    {
      day: getnext(d.getDay()+4),
      id: 3,
      id2:25,
      name: "Breakfast",
      img: " " 
    },

    {
      day:"",
      id: 1,
      id2:26,
      name: "Lunch",
      img: " " 
    },

    {
      day:"",
      id: 1,
      id2:27,
      name: "Dinner",
      img: " " 
    },

    {
      day:"",
      id: 4,
      id2:28,
      name: "Deserts",
      img: ""
    },

    {
      day:"",
      id: 2,
      id2:29,
      name: "snacks",
      img: ""
    },

    {
      day:"",
      id: 0,
      id2:30,
      name: "More",
      img: ""
    },

        //DAY6
        {
          day: getnext(d.getDay()+5),
          id: 3,
          id2:25,
          
          name: "Breakfast",
          img: " " 
        },
    
        {
          day:"",
          id: 1,
          id2:26,
          name: "Lunch",
          img: " " 
        },
    
        {
          day:"",
          id: 1,
          id2:27,
          name: "Dinner",
          img: " " 
        },
    
        {
          day:"",
          id: 4,
          id2:28,
          name: "Deserts",
          img: ""
        },
    
        {
          day:"",
          id: 2,
          id2:29,
          name: "snacks",
          img: ""
        },
    
        {
          day:"",
          id: 0,
          id2:30,
          name: "More",
          img: ""
        },

    //DAY7
    {
      day: getnext(d.getDay()+6),
      id: 3,
      id2:25,
      name: "Breakfast",
      img: " " 
    },

    {
      day:"",
      id: 1,
      id2:26,
      name: "Lunch",
      img: " " 
    },

    {
      day:"",
      id: 1,
      id2:27,
      name: "Dinner",
      img: " " 
    },

    {
      day:"",
      id: 4,
      id2:28,
      name: "Deserts",
      img: ""
    },

    {
      day:"",
      id: 2,
      id2:29,
      name: "snacks",
      img: ""
    },

    {
      day:"",
      id: 0,
      id2:30,
      name: "More",
      img: ""
    },

  ]


  const onPressPlanner = item => {
    const title = item.name;
     setpressedid(item.id2)
    const card = item;
    navigation.navigate('MPRecipes', { title, card });
  
  };



    async function getData(){
    try {
      const value = await AsyncStorage.getItem('@storage_Key1')
      if (value !== null) {
        // We have data!!
        value= JSON.parse(value)
        console.log("value got",value);
      }
    } catch (error) {
      console.log("value not found");
      // Error retrieving data
    }
  };


  


  // useEffect( () => {
  // var uri;
  //     if ( selected==true && item.id2 == pressedid ) {
        
  //       console.log("pressedid...",pressedid, item.id2)
  //        uri=route.params?.url
  //       item.img= uri;
  //       setimg(uri)
  //       console.log("....itemimg", item.img)
  //     }
  //     else if(item.id2 !== pressedid && selected==true){
  //   setpressedid('') 
  //   setimg('')
  //   uri=''
  //   //console.log("falseee")
  //     }
  //   })



  const renderItems = ({ item }) => {  

    return (
      <View style={{  backgroundColor:'#f2fee8', flex:1 }}>

<Text style={{marginTop:"12%", marginLeft:"4.2%", marginRight:"-12%", flex:1, fontWeight: "300", fontSize: 20, letterSpacing: 0.3 , textTransform:'uppercase' }}>{item.day}</Text>
        <View style={{ flexDirection: 'column', flex:1, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity style={{ ...styles.card, marginTop:"5%" }} activeOpacity={0.6}
            onPress={() => onPressPlanner(item)}>
              {selected == true ? <Image style={styles.photo_}
               source={{ uri: item.img}} /> :
              <Ionicons name="duplicate-outline"
                color="white"
                size={50}
              />}

          </TouchableOpacity>
         
            <Text style={{ fontWeight: "400", marginTop:'6%', fontSize:18, color: "#487D49", letterSpacing: 0.4 }}>{item.name}</Text>
          
        </View>
      </View>
    )
  }
    ;



  return (
    <View >

      <FlatList style={{ margin: "1%" }}
        keyExtractor={(item => item.id2)}
        data={DATA}
        renderItem={renderItems}
        numColumns={3}

      />
    </View>

  )
}



const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: "center",
    flex: 1,
    width: "90%",
    height: "100%",
    paddingHorizontal: "8%",
    paddingVertical: "28%",
    backgroundColor: "#D0F0C0",
    borderColor: '#cccccc',
    borderWidth: 0.5,
    borderRadius: 15,
    shadowColor: '#cccccc',
    shadowOpacity: 0.65,
    shadowRadius: 2,
    elevation: 3,
    shadowOffset: { width: 6, height: 2 }
  },

  photo_: {
    width: "105%",
    height: "185%",
    paddingHorizontal: "8%",
    paddingVertical: "30%",
    backgroundColor: "#D0F0C0",
    borderColor: "#B4D3B2",
    borderWidth: 1,
    borderRadius: 22
  }

})


export default mealplanner;