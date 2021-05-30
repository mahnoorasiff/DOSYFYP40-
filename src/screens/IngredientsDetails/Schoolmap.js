import React from "react";
import {
  FlatList,
  Text,
  View,
  Image,
  TouchableHighlight,
  StyleSheet,
  Dimensions,
} from "react-native";
import { getIngredientName, getAllIngredients } from "../../data/MockDataAPI2";
import Constants from 'expo-constants';
import MapView from "react-native-maps";
import { PROVIDER_GOOGLE } from "react-native-maps";

export default class Schoolmap extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("title"),
      headerTitleStyle: {
        fontSize: 16,
      },
    };
  };

  constructor(props) {
    super(props);
  }

  onPressIngredient = (item) => {
    let name = getIngredientName(item.ingredientId);
    let ingredient = item.ingredientId;
    this.props.navigation.navigate("Ingredient", { ingredient, name });
  };

  renderIngredient = ({ item }) => (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,0.9)"
      onPress={() => this.onPressIngredient(item[0])}
    >
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item[0].photo_url }} />
        <Text style={styles.title}>{item[0].name}</Text>
        <Text style={{ color: "grey" }}>{item[1]}</Text>
      </View>
    </TouchableHighlight>
  );

  render() {
    const { navigation } = this.props;
    const inst_name =  this.props.route.params.title;
    const lati =  this.props.route.params.lat;
    const longi =  this.props.route.params.long;
    const addre =  this.props.route.params.addre;

    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: lati,
            longitude: longi,
            latitudeDelta: 0.00922,
            longitudeDelta: 0.00921,
          }}
          style={styles.map}
        >
          <MapView.Marker
            coordinate={{
              latitude: lati,
              longitude: longi,
            }}
            title={inst_name}
            description={addre}
          />
        </MapView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
