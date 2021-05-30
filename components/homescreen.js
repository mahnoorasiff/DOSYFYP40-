import * as React from 'react';
import { StyleSheet,  View, Text, Image, TouchableOpacity, StatusBar, ImageBackground, Dimensions} from 'react-native';
import Constants from 'expo-constants';
import { ScrollView } from 'react-native-gesture-handler';


const Home = ({ navigation }) => {
  
    return (

        <ScrollView>
        <View style={styles.container}>
        <ImageBackground
                style={styles.bgView}
                source={require("./screenspics/BG.png")}>
                   
        <View style={{
                     justifyContent: "space-evenly",
                    alignItems:"center",
                paddingTop:10
                    
                }}>
                <TouchableOpacity activeOpacity={0.6} 

                    >
                             <Image
                            style={{ width: 255, height: 200,  resizeMode:"contain"
                            }}
                            source={require("./screenspics/english.png")}>
                        </Image>

                    </TouchableOpacity>
                    
                    
                    
                    <TouchableOpacity >
                        <Image
                            style={{ width: 312, height: 230, resizeMode:"contain"}}
                            source={require("./screenspics/maths.png")}>
                        </Image>
                    </TouchableOpacity>

                    
                                    
                <TouchableOpacity activeOpacity={0.6}
    
                        >
                        <Image
                            style={{ width: 310, height: 220, resizeMode:"contain" }}
                            source={require("./screenspics/kyobj.png")}>
                        </Image>
                    </TouchableOpacity>
                    </View>
                    </ImageBackground>
                </View>
                    </ScrollView>

    )
}



const styles = StyleSheet.create({

    
    container: {
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
        backgroundColor: "black", //pastel green background
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight,
        padding: 0,
        
      },
    bgView: {
        width: "101%",
        height: Dimensions.get('window').height,

    }
    
})

export default Home;