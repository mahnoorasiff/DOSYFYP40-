import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Dimensions, TouchableOpacity, Text, Image } from 'react-native';


const { width } = Dimensions.get('window');
const motorskills = [
  {
    id: 1,
    name: "Buttons",
    photo_url: require("../components/screenspics/buttons.png"),
    article: "https://i.postimg.cc/W1GHXRmr/buttonsflash.jpg"
  },

  {
    id: 2,
    name: "Cleaning",
    photo_url: require("../components/screenspics/cleanicon.png"),
    article: "https://i.postimg.cc/WzLwC8PK/sprayflash.jpg"
  },

  {
    id: 3,
    name: "Clothes",
    photo_url: require("../components/screenspics/clothes.png"),
    article: "https://i.postimg.cc/hPXVs9nq/clothesflash.jpg"
  },

  {
    id: 4,
    name: "Laundry",
    photo_url: require("../components/screenspics/laundryyicon.png"),
    article: "https://i.postimg.cc/sX8NX5C9/laundryflash.jpg"
  },

  {
    id: 5,
    name: "Needle and Threads",
    photo_url: require("../components/screenspics/needleandthreads.png"),
    article: "https://i.postimg.cc/JhHJ8XKW/threadneedleflash.jpg"
  },
];


export const day1 = [
  {
    id: 1,
    day: 1,
    thumbnail: "https://i.postimg.cc/RhhD73qg/sidehop-1.png",
    videolink:"https://cdn.kapwing.com/sidehop_1-ud9c8js2EP.mp4"
  },

  {
    id: 2,
    day: 1,
    thumbnail: "https://i.postimg.cc/RVk6BRrv/runninginplace-2.png",
    videolink: "https://cdn.kapwing.com/runninginplace_2-gzxOoSU6zK.mp4"
  },

  {
    id: 3,
    day: 1,
    thumbnail: "https://i.postimg.cc/SKyKS1gb/verticaljumps-3.png",
    videolink: "https://cdn.kapwing.com/verticaljumps_3-31V-D5uoxE.mp4"
  },

  {
    id: 4,
    day: 1,
    thumbnail: "https://i.postimg.cc/W17kwkKj/legraise-4.png",
    videolink: "https://cdn.kapwing.com/legraise_4-4QbY3ill3l.mp4"
    
  },

  {
    id: 5,
    day: 1,
    thumbnail: "https://i.postimg.cc/RFWJmb0V/squats-5.png",
    videolink: "https://cdn.kapwing.com/squats_5-QIpKTcnv33.mp4"
  },

  {
    id: 6,
    day: 1,
    thumbnail: "https://i.postimg.cc/Y9L0ZGXv/side-bends-6.png",
    videolink: "https://cdn.kapwing.com/sidebends_6-g1xjDOcP4P.mp4"
  }

];

//update videolinks
export const day2 = [
  {
    id: 7,
    day: 2,
    thumbnail: "https://i.postimg.cc/RVk6BRrv/runninginplace-2.png",
    videolink: "https://cdn.kapwing.com/final_6094133c256528005c1f88d6_971892.mp4"
  },

  {
    id: 8,
    day: 2,
    thumbnail: "https://i.postimg.cc/DwmTxVpZ/crunches-22.png",
    videolink: "https://cdn.kapwing.com/final_60942d17356b2a008bc2342c_794623.mp4"
  },

  {
    id: 9,
    day: 2,
    thumbnail: "https://i.postimg.cc/SKyKS1gb/verticaljumps-3.png",
    videolink: "https://cdn.kapwing.com/final_60941794916915002f02037c_508844.mp4"
  },

  {
    id: 10,
    day: 2,
    thumbnail: "https://i.postimg.cc/fR165V02/shadowboxing-24.png",
    videolink: "https://cdn.kapwing.com/shadowboxing24-2Ef9oVodwE.mp4"
  },

  {
    id: 11,
    day: 2,
    thumbnail: "https://i.postimg.cc/RFWJmb0V/squats-5.png",
    videolink: "https://cdn.kapwing.com/squats_5-AIKNF4T_Xq.mp4"
  },

  {
    id: 12,
    day: 2,
    thumbnail: "https://i.postimg.cc/brvCqPtS/kneetoelbows-26.png",
    videolink: "https://cdn.kapwing.com/kneetoelbows_26-oI_8zOUlbv.mp4"
  }

];


