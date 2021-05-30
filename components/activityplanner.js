import * as React from 'react';
import { useEffect, useState } from 'react';
import {
  StyleSheet,
  Button,
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import { AsyncStorage } from '@react-native-async-storage/async-storage';
import {DATA2} from './plannerdaysdata'
import { Ionicons, FontAwesome } from '@expo/vector-icons';



export default Activityplanner= ({ route, navigation }) => {
  const [selected, setselected] = useState('false')
  const [pressedid, setpressedid] = useState('')
  const [getimg, setimg] = useState('')

  // useeffect function is updated on each render
  React.useEffect(() => {
    if (route.params?.url) {
      // Post updated, do something with `route.params.url`
      console.log(pressedid);
      
      setselected(true);
      const img_rec = route.params.url
      console.log("Image recieved: ", img_rec)
      setimg(route.params.url);
      //console.log("DATA ID:",DATA.id2)
      DATA2.map( data => {
        if(data.id2 == pressedid){
          data.img = img_rec
          console.log("DATA ID: ", data.id2, "Data img: ", data.img)
        }
      })
      console.log("---------END OF USEEFFECT----------")
    }
  }, [route.params?.url]);


const onPressPlanner = (item) => {
    
  setpressedid(item.id2);
  const card = item;
  console.log("issue: ",item.img)
  navigation.navigate('WorkOut List', {  card });
  

};




  const renderItems = ({ item }) => {  

    return (
      <View style={{  backgroundColor:'#E4F6F8', flex:1 }}> 
      
<Text style={{ marginLeft:"8%", marginTop:"8%", flex:1, fontWeight: "350",
 fontSize: 20, letterSpacing: 0.3 , textTransform:'uppercase' }}>{item.day}</Text>
        <View style={{ flexDirection: 'column', paddingHorizontal:"6%", flex:1, justifyContent: 'center',
         alignItems: 'center' }}>
          <TouchableOpacity style={{ ...styles.card, marginTop:"5%" }} activeOpacity={0.6}
                        onPress={() => onPressPlanner(item)}>
                        {item.img != '' ? (
                          <Image style={styles.photo_} source={{ uri: item.img }} />
                        ) : (
                          <Ionicons name="duplicate-outline" color="white" size={50} />
                        )}
            
          </TouchableOpacity>
         
          
        </View>
      </View>
    )
  }
    ;



  return (
    <View style={{  backgroundColor:'#E4F6F8', padding:"1%", flex:1}}>
    
<Text style={{color:"#black", fontSize:30, padding:"6%",fontWeight:"350", letterSpacing:"0.6", 
    }}>
  What activities have you done?
</Text>
<View
  style={{
    borderBottomColor: 'grey',
    borderBottomWidth: 1.2,
    marginTop:"4%",
    marginHorizontal:"6%"
  }}>
  </View>
      <FlatList 
        keyExtractor={(item => item.id2)}
        data={DATA2}
        renderItem={renderItems}
        numColumns={2}

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
    width: "88%",
    paddingVertical: "30%",
    backgroundColor: "#AFCBFF",
    borderColor: '#cccccc',
    borderWidth: 0.5,
    borderRadius: 15,
    shadowColor: '#cccccc',
    shadowOpacity: 0.65,
    shadowRadius: 3,
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


