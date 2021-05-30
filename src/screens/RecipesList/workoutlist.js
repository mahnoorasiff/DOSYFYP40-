import React from 'react';
import {
  FlatList,
  Text,
  View,
  TouchableHighlight,
  Image,
  StyleSheet
} from 'react-native';
import {AsyncStorage} from '@react-native-async-storage/async-storage'
import styles from './styles';
import { getRecipes, getCategoryName } from '../../data/MockDataAPI';
import {day1, day2, day3, motorskills } from '../../../components/workoutsc'

export default class Woutlist extends React.Component {

  constructor(props) {
    super(props);
  }


  datalist=[...day1, ...day2, ...day3];


  onPresswout = item => {
    
    this.props.navigation.navigate('Activity Planner', { url:item.thumbnail })
    
  };


  renderworkouts = ({ item }) => (
    
    <TouchableHighlight underlayColor='rgba(73,182,77,0.9)'onPress={() => this.onPresswout(item)}>
      <View style={{...styles.container, borderRadius:5, height:styles.photo.height+5, width:styles.photo.width, borderWidth:1}}>
          
        <Image style={{...styles.photo,  borderRadius:10, resizeMode:"cover"}} source={{ uri: item.thumbnail }} />
        
      </View>
    </TouchableHighlight>
  );

  render() { 
    console.log("list page")
    
    return (  
      <View style={{backgroundColor:"#ffd0d2"}}>
         
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={this.datalist}
          renderItem={this.renderworkouts}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}

const styles2 = StyleSheet.create({

container:{
backgroundColor:"black",
flex:1

},

  card: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: "center",
    flex: 1,
    width: "88%",
    paddingVertical: "30%",
    backgroundColor: "#AFCBFF",
    borderRadius: 15,
    shadowColor: '#cccccc',
    shadowOpacity: 0.65,
    shadowRadius: 3,
    elevation: 3,
    shadowOffset: { width: 6, height: 2 }
  },

  photo_: {
    width: "100%",
    height: "100%",
    backgroundColor: "#D0F0C0",
    borderColor: "#B4D3B2",
    borderWidth: 1,
    borderRadius: 22
  }

})