export const day3 = [
  {
    id: 13,
    day: 3,
    thumbnail: "https://i.postimg.cc/Dw1gk0MY/jumpingjacks-31.png",
    videolink: "https://cdn.kapwing.com/jumpingjacks_31-6bmjEuB5Pu.mp4"
  },

  {
    id: 14,
    day: 3,
    thumbnail: "https://i.postimg.cc/DwmTxVpZ/crunches-22.png",
    videolink: "https://cdn.kapwing.com/final_60942d17356b2a008bc2342c_794623.mp4"
  },

  {
    id: 15,
    day: 3,
    thumbnail: "https://i.postimg.cc/8C1L2HWj/airbicycle-33.png",
    videolink: "https://cdn.kapwing.com/airbicycle_33-urLv6M3ZFl.mp4"
  },

  {
    id: 16,
    day: 3,
    thumbnail: "https://i.postimg.cc/fR165V02/shadowboxing-24.png",
    videolink: "https://cdn.kapwing.com/shadowboxing24-2Ef9oVodwE.mp4"
  },

  {
    id: 17,
    day: 2,
    thumbnail: "https://i.postimg.cc/PfLVVXT0/plane-35.png",
    videolink: "https://cdn.kapwing.com/plane_35-fGBA0IBEK5.mp4"
  },

  {
    id: 18,
    day: 2,
    thumbnail: "https://i.postimg.cc/brvCqPtS/kneetoelbows-26.png",
    videolink: "https://cdn.kapwing.com/kneetoelbows_26-oI_8zOUlbv.mp4"
  }

];



export default Wouts = ({ route, navigation }) => {

  return (

    
    <ScrollView
    
      style={styles.container}
      //contentContainerStyle={styles.contentContainer}
      horizontal={false}
      decelerationRate={0}
      snapToInterval={width - 60}
      snapToAlignment={'center'}
    >

<Text style={{ ...styles.heading,  marginTop: "15%", padding:5}}>
        Gross Motor Skills
    </Text>
      

      <ScrollView horizontal={true}>
        {motorskills.map(item => {

          return (
            <View style={styles.view} >
              <TouchableOpacity onPress={() => navigation.navigate('Motor Skills Articles', { articleurl: item.article })}>

                <Image
                  style={styles.circles}
                  source={item.photo_url}
                >
                </Image>

              </TouchableOpacity>
            </View>
          );
        })}
        
      </ScrollView>


      <Text style={{...styles.heading, marginTop:"5%", padding:5}}>
        Endurance and Muscle Tone
    </Text>

    <Text style={{color:"#DC143C", paddingHorizontal:"5%", paddingVertical:"2%", fontSize:20}}>DAY 1</Text>

      <ScrollView horizontal={true}>
      
        {day1.map(item => {
          return (
            <View style={styles.view2} >
              <TouchableOpacity
                onPress={() => navigation.navigate('Videos Screen', { vidurl: item.videolink })}
              >
                <Image
                  style={styles.viewcard}
                  source={{uri:item.thumbnail}}
                ></Image>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>


      <View>
          <Text style={{color:"#DC143C", paddingHorizontal:"5%", paddingVertical:"2%", fontSize:20}} >DAY 2</Text>
        </View>

      <ScrollView horizontal={true}>
        
        {day2.map(item => {
          return (
            <View style={styles.view2} >
              <TouchableOpacity
                onPress={() => navigation.navigate('Videos Screen', { vidurl: item.videolink })}
              >
                <Image
                  style={styles.viewcard}
                  source={{uri:item.thumbnail}}
                ></Image>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>


      <View>
          <Text style={{color:"#DC143C", paddingHorizontal:"5%", paddingVertical:"2%", fontSize:20}} >DAY 3</Text>
        </View>
        
      <ScrollView horizontal={true}>
        {day3.map(item => {
          return (
            <View style={styles.view2} >
              <TouchableOpacity
                onPress={() => navigation.navigate('Videos Screen', { vidurl: item.videolink })}
              >
                <Image
                  style={styles.viewcard}
                  source={{uri:item.thumbnail}}
                ></Image>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>

    </ScrollView>
  );

}


const styles = StyleSheet.create({
  heading: {
    fontSize: 18.5,
    marginBottom:"2%",
    letterSpacing:0.2,
    fontWeight: '500',
    paddingHorizontal:"5%",
    color:"#006666"
  },
  
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 60
  },
  container: {
    backgroundColor: '#e4e5ff',
    height: Dimensions.get('window').height / 3,
    flex: 1,
    //paddingTop: Constants.statusBarHeight,
  },

  view: {
    width: 150,//width - 50
    margin: 10,
    height: 150,
    borderRadius: 200,
  },

  circles: {
    width: '100%',
    height: '100%',
    //borderColor: 'grey',
    
    borderRadius: 200,
    borderColor:"white"
  },
  view2: {
    width: 200,
    margin: 8,
    height: 220,
    borderRadius: 10,
    paddingHorizontal : 8
  },

  viewcard: {
    width: 185,
    height: 200,
    resizeMode:"contain",
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 30,
    
  }
});